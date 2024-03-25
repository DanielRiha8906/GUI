from fastapi import FastAPI, Depends, status, HTTPException
from database import engine, SessionLocal
from pydantic import BaseModel
from sqlalchemy.orm import Session
import models
from typing import Annotated, List
from fastapi.middleware.cors import CORSMiddleware
import auth
from auth import get_current_user

app = FastAPI()
app.include_router(auth.router)

origins = [
    "http://localhost:3000"
]

app.add_middleware(CORSMiddleware, allow_origins=origins)

models.Base.metadata.create_all(bind=engine)

class ReviewBase(BaseModel):
    username: str
    song_name: str
    artist_name: str
    review_text: str

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

db_dependency = Annotated[Session, Depends(get_db)]
user_dependency = Annotated[dict, Depends(get_current_user)]

@app.get("/reviews", status_code=status.HTTP_200_OK)
def show_reviews(db: db_dependency, skip: int = 0, limit: int = 100):
    reviews = db.query(models.Review).offset(skip).limit(limit).all()
    return reviews

@app.get("/review/{review_id}", status_code=status.HTTP_200_OK)
def show_review(review_id: int, db: db_dependency):
    review = db.query(models.Review).filter(models.Review.id == review_id).first()
    if review is None:
        raise HTTPException(status_code=404, detail="Review not found")
    return review

@app.get("/current_user", status_code=status.HTTP_200_OK)
def user(user: user_dependency, db: db_dependency):
    if user is None:
        raise HTTPException(status_code=401, detail="Autetification Failed")
    return {"User": user}

@app.post("/review", status_code=status.HTTP_201_CREATED)
def create_review(review: ReviewBase, db: db_dependency):
    new_review = models.Review(**review.model_dump())
    db.add(new_review)
    db.commit()

@app.patch("/review/{review_id}", status_code=status.HTTP_200_OK)
def update_review(review_id: int, review_text: str, db: db_dependency):
    review = db.query(models.Review).filter(models.Review.id == review_id).first()
    if review is None:
        raise HTTPException(status_code=404, detail="Review not found")
    review.review_text = review_text
    db.commit()
    db.refresh(review)

@app.delete("/review/{review_id}", status_code=status.HTTP_200_OK)
def remove_review(review_id: int, db: db_dependency):
    review = db.query(models.Review).filter(models.Review.id == review_id).first()
    if review is None:
        raise HTTPException(status_code=404, detail="Review not found")
    db.delete(review)
    db.commit()
