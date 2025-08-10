import { Progress } from "@/components/ui/progress"
import { Zap, CheckCircle } from "lucide-react"

interface ProgressIndicatorProps {
  currentStep: number
}

export function ProgressIndicator({ currentStep }: ProgressIndicatorProps) {
  const getStepProgress = () => (currentStep / 4) * 100

  const getStepLabel = () => {
    switch (currentStep) {
      case 1:
        return "Describe Symptoms"
      case 2:
        return "Patient Information"
      case 3:
        return "Review & Submit"
      case 4:
        return "Results"
      default:
        return ""
    }
  }

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Zap className="h-5 w-5 text-purple-600" />
          <span className="text-lg font-bold text-purple-800">Step {currentStep} of 4</span>
        </div>
        <div className="flex items-center space-x-2">
          <CheckCircle className="h-4 w-4 text-teal-600" />
          <span className="text-teal-700 font-medium">{getStepLabel()}</span>
        </div>
      </div>
      <Progress value={getStepProgress()} className="h-3 bg-gradient-to-r from-purple-200 to-teal-200" />
    </div>
  )
}
