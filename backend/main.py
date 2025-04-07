from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from process import *

app = FastAPI()

# Configuration CORS pour autoriser le frontend à faire des requêtes
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Restreindre si nécessaire
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class TextInput(BaseModel):
    text: str

@app.post("/process-text")
def process_text_route(data: TextInput):
    return process_text(data.text)

@app.post("/categories")
def categories_route(data: TextInput):
    return get_categories(data.text)

@app.post("/translation")
def translation_route(data: TextInput):
    return get_translation(data.text)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000, reload=True)
