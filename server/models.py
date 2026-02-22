from pydantic import BaseModel, Field
from typing import Optional, List


# ── Auth ──────────────────────────────────────────────────────────────────────

class RegisterRequest(BaseModel):
    username: str
    password: str


class LoginRequest(BaseModel):
    username: str
    password: str


class AuthResponse(BaseModel):
    message: str
    jwtToken: str
    user: dict


# ── Chat ──────────────────────────────────────────────────────────────────────

class GenerateRequest(BaseModel):
    inputText: str


class HistoryItem(BaseModel):
    title: str
    content: str


class GenerateResponse(BaseModel):
    response: str


class MessageResponse(BaseModel):
    message: str


# ── Internal user doc shape (from MongoDB) ────────────────────────────────────

class UserDoc(BaseModel):
    id: Optional[str] = None
    username: str
    password: Optional[str] = None
    googleId: Optional[str] = None
    email: Optional[str] = None
    history: List[HistoryItem] = []
