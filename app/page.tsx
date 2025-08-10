import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card } from "@/components/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Heart, Zap, Shield, ArrowRight, Sparkles } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-cyan-600/10"></div>
          <div className="container mx-auto px-4 text-center relative">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full text-sm font-medium text-purple-700 mb-6 animate-pulse">
              <Sparkles className="h-4 w-4 mr-2" />
              AI-Powered Health Insights
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6">
              MediSense
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your health journey with intelligent symptom analysis. Get personalized insights and
              recommendations powered by cutting-edge AI technology. 🚀
            </p>
            <Link href="/symptom-form">
              <Button
                size="lg"
                className="text-lg px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Start Your Health Check
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">How It Works ✨</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Three simple steps to better understand your health
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card
                title="🩺 Enter Symptoms"
                description="Describe your symptoms using our intuitive form with guided questions and smart validation. Our friendly interface makes it easy!"
                className="text-center transform hover:scale-105 transition-all duration-200 border-2 border-purple-100 hover:border-purple-300 bg-gradient-to-br from-purple-50 to-pink-50"
                icon={<Heart className="h-8 w-8 text-purple-600 mx-auto mb-4" />}
              />
              <Card
                title="🤖 AI Analysis"
                description="Our advanced AI analyzes your symptoms against comprehensive medical databases to provide intelligent insights in seconds."
                className="text-center transform hover:scale-105 transition-all duration-200 border-2 border-blue-100 hover:border-blue-300 bg-gradient-to-br from-blue-50 to-cyan-50"
                icon={<Zap className="h-8 w-8 text-blue-600 mx-auto mb-4" />}
              />
              <Card
                title="📊 Get Results"
                description="Receive personalized recommendations and potential conditions with confidence scores. Clear, actionable insights for your health."
                className="text-center transform hover:scale-105 transition-all duration-200 border-2 border-green-100 hover:border-green-300 bg-gradient-to-br from-green-50 to-emerald-50"
                icon={<Shield className="h-8 w-8 text-green-600 mx-auto mb-4" />}
              />
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Trusted by Thousands 💙</h2>
              <p className="text-xl text-purple-100 mb-8">
                Join the community of people taking control of their health with AI-powered insights
              </p>
              <div className="grid md:grid-cols-3 gap-8 text-white">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <div className="text-3xl font-bold mb-2">50K+</div>
                  <div className="text-purple-100">Health Assessments</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <div className="text-3xl font-bold mb-2">95%</div>
                  <div className="text-purple-100">User Satisfaction</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <div className="text-3xl font-bold mb-2">24/7</div>
                  <div className="text-purple-100">Available Support</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
