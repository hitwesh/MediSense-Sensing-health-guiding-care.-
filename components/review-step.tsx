import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { FileText, Activity, User, CheckCircle, AlertTriangle } from "lucide-react"
import type { Symptom, PatientInfo } from "@/types"

interface ReviewStepProps {
  symptoms: Symptom[]
  patientInfo: PatientInfo
}

export function ReviewStep({ symptoms, patientInfo }: ReviewStepProps) {
  return (
    <Card className="border-0 shadow-2xl bg-gradient-to-br from-white to-orange-50 overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <CardTitle className="flex items-center space-x-3 text-xl">
          <div className="bg-white/20 p-2 rounded-lg">
            <FileText className="h-6 w-6" />
          </div>
          <span>Review Information</span>
          <CheckCircle className="h-5 w-5 text-green-300 animate-pulse" />
        </CardTitle>
        <CardDescription className="text-orange-100">
          Please review your information before getting diagnosis
        </CardDescription>
      </CardHeader>
      <CardContent className="p-8 space-y-8">
        <div>
          <h3 className="font-bold text-orange-900 mb-4 text-lg flex items-center space-x-2">
            <Activity className="h-5 w-5 text-purple-600" />
            <span>Symptoms ({symptoms.length})</span>
          </h3>
          <div className="space-y-3">
            {symptoms.map((symptom) => (
              <div
                key={symptom.id}
                className="flex justify-between items-center bg-gradient-to-r from-orange-100 to-yellow-100 p-4 rounded-xl border border-orange-200 shadow-sm"
              >
                <span className="text-orange-800 font-medium">{symptom.name}</span>
                <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
                  Severity: {symptom.severity}/10
                </Badge>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-bold text-orange-900 mb-4 text-lg flex items-center space-x-2">
            <User className="h-5 w-5 text-teal-600" />
            <span>Patient Information</span>
          </h3>
          <div className="bg-gradient-to-r from-orange-100 to-yellow-100 p-6 rounded-xl border border-orange-200 space-y-3">
            <p className="text-orange-800 font-medium">
              <strong>Age:</strong> {patientInfo.age || "Not specified"}
            </p>
            <p className="text-orange-800 font-medium">
              <strong>Gender:</strong> {patientInfo.gender || "Not specified"}
            </p>
            <p className="text-orange-800 font-medium">
              <strong>Medical History:</strong>{" "}
              {patientInfo.medicalHistory.length > 0 ? patientInfo.medicalHistory.join(", ") : "None specified"}
            </p>
          </div>
        </div>

        <Alert className="border-2 border-yellow-300 bg-gradient-to-r from-yellow-50 to-orange-50">
          <AlertTriangle className="h-5 w-5 text-yellow-600" />
          <AlertDescription className="text-yellow-800 font-medium">
            <strong>Medical Disclaimer:</strong> This tool provides general health information and should not replace
            professional medical advice. Always consult with a healthcare provider for proper diagnosis and treatment.
          </AlertDescription>
        </Alert>
      </CardContent>
    </Card>
  )
}
