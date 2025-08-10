import os
import requests
from typing import Dict

# Correct way: read from env var named GEMINI_API_KEY
GEMINI_KEY = os.getenv("GEMINI_API_KEY")

def mock_predict(data: Dict):
    return {
        "status": "success",
        "message": "Mock prediction result.",
        "data": {
            "prediction": "This is a mock response for testing purposes.",
            "input": data
        }
    }

def call_gemini_api(payload: Dict):
    """
    Calls the real Gemini API.
    Falls back to mock_predict if there's an error or no API key.
    """
    if not GEMINI_KEY:
        print("[WARNING] GEMINI_API_KEY not set. Using mock mode.")
        return mock_predict(payload)

    try:
        headers = {
            "Content-Type": "application/json"
        }

        GEMINI_ENDPOINT = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key={GEMINI_KEY}"

        response = requests.post(
            GEMINI_ENDPOINT,
            headers=headers,
            json=payload,
            timeout=30
        )
        response.raise_for_status()
        return response.json()

    except requests.exceptions.RequestException as e:
        print(f"[ERROR] API request failed: {e}")
        print("[INFO] Falling back to mock mode.")
        return mock_predict(payload)

def get_prediction(input_text: str):
    """
    Gets AI prediction from Gemini for given text.
    """
    payload = {
        "contents": [
            {
                "parts": [
                    {"text": input_text}
                ]
            }
        ]
    }
    result = call_gemini_api(payload)

    # You might want to extract the text from Gemini's response structure
    try:
        prediction_text = result["candidates"][0]["content"]["parts"][0]["text"]
    except (KeyError, IndexError):
        prediction_text = "No prediction available."

    return {
        "prediction": prediction_text,
        "raw_response": result
    }

print("Loaded Gemini Key:", GEMINI_KEY)
