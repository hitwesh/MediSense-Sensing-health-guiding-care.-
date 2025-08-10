import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card } from "@/components/card"
import { Heart, Brain, Shield, Users, Zap, Award } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50">
      <Navbar />

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full text-sm font-medium text-purple-700 mb-6">
              ℹ️ About MediSense
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-6">
              Revolutionizing Healthcare with AI
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              AI-powered health insights to help you better understand your symptoms and make informed decisions about
              your health journey! 🚀✨
            </p>
          </div>

          {/* Mission Cards */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <Card
              title="🎯 Our Mission"
              description="To democratize access to health information by providing AI-powered symptom analysis that helps people understand their health better and make informed decisions about seeking medical care."
              className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200"
              icon={<Heart className="h-10 w-10 text-purple-600 mx-auto mb-4" />}
            />

            <Card
              title="🧠 How It Works"
              description="Our advanced AI system analyzes your symptoms against a comprehensive medical database to provide insights into possible conditions, along with personalized recommendations and guidance on next steps."
              className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200"
              icon={<Brain className="h-10 w-10 text-blue-600 mx-auto mb-4" />}
            />

            <Card
              title="🔒 Privacy & Security"
              description="Your health information is private and secure. We use industry-standard encryption and do not store personal health data. All analysis is performed in real-time and results are not retained."
              className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200"
              icon={<Shield className="h-10 w-10 text-green-600 mx-auto mb-4" />}
            />
          </div>

          {/* Stats Section */}
          <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-3xl p-12 mb-16 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Trusted by the Community 💙</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <Users className="h-8 w-8 mx-auto mb-3 text-purple-200" />
                <div className="text-3xl font-bold mb-2">50K+</div>
                <div className="text-purple-100">Happy Users</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <Zap className="h-8 w-8 mx-auto mb-3 text-blue-200" />
                <div className="text-3xl font-bold mb-2">100K+</div>
                <div className="text-blue-100">Assessments</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <Award className="h-8 w-8 mx-auto mb-3 text-cyan-200" />
                <div className="text-3xl font-bold mb-2">95%</div>
                <div className="text-cyan-100">Satisfaction</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <Heart className="h-8 w-8 mx-auto mb-3 text-pink-200" />
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-pink-100">Available</div>
              </div>
            </div>
          </div>

          {/* Deployment Info */}
          <div className="bg-white rounded-3xl shadow-xl border-2 border-gray-100 p-8 mb-8">
            <h2 className="text-2xl font-bold text-center mb-6 text-gray-900">🚀 Built for Scale & Reliability</h2>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-4">
                <div className="text-3xl mb-2">⚡</div>
                <h3 className="font-semibold mb-2">Lightning Fast</h3>
                <p className="text-sm text-gray-600">
                  Deployed on Vercel CDN for global availability and instant loading
                </p>
              </div>
              <div className="p-4">
                <div className="text-3xl mb-2">🔄</div>
                <h3 className="font-semibold mb-2">Auto-Scaling</h3>
                <p className="text-sm text-gray-600">Backend on Render/Railway with automatic scaling and deployment</p>
              </div>
              <div className="p-4">
                <div className="text-3xl mb-2">🛡️</div>
                <h3 className="font-semibold mb-2">Enterprise Security</h3>
                <p className="text-sm text-gray-600">Managed databases with encryption, backups, and compliance</p>
              </div>
            </div>
          </div>

          {/* Important Notice */}
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-200 rounded-3xl p-8">
            <div className="flex items-start space-x-4">
              <div className="text-3xl">⚠️</div>
              <div>
                <h2 className="text-xl font-bold mb-4 text-yellow-800">Important Medical Notice</h2>
                <p className="text-yellow-700 leading-relaxed">
                  MediSense is designed to provide educational information and should never replace professional medical
                  advice, diagnosis, or treatment. Always consult with qualified healthcare providers for medical
                  concerns. In case of emergency, contact your local emergency services immediately! 🚨
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
