from algorithme import *

def process_text(text: str):
    processed_text = summarize(text)
    return {"processed_text": processed_text}

def get_categories(text: str):
    result = categories(text)
    return {"categories": result }

def get_translation(text: str):
    translate_text  = translate(text)
    return {"translate_text": translate_text }