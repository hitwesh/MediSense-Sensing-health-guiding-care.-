# MediSense - Flask Backend Starter (PostgreSQL)

This backend is built with Flask and PostgreSQL to serve the MediSense frontend.

Features:
- POST /api/predict : Accepts symptom lists and returns AI predictions (Gemini placeholder)
- Input validation
- Optional persistence to PostgreSQL (Predictions table)
- CORS enabled for frontend integration
- Clean, modular structure for easy extension

## Setup (local)
1. Create a Python virtualenv and activate it:
   ```bash
   python -m venv venv
   source venv/bin/activate    # macOS/Linux
   venv\Scripts\activate     # Windows
   ```
2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
3. Copy `.env.example` to `.env` and set `DATABASE_URL` and `GEMINI_API_KEY`.
4. Create the Postgres database and update DATABASE_URL if needed.
5. Initialize DB tables (the app will create tables automatically on first run):
   ```bash
   export FLASK_APP=app.py
   flask run
   ```
6. Test health endpoint:
   ```bash
   curl http://localhost:5000/api/health
   ```
7. Test predict endpoint:
   ```bash
   curl -X POST http://localhost:5000/api/predict -H "Content-Type: application/json" -d '{ "symptoms": ["fever","cough"], "age": 30 }'
   ```

## Notes
- `services/ai_service.py` contains a placeholder for Gemini API integration. Replace `call_gemini_api` with real authenticated requests.
- The frontend in your repo can call the backend URL (e.g. http://localhost:5000) at `/api/predict`.
- The backend currently **stores predictions** in the DB but the frontend does not show user history (left as scope for improvement).
