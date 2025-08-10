import Link from "next/link"
import { Activity } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-gradient-to-r from-gray-900 via-purple-900 to-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-gradient-to-r from-purple-400 to-blue-400 rounded-lg flex items-center justify-center">
                <Activity className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-xl">MediSense</span>
            </Link>
            <p className="text-gray-300 leading-relaxed">
              AI-powered health insights for better understanding of your symptoms. Your health journey starts here! 🌟
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-purple-300">Product</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/symptom-form"
                  className="text-gray-300 hover:text-purple-300 transition-colors duration-200 flex items-center"
                >
                  🩺 Symptom Check
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-purple-300 transition-colors duration-200 flex items-center"
                >
                  ℹ️ How It Works
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-blue-300">Support</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-blue-300 transition-colors duration-200 flex items-center"
                >
                  📞 Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-300 hover:text-blue-300 transition-colors duration-200 flex items-center"
                >
                  🔒 Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-cyan-300">Legal</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/terms"
                  className="text-gray-300 hover:text-cyan-300 transition-colors duration-200 flex items-center"
                >
                  📋 Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/disclaimer"
                  className="text-gray-300 hover:text-cyan-300 transition-colors duration-200 flex items-center"
                >
                  ⚕️ Medical Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300 mb-2">&copy; 2024 MediSense. Made with ❤️ for better health.</p>
          <p className="text-sm text-gray-400">
            🏥 This tool is for informational purposes only and should not replace professional medical advice.
          </p>
        </div>
      </div>
    </footer>
  )
}
