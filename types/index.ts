// Data types for backend integration
export interface Symptom {
  id: string
  name: string
  severity: number
}

export interface PatientInfo {
  age: string
  gender: string
  medicalHistory: string[]
}

export interface Disease {
  id?: string
  name: string
  confidence: number
  description: string
  commonSymptoms: string[]
  severity?: "low" | "medium" | "high"
  recommendedAction?: string
}

export interface Medicine {
  id?: string
  name: string
  dosage: string
  frequency: string
  warnings: string[]
  type: string
  price?: number
  availability?: boolean
}

export interface DiagnosisRequest {
  symptoms: Symptom[]
  patientInfo: PatientInfo
}

export interface DiagnosisResults {
  diseases: Disease[]
  medicines: Medicine[]
  confidence: number
  timestamp?: string
  sessionId?: string
}

// API Response types for backend team
export interface ApiResponse<T> {
  success: boolean
  data: T
  message?: string
  error?: string
}
