from fastapi import APIRouter, HTTPException, status
from bson import ObjectId

from auth import hash_password, verify_password, create_access_token
from database import get_db
from models import RegisterRequest, LoginRequest, AuthResponse

router = APIRouter(tags=["auth"])


def _serialize_user(user: dict) -> dict:
    """Convert MongoDB doc to a JSON-serialisable dict, stripping the password."""
    return {
        "_id": str(user["_id"]),
        "username": user.get("username", ""),
        "email": user.get("email", ""),
        "googleId": user.get("googleId", ""),
        "history": user.get("history", []),
    }


@router.post("/register", response_model=AuthResponse)
async def register(body: RegisterRequest):
    db = get_db()
    users = db["users"]

    if not body.username or not body.password:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Username and password are required",
        )

    existing = await users.find_one({"username": body.username})
    if existing:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Username already exists",
        )

    hashed = hash_password(body.password)
    result = await users.insert_one(
        {"username": body.username, "password": hashed, "history": []}
    )

    new_user = await users.find_one({"_id": result.inserted_id})
    token = create_access_token({"userId": str(result.inserted_id)})

    return {
        "message": "User registered successfully.",
        "jwtToken": token,
        "user": _serialize_user(new_user),
    }


@router.post("/login", response_model=AuthResponse)
async def login(body: LoginRequest):
    db = get_db()
    users = db["users"]

    # Explicitly include password field (select: false equivalent)
    user = await users.find_one(
        {"username": body.username}, {"password": 1, "username": 1, "history": 1}
    )

    if not user or not verify_password(body.password, user.get("password", "")):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Authentication failed",
        )

    token = create_access_token({"userId": str(user["_id"])})

    return {
        "message": "Login successful",
        "jwtToken": token,
        "user": _serialize_user(user),
    }
