from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import os
from models import db
from routes.api import api_bp
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": ["http://localhost:3000"]}})

# Config
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY', 'dev-secret')
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL', 'sqlite:///medisense.db')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Init DB
db.init_app(app)

# Home route
@app.route("/")
def home():
    return "✅ MediSense API is running!"

# Register routes
app.register_blueprint(api_bp)

if __name__ == "__main__":
    with app.app_context():
        db.create_all()
    app.run(host="0.0.0.0", port=5000, debug=True)
