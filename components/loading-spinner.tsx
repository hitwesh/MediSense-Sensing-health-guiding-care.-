import { cn } from "@/lib/utils"
import { Loader2, Heart } from "lucide-react"

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg"
  className?: string
}

export function LoadingSpinner({ size = "md", className }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-6 w-6",
    lg: "h-8 w-8",
  }

  return (
    <div className="relative">
      <Loader2 className={cn("animate-spin text-purple-600", sizeClasses[size], className)} />
      <div className="absolute inset-0 animate-ping">
        <Loader2 className={cn("text-purple-300 opacity-30", sizeClasses[size])} />
      </div>
    </div>
  )
}

interface LoadingModalProps {
  isOpen: boolean
  message?: string
}

export function LoadingModal({ isOpen, message = "Analyzing your symptoms with AI magic... ✨" }: LoadingModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-3xl p-8 shadow-2xl max-w-sm w-full mx-4 border-2 border-purple-100">
        <div className="flex flex-col items-center space-y-6">
          <div className="relative">
            <div className="h-16 w-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center animate-pulse">
              <Heart className="h-8 w-8 text-white animate-bounce" />
            </div>
            <div className="absolute inset-0 h-16 w-16 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full animate-ping opacity-30"></div>
          </div>
          <div className="text-center">
            <p className="text-lg font-semibold text-gray-900 mb-2">Almost there! 🚀</p>
            <p className="text-sm text-gray-600">{message}</p>
          </div>
          <div className="flex space-x-1">
            <div className="h-2 w-2 bg-purple-600 rounded-full animate-bounce"></div>
            <div className="h-2 w-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
            <div className="h-2 w-2 bg-cyan-600 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
          </div>
        </div>
      </div>
    </div>
  )
}
