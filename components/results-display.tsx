import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Brain, Pill, Sparkles, Star, CheckCircle, Clock, Shield, Heart } from "lucide-react"
import type { DiagnosisResults } from "@/types"

interface ResultsDisplayProps {
  results: DiagnosisResults
}

export function ResultsDisplay({ results }: ResultsDisplayProps) {
  return (
    <div className="space-y-8">
      {/* Disease Predictions */}
      <Card className="border-0 shadow-2xl bg-gradient-to-br from-white to-green-50 overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-green-500 to-teal-500 text-white">
          <CardTitle className="flex items-center space-x-3 text-xl">
            <div className="bg-white/20 p-2 rounded-lg">
              <Brain className="h-6 w-6" />
            </div>
            <span>Possible Conditions</span>
            <Sparkles className="h-5 w-5 text-yellow-300 animate-pulse" />
          </CardTitle>
          <CardDescription className="text-green-100">
            Based on your symptoms, here are the most likely conditions
          </CardDescription>
        </CardHeader>
        <CardContent className="p-8">
          <div className="space-y-6">
            {results.diseases.map((disease, index) => (
              <div
                key={disease.id || index}
                className="border-2 border-green-200 rounded-xl p-6 bg-gradient-to-r from-green-50 to-teal-50 shadow-lg hover:shadow-xl transition-shadow duration-200"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-bold text-green-900 text-lg">{disease.name}</h3>
                  <Badge
                    className={`px-4 py-2 text-sm font-bold ${
                      disease.confidence > 80
                        ? "bg-gradient-to-r from-green-500 to-teal-500 text-white"
                        : "bg-gradient-to-r from-yellow-400 to-orange-400 text-white"
                    }`}
                  >
                    {disease.confidence}% match
                  </Badge>
                </div>
                <p className="text-green-800 mb-4 font-medium">{disease.description}</p>
                {disease.recommendedAction && (
                  <p className="text-green-700 mb-4 font-semibold">
                    <strong>Recommended Action:</strong> {disease.recommendedAction}
                  </p>
                )}
                <div>
                  <p className="text-green-700 font-semibold mb-2 flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4" />
                    <span>Common symptoms:</span>
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {disease.commonSymptoms.map((symptom, idx) => (
                      <Badge
                        key={idx}
                        className="bg-gradient-to-r from-green-100 to-teal-100 text-green-700 border border-green-300"
                      >
                        {symptom}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Medicine Recommendations */}
      <Card className="border-0 shadow-2xl bg-gradient-to-br from-white to-purple-50 overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
          <CardTitle className="flex items-center space-x-3 text-xl">
            <div className="bg-white/20 p-2 rounded-lg">
              <Pill className="h-6 w-6" />
            </div>
            <span>Recommended Treatments</span>
            <Star className="h-5 w-5 text-yellow-300 animate-pulse" />
          </CardTitle>
          <CardDescription className="text-purple-100">
            Over-the-counter medications that may help with your symptoms
          </CardDescription>
        </CardHeader>
        <CardContent className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.medicines.map((medicine, index) => (
              <div
                key={medicine.id || index}
                className="border-2 border-purple-200 rounded-xl p-6 bg-gradient-to-br from-purple-50 to-pink-50 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-purple-900 text-lg">{medicine.name}</h3>
                  <Badge className="bg-gradient-to-r from-purple-400 to-pink-400 text-white text-xs px-3 py-1">
                    {medicine.type}
                  </Badge>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-3 bg-white/50 p-3 rounded-lg">
                    <Clock className="h-4 w-4 text-purple-600" />
                    <span className="text-purple-800 font-medium">{medicine.frequency}</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-white/50 p-3 rounded-lg">
                    <Pill className="h-4 w-4 text-purple-600" />
                    <span className="text-purple-800 font-medium">{medicine.dosage}</span>
                  </div>
                  {medicine.price && (
                    <div className="flex items-center space-x-3 bg-white/50 p-3 rounded-lg">
                      <span className="text-purple-800 font-bold">${medicine.price}</span>
                    </div>
                  )}
                </div>
                <div className="mt-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Shield className="h-4 w-4 text-red-500" />
                    <span className="text-sm font-bold text-red-700">Warnings:</span>
                  </div>
                  <ul className="text-xs text-red-600 space-y-1 bg-red-50 p-3 rounded-lg">
                    {medicine.warnings.map((warning, idx) => (
                      <li key={idx} className="flex items-start space-x-1">
                        <span>•</span>
                        <span>{warning}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Important Notice */}
      <Alert className="border-2 border-red-300 bg-gradient-to-r from-red-50 to-pink-50 shadow-lg">
        <Heart className="h-5 w-5 text-red-600" />
        <AlertDescription className="text-red-800 font-medium">
          <strong>Important:</strong> This is not a substitute for professional medical advice. Please consult with a
          healthcare provider before taking any medication or if symptoms persist or worsen.
        </AlertDescription>
      </Alert>
    </div>
  )
}
