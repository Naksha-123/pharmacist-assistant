from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from models.database import SessionLocal
from models.prescription import Prescription

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.get("/prescriptions/")
def get_prescriptions(db: Session = Depends(get_db)):
    return db.query(Prescription).all()
