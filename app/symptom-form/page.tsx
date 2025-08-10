"use client"

import type React from "react"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { TextInput, TextAreaField, SelectField, SymptomCheckboxGroup } from "@/components/form-fields"
import { LoadingModal } from "@/components/loading-spinner"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { ArrowRight } from "lucide-react"

const commonSymptoms = [
  "Fever",
  "Cough",
  "Headache",
  "Fatigue",
  "Nausea",
  "Vomiting",
  "Diarrhea",
  "Abdominal pain",
  "Chest pain",
  "Shortness of breath",
  "Dizziness",
  "Muscle aches",
  "Joint pain",
  "Rash",
  "Sore throat",
]

const severityOptions = [
  { value: "mild", label: "Mild" },
  { value: "moderate", label: "Moderate" },
  { value: "severe", label: "Severe" },
]

const durationOptions = [
  { value: "hours", label: "A few hours" },
  { value: "1-2days", label: "1-2 days" },
  { value: "3-7days", label: "3-7 days" },
  { value: "1-2weeks", label: "1-2 weeks" },
  { value: "longer", label: "Longer than 2 weeks" },
]

export default function SymptomFormPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    selectedSymptoms: [] as string[],
    additionalSymptoms: "",
    severity: "",
    duration: "",
    age: "",
    medicalHistory: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (formData.selectedSymptoms.length === 0 && !formData.additionalSymptoms.trim()) {
      newErrors.selectedSymptoms = "Please select at least one symptom or describe your symptoms"
    }

    if (!formData.severity) {
      newErrors.severity = "Please select symptom severity"
    }

    if (!formData.duration) {
      newErrors.duration = "Please select symptom duration"
    }

    if (!formData.age || isNaN(Number(formData.age)) || Number(formData.age) < 1 || Number(formData.age) > 120) {
      newErrors.age = "Please enter a valid age between 1 and 120"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsLoading(true)

    try {
      // Simulate API call
      const response = await fetch("/api/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          symptoms: [...formData.selectedSymptoms, formData.additionalSymptoms].filter(Boolean),
          severity: formData.severity,
          duration: formData.duration,
          age: Number(formData.age),
          medicalHistory: formData.medicalHistory,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to analyze symptoms")
      }

      const results = await response.json()

      // Store results and navigate to results page
      sessionStorage.setItem("symptomResults", JSON.stringify(results))
      router.push("/results")
    } catch (error) {
      console.error("Error submitting form:", error)
      setErrors({ submit: "Failed to analyze symptoms. Please try again." })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50">
      <Navbar />

      <main className="flex-1 py-8">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="mb-8 text-center">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full text-sm font-medium text-purple-700 mb-4">
              🩺 Health Assessment
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
              Tell Us About Your Symptoms
            </h1>
            <p className="text-lg text-gray-600">
              Our AI will analyze your symptoms and provide personalized health insights. Let's get started! ✨
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl border-2 border-purple-100 p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              <SymptomCheckboxGroup
                label="Select your symptoms"
                selectedSymptoms={formData.selectedSymptoms}
                onChange={(symptoms) => setFormData((prev) => ({ ...prev, selectedSymptoms: symptoms }))}
                symptoms={commonSymptoms}
                error={errors.selectedSymptoms}
                required
              />

              <TextAreaField
                label="Additional symptoms or details"
                value={formData.additionalSymptoms}
                onChange={(value) => setFormData((prev) => ({ ...prev, additionalSymptoms: value }))}
                placeholder="Describe any other symptoms or provide more details..."
                rows={4}
              />

              <div className="grid md:grid-cols-2 gap-6">
                <SelectField
                  label="Symptom severity"
                  value={formData.severity}
                  onChange={(value) => setFormData((prev) => ({ ...prev, severity: value }))}
                  options={severityOptions}
                  placeholder="Select severity"
                  error={errors.severity}
                  required
                />

                <SelectField
                  label="How long have you had these symptoms?"
                  value={formData.duration}
                  onChange={(value) => setFormData((prev) => ({ ...prev, duration: value }))}
                  options={durationOptions}
                  placeholder="Select duration"
                  error={errors.duration}
                  required
                />
              </div>

              <TextInput
                label="Age"
                value={formData.age}
                onChange={(value) => setFormData((prev) => ({ ...prev, age: value }))}
                placeholder="Enter your age"
                type="text"
                error={errors.age}
                required
              />

              <TextAreaField
                label="Medical history (optional)"
                value={formData.medicalHistory}
                onChange={(value) => setFormData((prev) => ({ ...prev, medicalHistory: value }))}
                placeholder="Any relevant medical conditions, medications, or allergies..."
                rows={3}
              />

              {errors.submit && <div className="text-red-600 text-sm">{errors.submit}</div>}

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-lg py-4 rounded-2xl transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Analyzing Your Symptoms... 🔍
                  </div>
                ) : (
                  <div className="flex items-center">
                    Get My Health Insights 🚀
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </div>
                )}
              </Button>
            </form>

            <div className="mt-8 p-6 bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-200 rounded-2xl">
              <div className="flex items-start space-x-3">
                <div className="text-2xl">⚠️</div>
                <div>
                  <p className="text-sm text-yellow-800 font-medium mb-2">
                    <strong>Medical Disclaimer:</strong>
                  </p>
                  <p className="text-sm text-yellow-700">
                    This tool provides educational information only and should not replace professional medical advice,
                    diagnosis, or treatment. Always consult with a healthcare provider for medical concerns. In
                    emergencies, call 911! 🚨
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <LoadingModal isOpen={isLoading} message="Analyzing your symptoms..." />
    </div>
  )
}
