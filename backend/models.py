from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.dialects.postgresql import JSON
from datetime import datetime

db = SQLAlchemy()

class Prediction(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    symptoms = db.Column(db.Text, nullable=False)
    age = db.Column(db.Integer, nullable=True)
    gender = db.Column(db.String(10), nullable=True)
    predictions = db.Column(JSON, nullable=True)  # store AI output as JSON
    provider = db.Column(db.String(50), nullable=True)  # which AI provider was used
    raw_response = db.Column(JSON, nullable=True)  # full raw AI response
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    def to_dict(self):
        return {
            'id': self.id,
            'symptoms': self.symptoms,
            'age': self.age,
            'gender': self.gender,
            'predictions': self.predictions,
            'provider': self.provider,
            'created_at': self.created_at.isoformat()
        }
