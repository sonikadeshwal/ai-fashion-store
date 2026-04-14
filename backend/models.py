from sqlalchemy import Column, Integer, String, Float, Boolean, Text
from database import Base

class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True)
    hashed_password = Column(String)
    style_preference = Column(String, default="casual") # e.g. "casual", "chic", "streetwear"
    is_active = Column(Boolean, default=True)

class Product(Base):
    __tablename__ = "products"
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    description = Column(Text)
    price = Column(Float)
    image_url = Column(String)
    category = Column(String, index=True)
    ai_tags = Column(String) # comma separated tags from NLP extraction
