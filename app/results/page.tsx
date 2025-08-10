"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card } from "@/components/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

interface PredictionResult {
  condition: string
  description: string
  confidence: number
  recommendations: string[]
}

interface SymptomResults {
  predictions: PredictionResult[]
  generalRecommendations: string[]
}

export default function ResultsPage() {
  const router = useRouter()
  const [results, setResults] = useState<SymptomResults | null>(null)

  useEffect(() => {
    const storedResults = sessionStorage.getItem("symptomResults")
    if (storedResults) {
      setResults(JSON.parse(storedResults))
    } else {
      // Mock data for demonstration
      setResults({
        predictions: [
          {
            condition: "Common Cold",
            description:
              "A viral infection of the upper respiratory tract, typically causing runny nose, cough, and mild fever.",
            confidence: 85,
            recommendations: ["Get plenty of rest", "Stay hydrated", "Consider over-the-counter cold medications"],
          },
          {
            condition: "Seasonal Allergies",
            description: "Allergic reactions to environmental allergens like pollen, dust, or pet dander.",
            confidence: 65,
            recommendations: [
              "Avoid known allergens",
              "Consider antihistamines",
              "Keep windows closed during high pollen days",
            ],
          },
          {
            condition: "Viral Gastroenteritis",
            description: "Inflammation of the stomach and intestines caused by a viral infection.",
            confidence: 45,
            recommendations: [
              "Stay hydrated with clear fluids",
              "Follow the BRAT diet",
              "Rest and avoid solid foods initially",
            ],
          },
        ],
        generalRecommendations: [
          "Monitor your symptoms closely",
          "Seek medical attention if symptoms worsen",
          "Maintain good hygiene practices",
          "Get adequate rest and nutrition",
        ],
      })
    }
  }, [])

  if (!results) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <p className="text-muted-foreground mb-4">No results found</p>
            <Button onClick={() => router.push("/symptom-form")}>Take Symptom Assessment</Button>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50">
      <Navbar />

      <main className="flex-1 py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-8 text-center">
            <Button
              variant="ghost"
              onClick={() => router.push("/symptom-form")}
              className="mb-6 hover:bg-purple-100 transition-colors duration-200"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />← Back to Assessment
            </Button>

            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full text-sm font-medium text-green-700 mb-4">
              ✅ Analysis Complete
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
              Your Health Insights
            </h1>
            <p className="text-lg text-gray-600">
              Based on your symptoms, here are personalized recommendations and insights! 🎯
            </p>
          </div>

          {/* Medical Disclaimer */}
          <div className="mb-8 p-6 bg-gradient-to-r from-red-50 to-pink-50 border-2 border-red-200 rounded-2xl">
            <div className="flex items-start space-x-3">
              <div className="text-2xl">🚨</div>
              <div>
                <h3 className="font-bold text-red-800 mb-2">Important Medical Disclaimer</h3>
                <p className="text-sm text-red-700">
                  These results are for informational purposes only and should not replace professional medical advice.
                  If you have serious symptoms or concerns, please consult with a healthcare provider immediately!
                  👩‍⚕️👨‍⚕️
                </p>
              </div>
            </div>
          </div>

          {/* Predictions */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">🔍 Possible Conditions</h2>
            <div className="space-y-4">
              {results.predictions.map((prediction, index) => (
                <Card
                  key={index}
                  title={prediction.condition}
                  description={prediction.description}
                  confidence={prediction.confidence}
                >
                  <div className="mt-4">
                    <h4 className="font-medium mb-2">Recommendations:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      {prediction.recommendations.map((rec, recIndex) => (
                        <li key={recIndex}>{rec}</li>
                      ))}
                    </ul>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* General Recommendations */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">💡 General Recommendations</h2>
            <Card
              title="Health Guidelines"
              description="General advice for managing your symptoms and maintaining good health."
            >
              <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground mt-4">
                {results.generalRecommendations.map((rec, index) => (
                  <li key={index}>{rec}</li>
                ))}
              </ul>
            </Card>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={() => router.push("/symptom-form")}
              variant="outline"
              className="border-2 border-purple-300 text-purple-700 hover:bg-purple-50 transition-all duration-200"
            >
              🔄 Take Another Assessment
            </Button>
            <Button
              onClick={() => router.push("/contact")}
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 transition-all duration-200"
            >
              👩‍⚕️ Contact Healthcare Provider
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
