from flask import Blueprint, request, jsonify
from services.ai_service import get_prediction

api_bp = Blueprint("api", __name__)

@api_bp.route("/predict", methods=["POST"])
def predict():
    data = request.json
    if "text" not in data:
        return jsonify({"error": "Missing 'text' field"}), 400
    try:
        prediction = get_prediction(data["text"])
        return jsonify(prediction)
    except Exception as e:
        return jsonify({"error": str(e)}), 500
