from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from database import engine
import models
from routers import auth, products, search

# Automatically create database tables strictly for dev mode
models.Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="AI Fashion Store API",
    description="Advanced production-ready API for AI fashion recommendations",
    version="1.0.0"
)

# CORS fallback
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include Routers
app.include_router(auth.router)
app.include_router(products.router)
app.include_router(search.router)

@app.get("/")
def read_root():
    return {"message": "Welcome to the AI Fashion Store Engine ⚡"}

@app.get("/health")
def health_check():
    return {"status": "ok"}
