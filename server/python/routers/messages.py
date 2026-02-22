from fastapi import APIRouter, Depends, HTTPException, status
from bson import ObjectId

from config import settings
from database import get_db
from dependencies import get_current_user
from models import GenerateRequest, GenerateResponse, HistoryItem, MessageResponse

from openai import AsyncOpenAI

router = APIRouter(tags=["messages"])

openai_client = AsyncOpenAI(api_key=settings.OPENAI_API_KEY)

SYSTEM_PROMPT = "You are a legal advisor bot for Indian laws."
USER_PROMPT_SUFFIX = (
    " Give the response of the said query as a legal advisor bot (for India). "
    "If you think that the query is serious, tell them to find contact to a lawyer "
    "from the find lawyer option. The answer should be strictly under 150 words."
)


async def _ai_response(input_text: str) -> str:
    """Call OpenAI and return the assistant reply text."""
    response = await openai_client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": SYSTEM_PROMPT},
            {"role": "user", "content": input_text + USER_PROMPT_SUFFIX},
        ],
        max_tokens=400,
    )
    return response.choices[0].message.content


@router.post("/generate-response", response_model=GenerateResponse)
async def generate_response(
    body: GenerateRequest,
    current_user: dict = Depends(get_current_user),
):
    db = get_db()
    users = db["users"]
    user_id = ObjectId(current_user["userId"])

    user = await users.find_one({"_id": user_id})
    if not user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User not found")

    ai_reply = await _ai_response(body.inputText)

    new_entry = {"title": body.inputText, "content": ai_reply}
    await users.update_one({"_id": user_id}, {"$push": {"history": new_entry}})

    return {"response": ai_reply}


@router.delete("/delete-response", response_model=MessageResponse)
async def delete_response(current_user: dict = Depends(get_current_user)):
    db = get_db()
    users = db["users"]
    user_id = ObjectId(current_user["userId"])

    result = await users.update_one({"_id": user_id}, {"$set": {"history": []}})
    if result.matched_count == 0:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User not found.")

    return {"message": "History deleted successfully."}


@router.get("/get-messages", response_model=list[HistoryItem])
async def get_messages(current_user: dict = Depends(get_current_user)):
    db = get_db()
    users = db["users"]
    user_id = ObjectId(current_user["userId"])

    user = await users.find_one({"_id": user_id}, {"history": 1})
    if not user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User not found.")

    return user.get("history", [])
