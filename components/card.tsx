import type React from "react"
import { cn } from "@/lib/utils"

interface CardProps {
  title: string
  description: string
  confidence?: number
  className?: string
  children?: React.ReactNode
  icon?: React.ReactNode
}

export function Card({ title, description, confidence, className, children, icon }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border-2 bg-white text-card-foreground shadow-lg hover:shadow-xl transition-all duration-300 p-6 group",
        className,
      )}
    >
      <div className="space-y-4">
        {icon && <div className="flex justify-center">{icon}</div>}
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold leading-none tracking-tight group-hover:text-purple-600 transition-colors duration-200">
            {title}
          </h3>
          {confidence !== undefined && (
            <div className="flex items-center space-x-2">
              <div className="text-sm text-muted-foreground font-medium">Confidence:</div>
              <div
                className={cn(
                  "text-sm font-bold px-3 py-1 rounded-full shadow-sm",
                  confidence >= 80
                    ? "bg-gradient-to-r from-green-400 to-emerald-500 text-white"
                    : confidence >= 60
                      ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-white"
                      : "bg-gradient-to-r from-red-400 to-pink-500 text-white",
                )}
              >
                {confidence}%
              </div>
            </div>
          )}
        </div>
        <p className="text-gray-600 leading-relaxed">{description}</p>
        {children}
      </div>
    </div>
  )
}
