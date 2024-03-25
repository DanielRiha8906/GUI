from sqlalchemy import Column, Integer, String
from database import Base
from datetime import datetime

class Review(Base):
    __tablename__ = "reviews"
    id = Column(Integer, primary_key=True, index=True)
    username = Column(String(50))
    song_name = Column(String(50))
    artist_name = Column(String(50))
    review_text = Column(String(1000))
    date_time = Column(String, default=datetime.now())

class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True)
    hashed_password = Column(String)
