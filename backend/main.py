from fastapi import FastAPI, UploadFile, File, HTTPException
import pytesseract
from PIL import Image
from models.database import engine, Base
from routes import prescriptions

app = FastAPI()

# Create database tables
Base.metadata.create_all(bind=engine)

@app.get("/")
def home():
    return {"message": "Pharmacist Assistant API is Running!"}

@app.post("/upload/")
async def upload_prescription(file: UploadFile = File(...)):
    try:
        image = Image.open(file.file)
        text = pytesseract.image_to_string(image)
        return {"extracted_text": text}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

# Include prescription routes
app.include_router(prescriptions.router)
