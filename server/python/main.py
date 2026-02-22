from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from database import connect_db, close_db
from routers import auth, messages


@asynccontextmanager
async def lifespan(app: FastAPI):
    """Connect to MongoDB on startup, close on shutdown."""
    await connect_db()
    yield
    await close_db()


app = FastAPI(
    title="Samvidhan.AI API",
    description="AI-powered Indian legal companion backend",
    version="2.0.0",
    lifespan=lifespan,
)

# CORS — allow requests from the Vite dev server and production frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://localhost:5173",
        "https://samvidhanai.netlify.app",
        "*",  # keep permissive for now; tighten in production
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router)
app.include_router(messages.router)


@app.get("/", tags=["health"])
async def root():
    return {"status": "ok", "message": "Samvidhan.AI API is running"}
