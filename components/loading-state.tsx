import { Card, CardContent } from "@/components/ui/card"
import { Brain, Sparkles } from "lucide-react"

export function LoadingState() {
  return (
    <Card className="border-0 shadow-2xl bg-gradient-to-br from-white to-blue-50 overflow-hidden">
      <CardContent className="p-12 text-center">
        <div className="relative">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-purple-200 border-t-purple-600 mx-auto mb-6"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <Sparkles className="h-6 w-6 text-purple-600 animate-pulse" />
          </div>
        </div>
        <h3 className="text-2xl font-bold text-purple-900 mb-3 flex items-center justify-center space-x-2">
          <Brain className="h-6 w-6" />
          <span>Analyzing Your Symptoms</span>
        </h3>
        <p className="text-purple-700 font-medium">
          Our AI is processing your information to provide accurate results...
        </p>
        <div className="mt-4 flex justify-center space-x-2">
          <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
          <div className="w-2 h-2 bg-teal-500 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
        </div>
      </CardContent>
    </Card>
  )
}
