import type { DiagnosisRequest, DiagnosisResults } from "@/types"

// Configuration for API endpoints - backend team will update these
const API_CONFIG = {
  BASE_URL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api",
  ENDPOINTS: {
    DIAGNOSIS: "/diagnosis",
    SYMPTOMS: "/symptoms",
    MEDICINES: "/medicines",
  },
}

export class DiagnosisService {
  // Main diagnosis method - backend team will implement actual API call
  static async getDiagnosis(request: DiagnosisRequest): Promise<DiagnosisResults> {
    try {
      // TODO: Replace with actual API call
      // const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.DIAGNOSIS}`, {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(request)
      // })
      // const result: ApiResponse<DiagnosisResults> = await response.json()
      // return result.data

      // Mock implementation for frontend development
      return this.getMockDiagnosis(request)
    } catch (error) {
      console.error("Diagnosis service error:", error)
      throw new Error("Failed to get diagnosis")
    }
  }

  // Mock data for frontend development - will be removed when backend is ready
  private static async getMockDiagnosis(request: DiagnosisRequest): Promise<DiagnosisResults> {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 2000))

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

  // Method to get available symptoms - backend team will implement
  static async getAvailableSymptoms(): Promise<string[]> {
    // TODO: Replace with actual API call
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
