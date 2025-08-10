"use client"

import { useState } from "react"
import { SymptomInput } from "@/components/symptom-input"
import { PatientInfo } from "@/components/patient-info"
import { ReviewStep } from "@/components/review-step"
import { ResultsDisplay } from "@/components/results-display"
import { LoadingState } from "@/components/loading-state"
import { NavigationButtons } from "@/components/navigation-buttons"
import { ProgressIndicator } from "@/components/progress-indicator"
import { Header } from "@/components/header"
import { BackgroundElements } from "@/components/background-elements"
import { DiagnosisService } from "@/services/diagnosis-service"
import type { Symptom, PatientInfo as PatientInfoType, DiagnosisResults } from "@/types"

export default function MediSenseApp() {
  const [currentStep, setCurrentStep] = useState(1)
  const [symptoms, setSymptoms] = useState<Symptom[]>([])
  const [patientInfo, setPatientInfo] = useState<PatientInfoType>({
    age: "",
    gender: "",
    medicalHistory: [],
  })
  const [isLoading, setIsLoading] = useState(false)
  const [results, setResults] = useState<DiagnosisResults | null>(null)

  const generateResults = async () => {
    setIsLoading(true)
    try {
      // This will be replaced with actual API call by backend team
      const diagnosisResults = await DiagnosisService.getDiagnosis({
        symptoms,
        patientInfo,
      })
      setResults(diagnosisResults)
      setCurrentStep(4)
    } catch (error) {
      console.error("Error getting diagnosis:", error)
      // Handle error state here
    } finally {
      setIsLoading(false)
    }
  }

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    } else if (currentStep === 3) {
      generateResults()
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const resetAssessment = () => {
    setCurrentStep(1)
    setSymptoms([])
    setPatientInfo({ age: "", gender: "", medicalHistory: [] })
    setResults(null)
  }

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return symptoms.length > 0
      case 2:
        return patientInfo.age && patientInfo.gender
      case 3:
        return true
      default:
        return false
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-50 to-teal-100">
      <BackgroundElements />
      <Header />

      <div className="max-w-4xl mx-auto px-4 py-8 relative">
        <ProgressIndicator currentStep={currentStep} />

        {/* Step Components */}
        {currentStep === 1 && <SymptomInput symptoms={symptoms} setSymptoms={setSymptoms} />}

        {currentStep === 2 && <PatientInfo patientInfo={patientInfo} setPatientInfo={setPatientInfo} />}

        {currentStep === 3 && <ReviewStep symptoms={symptoms} patientInfo={patientInfo} />}

        {currentStep === 4 && results && <ResultsDisplay results={results} />}

        {isLoading && <LoadingState />}

        {!isLoading && (
          <NavigationButtons
            currentStep={currentStep}
            canProceed={canProceed()}
            onNext={nextStep}
            onPrevious={prevStep}
            onReset={resetAssessment}
          />
        )}
      </div>
    </div>
  )
}
