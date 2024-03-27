# FastAPI pro mobilní aplikace
## Konfigurace projektu
*  Vytvořime si virtualní prostředí: `py -3 -m venv venv`
*   Aktivujeme ho: `venv/Scripts/activate`
*   Budeme potřebovat frameworky FastAPI, Uvicorn a SQLAlchemy.<br>Nainstalujeme si to: `pip install fastapi uvicorn sqlalchemy`.
*   Uděláme soubor `requirements.txt`: `pip freeze > requirements.txt`

Máme mít takovou strukturu projektu:
```.
├── backend
│   ├── venv
│   ├── database.py
│   ├── main.py
│   ├── models.py
│   ├── music_reviews_app.db
│   └── requirements.txt
└── frontend
```

## Připojení k databázi
* Pro jednoduchost budeme použivat SQLite. V souboru `database.py` naimportujeme metody z baličku SQLAlchemy.
```python
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base
```

* Definujeme adresu databáze<br>
```DATABASE_URL = "sqlite:///./music_reviews_app.db"```

* Vytvaříme instance tříd Engine, Session a Base pro práci s databází
```
engine = create_engine(DATABASE_URL, connect_args={"check_same_thread": False})

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()
```

## Založení modelů
Teď v souboru `models.py` máme založit dva modelů (tabulky), pro recenze a uživatele.

```python
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
```

## Založení aplikace
Nejprvé máme vytvořit objekt třídy FastAPI, která bude reprezentovat naši aplikaci.
```python
from fastapi import FastAPI

app = FastAPI()
```

## Validace dat
Validaci dat provedeme pomoci knihovny `pydantic`.
```python
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class ReviewBase(BaseModel):
    username: str
    song_name: str
    artist_name: str
    review_text: str
```

## Definování databázové závislosti
Dalším krokem je vytvoření tzv. databázové závislosti (db_dependency)
* vytvoření tabulek: ```python
models.Base.metadata.create_all(bind=engine)```
* funkce, která otevírá Session a po provedení operace jí zavírá
   ```python
   def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
   ```
* Závislost: ```db_dependency = Annotated[Session, Depends(get_db)```
<br>
Celý kód:
```python
from fastapi import FastAPI, Depends
from pydantic import BaseModel
from database import engine, SessionLocal
from typing import Annotated
from sqlalchemy.orm import Session
import models

app = FastAPI()

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
```

## Komunikace s Reactem
Pro zajištění komunikaci s Reactem musíme použit metodu add_middleware
1. ```pythonfrom fastapi.middleware.cors import CORSMiddleware```
2. ```pythonorigins = ["http://localhost:3000"]```
3. ```pythonapp.add_middleware(CORSMiddleware, allow_origins=origins)```

## Koncové body
Pomocí prvního endpointu tvoříme recenzi a uložíme jí do databázi: 
```python
@app.post("/review", status_code=status.HTTP_201_CREATED)
def create_review(review: ReviewBase, db: db_dependency):
    new_review = models.Review(**review.model_dump())
    db.add(new_review)
    db.commit()
```
Pak dva endpointů s metodou Get<br>
* Výpis všech recenzí:
```python
@app.get("/reviews", status_code=status.HTTP_200_OK)
def show_reviews(db: db_dependency, skip: int = 0, limit: int = 100):
    reviews = db.query(models.Review).offset(skip).limit(limit).all()
    return reviews
```
* Výpis recenzi podle id:
```python
@app.get("/review/{review_id}", status_code=status.HTTP_200_OK)
def show_review(review_id: int, db: db_dependency):
    review = db.query(models.Review).filter(models.Review.id == review_id).first()
    if review is None:
        raise HTTPException(status_code=404, detail="Review not found")
    return review
```
* Patch: opravit recenzi
```python
@app.patch("/review/{review_id}", status_code=status.HTTP_200_OK)
def update_review(review_id: int, review_text: str, db: db_dependency):
    review = db.query(models.Review).filter(models.Review.id == review_id).first()
    if review is None:
        raise HTTPException(status_code=404, detail="Review not found")
    review.review_text = review_text
    db.commit()
    db.refresh(review)
```
* Delete: smazat recenzi
```python
@app.delete("/review/{review_id}", status_code=status.HTTP_200_OK)
def remove_review(review_id: int, db: db_dependency):
    review = db.query(models.Review).filter(models.Review.id == review_id).first()
    if review is None:
        raise HTTPException(status_code=404, detail="Review not found")
    db.delete(review)
    db.commit()
```

## Celý kód (main.py)
```python
from fastapi import FastAPI, Depends, status, HTTPException
from database import engine, SessionLocal
from pydantic import BaseModel
from sqlalchemy.orm import Session
import models
from typing import Annotated, List
from fastapi.middleware.cors import CORSMiddleware
from auth import *
# from auth import get_current_user

app = FastAPI()
app.include_router(router)

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
```
