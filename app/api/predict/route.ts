export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { symptoms, severity, duration, age, medicalHistory } = body

    // Simulate AI processing delay
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Mock AI prediction results
    const mockResults = {
      predictions: [
        {
          condition: "Common Cold",
          description:
            "A viral infection of the upper respiratory tract, typically causing runny nose, cough, and mild fever. Usually resolves within 7-10 days.",
          confidence: Math.floor(Math.random() * 30) + 70, // 70-100%
          recommendations: [
            "Get plenty of rest and sleep 8+ hours",
            "Stay well hydrated with water and warm fluids",
            "Consider over-the-counter cold medications for symptom relief",
            "Use a humidifier or breathe steam from hot shower",
          ],
        },
        {
          condition: "Seasonal Allergies",
          description:
            "Allergic reactions to environmental allergens like pollen, dust mites, or pet dander. Symptoms often seasonal or triggered by specific exposures.",
          confidence: Math.floor(Math.random() * 25) + 50, // 50-75%
          recommendations: [
            "Identify and avoid known allergens when possible",
            "Consider antihistamines (consult pharmacist/doctor)",
            "Keep windows closed during high pollen days",
            "Use air purifiers and wash bedding in hot water weekly",
          ],
        },
        {
          condition: "Viral Gastroenteritis",
          description:
            "Inflammation of the stomach and intestines caused by a viral infection. Often called 'stomach flu' though unrelated to influenza.",
          confidence: Math.floor(Math.random() * 20) + 30, // 30-50%
          recommendations: [
            "Stay hydrated with clear fluids, electrolyte solutions",
            "Follow the BRAT diet (Bananas, Rice, Applesauce, Toast)",
            "Rest and avoid solid foods initially until nausea subsides",
            "Gradually reintroduce normal foods as symptoms improve",
          ],
        },
      ],
      generalRecommendations: [
        "Monitor your symptoms closely and track any changes 📊",
        "Seek medical attention if symptoms worsen or persist beyond expected timeframe 🏥",
        "Maintain good hygiene practices - wash hands frequently 🧼",
        "Get adequate rest (7-9 hours) and maintain good nutrition 🥗",
        "Stay hydrated and avoid alcohol/smoking during recovery 💧",
        "Consider telemedicine consultation if unsure about next steps 💻",
      ],
    }

    return Response.json(mockResults)
  } catch (error) {
    console.error("Prediction API error:", error)
    return Response.json({ error: "Failed to analyze symptoms. Please try again." }, { status: 500 })
  }
}
