"use client"

import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Zap, Sparkles } from "lucide-react"

interface NavigationButtonsProps {
  currentStep: number
  canProceed: boolean
  onNext: () => void
  onPrevious: () => void
  onReset: () => void
}

export function NavigationButtons({ currentStep, canProceed, onNext, onPrevious, onReset }: NavigationButtonsProps) {
  return (
    <div className="flex justify-between mt-12">
      <Button
        variant="outline"
        onClick={onPrevious}
        disabled={currentStep === 1}
        className="border-2 border-purple-300 text-purple-700 hover:bg-purple-50 bg-white px-8 py-3 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50"
      >
        <ChevronLeft className="h-5 w-5 mr-2" />
        Previous
      </Button>

      {currentStep < 4 && (
        <Button
          onClick={onNext}
          disabled={!canProceed}
          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:transform-none"
        >
          {currentStep === 3 ? (
            <>
              <Zap className="h-5 w-5 mr-2" />
              Get Diagnosis
            </>
          ) : (
            <>
              Next
              <ChevronRight className="h-5 w-5 ml-2" />
            </>
          )}
        </Button>
      )}

      {currentStep === 4 && (
        <Button
          onClick={onReset}
          className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white px-8 py-3 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
        >
          <Sparkles className="h-5 w-5 mr-2" />
          Start New Assessment
        </Button>
      )}
    </div>
  )
}
