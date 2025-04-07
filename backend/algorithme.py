from transformers import pipeline
from transformers import MBartForConditionalGeneration, MBart50TokenizerFast
from typing import List

def summarize(texte: str) -> str:
    model_name = "facebook/bart-large-cnn"
    summarizer = pipeline("summarization", model = model_name)

    article = """Flanked by Donald Trump in the Oval Office this week, Elon Musk claimed his much-vaunted, but ill-defined, “department of government efficiency” (Doge) was providing “maximum transparency” on its blitz through the federal government.
    Its official website was empty, however – until Wednesday, when it added elements including data from a controversial rightwing thinktank recently sued by a climate scientist.
    New elements include Doge’s feed from X, Musk’s social network, and a blank section for savings identified by the agency, promised to be updated “no later than” Valentine’s Day.
    news microphones"""

    summary = summarizer(texte, max_length=130, min_length=30, do_sample=False)
    return summary[0]['summary_text']

def supprimer_espaces(texte: str) -> str:
    """Supprime les espaces d'un texte donné."""
    return texte.replace(" ", "")

category_labels = ['sport', 'environment', 'politics', 'science', 'health', 'economy', 'miscellaneous', 'people', 'culture']

def categories(texte: str) -> str:
    classifier = pipeline("zero-shot-classification", model="facebook/bart-large-mnli")
    result = classifier(texte, category_labels)
    categories = [label for label, score in zip(result["labels"], result["scores"]) if score > 0.1]
    return categories

translation_code = {
    "Arabic": "ar_AR",
    "Czech": "cs_CZ",
    "German": "de_DE",
    "English": "en_XX",
    "Spanish": "es_XX",
    "Estonian": "et_EE",
    "Finnish": "fi_FI",
    "French": "fr_XX",
    "Gujarati": "gu_IN",
    "Hindi": "hi_IN",
    "Italian": "it_IT",
    "Japanese": "ja_XX",
    "Kazakh": "kk_KZ",
    "Korean": "ko_KR",
    "Lithuanian": "lt_LT",
    "Latvian": "lv_LV",
    "Burmese": "my_MM",
    "Nepali": "ne_NP",
    "Dutch": "nl_XX",
    "Romanian": "ro_RO",
    "Russian": "ru_RU",
    "Sinhala": "si_LK",
    "Turkish": "tr_TR",
    "Vietnamese": "vi_VN",
    "Chinese": "zh_CN",
    "Afrikaans": "af_ZA",
    "Azerbaijani": "az_AZ",
    "Bengali": "bn_IN",
    "Persian": "fa_IR",
    "Hebrew": "he_IL",
    "Croatian": "hr_HR",
    "Indonesian": "id_ID",
    "Georgian": "ka_GE",
    "Khmer": "km_KH",
    "Macedonian": "mk_MK",
    "Malayalam": "ml_IN",
    "Mongolian": "mn_MN",
    "Marathi": "mr_IN",
    "Polish": "pl_PL",
    "Pashto": "ps_AF",
    "Portuguese": "pt_XX",
    "Swedish": "sv_SE",
    "Swahili": "sw_KE",
    "Tamil": "ta_IN",
    "Telugu": "te_IN",
    "Thai": "th_TH",
    "Tagalog": "tl_XX",
    "Ukrainian": "uk_UA",
    "Urdu": "ur_PK",
    "Xhosa": "xh_ZA",
    "Galician": "gl_ES",
    "Slovene": "sl_SI"
}

def translate(texte:str) -> str:
    article_en = texte
    translate_to = "French"
    model = MBartForConditionalGeneration.from_pretrained("facebook/mbart-large-50-one-to-many-mmt")
    tokenizer = MBart50TokenizerFast.from_pretrained("facebook/mbart-large-50-one-to-many-mmt", src_lang="en_XX")
    model_inputs = tokenizer(article_en, return_tensors="pt")

    target_lang_code = translation_code[translate_to]
    generated_tokens = model.generate(
        **model_inputs,
        forced_bos_token_id=tokenizer.lang_code_to_id[target_lang_code]
    )
    return tokenizer.batch_decode(generated_tokens, skip_special_tokens=True)[0]