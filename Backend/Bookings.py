from typing import Optional, List
from pydantic import BaseModel
from datetime import datetime
from db.database import Base, engine

class Bookings(BaseModel): #no RLS
    name : str
    email : str
    phone: str 
    message: str
    date: str
    Owner_ID: str

    Base.metadata.create_all(engine)