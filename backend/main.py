from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

# Configuration CORS pour autoriser le frontend à faire des requêtes
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Tu peux restreindre cela à ton frontend ex: ["http://localhost:3000"]
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class TextInput(BaseModel):
    text: str

@app.post("/process-text")
def process_text(data: TextInput):
    processed_text = data.text.replace(" ", "")  # Supprime les espaces
    return {"processed_text": processed_text}
