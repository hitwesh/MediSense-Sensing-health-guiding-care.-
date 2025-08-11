import type { DiagnosisRequest, DiagnosisResults } from "@/types"

// Configuration for API endpoints
const API_CONFIG = {
  BASE_URL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api",
  ENDPOINTS: {
    DIAGNOSIS: "/diagnosis",
    SYMPTOMS: "/symptoms",
    MEDICINES: "/medicines",
  },
}

export class DiagnosisService {
  // Main diagnosis method
  static async getDiagnosis(request: DiagnosisRequest): Promise<DiagnosisResults> {
    try {
      const response = await fetch(
        `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.DIAGNOSIS}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(request),
        }
      )

      if (!response.ok) {
        throw new Error(`API Error: ${response.statusText}`)
      }

      return await response.json() as DiagnosisResults
    } catch (error) {
      console.error("Diagnosis API error, using mock data:", error)
      return this.getMockDiagnosis(request)
    }
  }

  // Mock data for development / fallback
  private static async getMockDiagnosis(request: DiagnosisRequest): Promise<DiagnosisResults> {
    await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate delay

    return {
      diseases: [
        {
          id: "1",
          name: "Common Cold",
          confidence: 85,
          description: "A viral infection of the upper respiratory tract",
          commonSymptoms: ["Runny nose", "Sore throat", "Cough", "Fatigue"],
          severity: "low",
          recommendedAction: "Rest and stay hydrated",
        },
        {
          id: "2",
          name: "Seasonal Flu",
          confidence: 72,
          description: "A viral infection that attacks the respiratory system",
          commonSymptoms: ["Fever", "Muscle aches", "Fatigue", "Cough"],
          severity: "medium",
          recommendedAction: "Monitor symptoms and consider medical consultation",
        },
        {
          id: "3",
          name: "Tension Headache",
          confidence: 68,
          description: "The most common type of headache caused by stress or muscle tension",
          commonSymptoms: ["Headache", "Neck pain", "Fatigue"],
          severity: "low",
          recommendedAction: "Rest and stress management",
        },
      ],
      medicines: [
        {
          id: "1",
          name: "Acetaminophen",
          dosage: "500mg",
          frequency: "Every 6-8 hours",
          warnings: ["Do not exceed 4000mg per day", "Avoid alcohol"],
          type: "Pain reliever",
          price: 8.99,
          availability: true,
        },
        {
          id: "2",
          name: "Ibuprofen",
          dosage: "200mg",
          frequency: "Every 6-8 hours",
          warnings: ["Take with food", "May cause stomach irritation"],
          type: "Anti-inflammatory",
          price: 6.49,
          availability: true,
        },
        {
          id: "3",
          name: "Throat Lozenges",
          dosage: "1 lozenge",
          frequency: "Every 2-3 hours",
          warnings: ["Do not exceed 8 per day"],
          type: "Throat relief",
          price: 4.99,
          availability: true,
        },
      ],
      confidence: 78,
      timestamp: new Date().toISOString(),
      sessionId: `session_${Date.now()}`,
    }
  }

  // Get available symptoms
  static async getAvailableSymptoms(): Promise<string[]> {
    try {
      const response = await fetch(
        `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.SYMPTOMS}`
      )

      if (!response.ok) {
        throw new Error(`API Error: ${response.statusText}`)
      }

      return await response.json() as string[]
    } catch (error) {
      console.error("Symptoms API error, using mock data:", error)
      return [
        "Headache",
        "Fever",
        "Cough",
        "Sore throat",
        "Runny nose",
        "Fatigue",
        "Nausea",
        "Vomiting",
        "Diarrhea",
        "Abdominal pain",
        "Chest pain",
        "Shortness of breath",
        "Dizziness",
        "Joint pain",
        "Muscle aches",
        "Skin rash",
        "Loss of appetite",
        "Difficulty sleeping",
        "Back pain",
        "Neck pain",
      ]
    }
  }
}
 