# MediSense – AI-Powered Medical Symptom Checker

MediSense is an AI-driven medical symptom checker web application designed to assist users in identifying potential health conditions based on their symptoms.  
It integrates the **Gemini API** along with other AI models to provide quick, accurate, and user-friendly health insights.

---

## Features

- **AI-Powered Symptom Analysis** – Uses advanced ML models (Gemini API + others) to analyze symptoms.
- **Real-Time Predictions** – Instant output on possible conditions.
- **Responsive Frontend** – Clean, minimalistic UI for smooth user experience.
- **Secure Data Storage** – All user data stored with encryption & privacy.
- **Cross-Platform Access** – Works on desktop, tablet, and mobile.
- **Scalable Backend** – API-driven architecture for easy expansion.

---

## Tech Stack

**Frontend:** HTML, CSS, JavaScript, React (optional: TailwindCSS / Bootstrap)  
**Backend:** Flask / FastAPI (Python) or Node.js  
**Database:** PostgreSQL / MySQL / MongoDB  
**AI Models:** Gemini API (primary) + other ML APIs  
**Deployment:** Vercel / Railway / Heroku / Render  
**Version Control:** Git + GitHub

---

## Project Structure

MediSense/
│
├── frontend/ # All UI/UX components
│ ├── src/
│ ├── public/
│ └── package.json
│
├── backend/ # API & server logic
│ ├── app.py
│ ├── routes/
│ └── requirements.txt
│
├── database/ # DB schema & setup scripts
│
├── ai_model/ # ML model training & integration code
│
├── docs/ # Documentation, diagrams, presentations
│
└── README.md



---

## Workflow

**Step 1:** User inputs symptoms via frontend form  
**Step 2:** API sends request to AI model for analysis  
**Step 3:** AI processes symptoms and returns possible conditions  
**Step 4:** Backend stores query in database (optional)  
**Step 5:** Frontend displays results with recommendations


---

## Team & Roles

- **Hitesh Kumar Roy** *(Project Lead | AI/ML + Backend)* – Model training, API integration, backend logic, team coordination  
- **Debadrita Chowdhury** *(Frontend)* – UI/UX design, responsive implementation, frontend-backend integration  
- **Priyankar** *(Backend + Deployment)* – Core API logic, AI integration, authentication, deployment support  
- **Tamoghno** *(Database + Deployment)* – Database design, secure storage, deployment configuration  
- **Roma** *(Documentation + Presentation)* – Full documentation, diagrams, project reports, presentations

---

## Timeline & Milestones

- **Sunday (Today):** Frontend, Backend & API  
- **Monday:** Database setup & Deployment  
- **Tuesday:** Documentation & Testing  
- **Wednesday:** Final Submission

---

## Installation & Usage

1. **Clone the repo**
   ```bash
   git clone https://github.com/yourusername/MediSense.git
   cd MediSense
2. **Frontend setup**
    cd frontend
    npm install
    npm start
3. **Backend setup**
    cd backend
    pip install -r requirements.txt
    python app.py
4. **Access Application**
    Frontend: http://localhost:3000
    Backend API: http://localhost:5000


## Security & Privacy

    All medical queries are anonymized.

    Secure HTTPS API calls.

    No personal data is stored without consent.


## License

This project is for educational purposes. You may modify and use it as per your institution’s guidelines.


## Contact

For queries or contributions, reach out to:
Hitesh Kumar Roy – Project Lead
Email: hiteshroy0001@gmail.com
Phone: +91-8100128658