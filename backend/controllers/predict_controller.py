from flask import request, jsonify
from models import Prediction, db
from services.ai_service import get_predictions
from utils.validation import validate_predict_payload

def predict():
    body = request.get_json() or {}
    err, data = validate_predict_payload(body)
    if err:
        return jsonify({'error': err}), 400

    symptoms = data.get('symptoms')
    age = data.get('age')
    gender = data.get('gender')

    # Call AI service
    result = get_predictions(symptoms=symptoms, age=age, gender=gender)

    # Save result to DB
    try:
        rec = Prediction(
            symptoms=symptoms,
            age=age,
            gender=gender,
            predictions=result.get('predictions'),
            provider=result.get('provider'),
            raw_response=result.get('raw_response')
        )
        db.session.add(rec)
        db.session.commit()
    except Exception as e:
        print('DB save error:', e)

    return jsonify({
        'success': True,
        'predictions': result.get('predictions'),
        'provider': result.get('provider')
    }), 200
