from fastapi import FastAPI
from typing import Union
from uuid import uuid4
from fastapi import FastAPI 
from fastapi.middleware.cors import CORSMiddleware 
import bcrypt
import stripe
import os
from config import settings
from fastapi import FastAPI
from Bookings import Bookings




origins = [
    "http://localhost:8000",
    "http://localhost",
    "http://localhost:3000",
    "http://localhost:5173",
    "http://localhost:5174",
    "http://localhost:5175",
]

app.add_middleware(
    CORSMiddleware, 
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)




@app.get("/")
def get_users():
    