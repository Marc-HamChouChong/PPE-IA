from algorithme import supprimer_espaces

def process_text(text: str):
    processed_text = supprimer_espaces(text)
    return {"processed_text": processed_text}
