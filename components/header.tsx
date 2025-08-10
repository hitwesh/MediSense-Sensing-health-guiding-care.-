import { Stethoscope, Star, Sparkles } from "lucide-react"

export function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 shadow-lg relative overflow-hidden">
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-4">
            <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-3 rounded-xl shadow-lg transform hover:scale-105 transition-transform">
              <Stethoscope className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white flex items-center space-x-2">
                <span>MediSense</span>
                <Sparkles className="h-5 w-5 text-yellow-300 animate-pulse" />
              </h1>
              <p className="text-blue-100 font-medium">AI-Powered Health Assistant</p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a
              href="#"
              className="text-white hover:text-yellow-300 font-semibold transition-colors duration-200 flex items-center space-x-1"
            >
              <span>Home</span>
              <Star className="h-4 w-4" />
            </a>
            <a href="#" className="text-white hover:text-yellow-300 font-semibold transition-colors duration-200">
              About
            </a>
            <a href="#" className="text-white hover:text-yellow-300 font-semibold transition-colors duration-200">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
