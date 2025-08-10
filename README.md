# MediSense Frontend

A modern, responsive symptom checker interface built with Next.js, React, and Tailwind CSS.

## 🏗️ Architecture

This frontend is designed to work with a separate backend API. The structure is organized for easy integration:

### 📁 Project Structure
\`\`\`
├── app/
│   └── page.tsx              # Main application component
├── components/               # Reusable UI components
│   ├── header.tsx
│   ├── symptom-input.tsx
│   ├── patient-info.tsx
│   ├── review-step.tsx
│   ├── results-display.tsx
│   ├── loading-state.tsx
│   └── navigation-buttons.tsx
├── services/                 # API service layer
│   └── diagnosis-service.ts  # Backend integration point
├── types/                    # TypeScript definitions
│   └── index.ts             # Shared data types
└── constants/               # Static data and configuration
    └── medical-data.ts

\`\`\`

## 🔌 Backend Integration Points

### API Service (`services/diagnosis-service.ts`)
- **Main Integration Point**: `DiagnosisService.getDiagnosis()`
- **Mock Implementation**: Currently uses mock data for development
- **Ready for Backend**: Commented API call structure included

### Data Types (`types/index.ts`)
- **Standardized Interfaces**: All data structures defined for backend compatibility
- **API Response Types**: Ready for REST API integration
- **Request/Response Models**: Structured for easy serialization

### Configuration (`constants/medical-data.ts`)
- **Static Data**: Medical conditions, symptoms, etc.
- **Configurable**: Can be moved to backend or made dynamic

## 🚀 Backend Team Integration Guide

### 1. API Endpoints Needed
\`\`\`typescript
POST /api/diagnosis
- Body: { symptoms: Symptom[], patientInfo: PatientInfo }
- Response: DiagnosisResults

GET /api/symptoms
- Response: string[] (available symptoms)
\`\`\`

### 2. Update API Configuration
In `services/diagnosis-service.ts`, update:
\`\`\`typescript
const API_CONFIG = {
  BASE_URL: 'YOUR_BACKEND_URL',
  ENDPOINTS: {
    DIAGNOSIS: '/diagnosis',
    SYMPTOMS: '/symptoms'
  }
}
\`\`\`

### 3. Replace Mock Implementation
Uncomment the actual API call in `DiagnosisService.getDiagnosis()` and remove the mock implementation.

## 🎨 Features

- **Multi-step Form Flow**: Symptoms → Patient Info → Review → Results
- **Responsive Design**: Mobile and desktop optimized
- **Accessibility Compliant**: ARIA labels, proper contrast
- **Loading States**: Smooth transitions and feedback
- **Error Handling**: Ready for backend error integration
- **Type Safety**: Full TypeScript implementation

## 🛠️ Development

\`\`\`bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
\`\`\`

## 📝 Notes for Backend Team

1. **Data Validation**: Frontend validates required fields, but backend should also validate
2. **Error Handling**: Frontend expects standard error responses
3. **Session Management**: SessionId included in response type for tracking
4. **Rate Limiting**: Consider implementing for diagnosis endpoint
5. **CORS**: Configure for frontend domain

## 🔒 Security Considerations

- Input sanitization on backend
- Rate limiting for API calls
- Secure headers configuration
- Data privacy compliance (HIPAA considerations)
