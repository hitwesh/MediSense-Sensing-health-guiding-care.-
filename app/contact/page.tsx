import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card } from "@/components/card"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
            <p className="text-muted-foreground">
              Have questions about MediSense? Need technical support? We're here to help.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <Card
                title="Get in Touch"
                description="Reach out to our support team for any questions or concerns about using MediSense."
              >
                <div className="space-y-4 mt-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-muted-foreground" />
                    <span className="text-sm">support@medisense.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-muted-foreground" />
                    <span className="text-sm">1-800-MEDISENSE</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-muted-foreground" />
                    <span className="text-sm">San Francisco, CA</span>
                  </div>
                </div>
              </Card>

              <Card
                title="Emergency Notice"
                description="If you are experiencing a medical emergency, do not use this application. Contact emergency services immediately."
              >
                <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded">
                  <p className="text-sm text-red-800 font-medium">
                    🚨 For emergencies, call 911 or your local emergency number
                  </p>
                </div>
              </Card>
            </div>

            <div>
              <Card
                title="Frequently Asked Questions"
                description="Common questions about MediSense and how to use our symptom assessment tool."
              >
                <div className="space-y-4 mt-4">
                  <div>
                    <h4 className="font-medium text-sm mb-1">Is MediSense a replacement for seeing a doctor?</h4>
                    <p className="text-xs text-muted-foreground">
                      No, MediSense is an educational tool that provides information only. Always consult healthcare
                      professionals for medical advice.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm mb-1">How accurate are the predictions?</h4>
                    <p className="text-xs text-muted-foreground">
                      Our AI provides insights based on symptom patterns, but accuracy varies. Use results as guidance,
                      not definitive diagnosis.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm mb-1">Is my health data stored?</h4>
                    <p className="text-xs text-muted-foreground">
                      No, we do not store personal health information. All analysis is performed in real-time and not
                      retained.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
