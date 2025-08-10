"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { Activity, Search, X, Heart, Zap, Sparkles } from "lucide-react"
import type { Symptom } from "@/types"

interface SymptomInputProps {
  symptoms: Symptom[]
  setSymptoms: (symptoms: Symptom[]) => void
}

export function SymptomInput({ symptoms, setSymptoms }: SymptomInputProps) {
  const [symptomSearch, setSymptomSearch] = useState("")
  const [availableSymptoms] = useState<string[]>([
    "Headache",
    "Fever",
    "Cough",
    "Sore throat",
    "Runny nose",
    "Fatigue",
    "Nausea",
    "Vomiting",
    "Diarrhea",
    "Abdominal pain",
    "Chest pain",
    "Shortness of breath",
    "Dizziness",
    "Joint pain",
    "Muscle aches",
    "Skin rash",
    "Loss of appetite",
    "Difficulty sleeping",
    "Back pain",
    "Neck pain",
  ])

  const filteredSymptoms = availableSymptoms.filter(
    (symptom) =>
      symptom.toLowerCase().includes(symptomSearch.toLowerCase()) && !symptoms.find((s) => s.name === symptom),
  )

  const addSymptom = (symptomName: string) => {
    const newSymptom: Symptom = {
      id: Date.now().toString(),
      name: symptomName,
      severity: 5,
    }
    setSymptoms([...symptoms, newSymptom])
    setSymptomSearch("")
  }

  const removeSymptom = (id: string) => {
    setSymptoms(symptoms.filter((s) => s.id !== id))
  }

  const updateSymptomSeverity = (id: string, severity: number) => {
    setSymptoms(symptoms.map((s) => (s.id === id ? { ...s, severity } : s)))
  }

  return (
    <Card className="border-0 shadow-2xl bg-gradient-to-br from-white to-purple-50 overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
        <CardTitle className="flex items-center space-x-3 text-xl">
          <div className="bg-white/20 p-2 rounded-lg">
            <Activity className="h-6 w-6" />
          </div>
          <span>Describe Your Symptoms</span>
          <Sparkles className="h-5 w-5 text-yellow-300 animate-pulse" />
        </CardTitle>
        <CardDescription className="text-purple-100">
          Search and select symptoms you're experiencing, then rate their severity
        </CardDescription>
      </CardHeader>
      <CardContent className="p-8">
        {/* Symptom Search */}
        <div className="mb-8">
          <Label htmlFor="symptom-search" className="text-purple-900 font-bold text-lg flex items-center space-x-2">
            <Search className="h-5 w-5 text-purple-600" />
            <span>Search Symptoms</span>
          </Label>
          <div className="relative mt-3">
            <Search className="absolute left-4 top-4 h-5 w-5 text-purple-400" />
            <Input
              id="symptom-search"
              placeholder="Type to search symptoms..."
              value={symptomSearch}
              onChange={(e) => setSymptomSearch(e.target.value)}
              className="pl-12 h-12 border-2 border-purple-200 focus:border-purple-400 rounded-xl text-lg bg-gradient-to-r from-white to-purple-50"
            />
          </div>

          {/* Symptom Suggestions */}
          {symptomSearch && filteredSymptoms.length > 0 && (
            <div className="mt-3 bg-white border-2 border-purple-200 rounded-xl shadow-lg max-h-48 overflow-y-auto">
              {filteredSymptoms.slice(0, 5).map((symptom) => (
                <button
                  key={symptom}
                  onClick={() => addSymptom(symptom)}
                  className="w-full text-left px-4 py-3 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 text-purple-900 font-medium transition-all duration-200 border-b border-purple-100 last:border-b-0"
                >
                  {symptom}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Selected Symptoms */}
        <div className="space-y-6">
          <Label className="text-purple-900 font-bold text-lg flex items-center space-x-2">
            <Heart className="h-5 w-5 text-pink-500" />
            <span>Selected Symptoms</span>
          </Label>
          {symptoms.length === 0 ? (
            <div className="text-center py-12 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border-2 border-dashed border-purple-300">
              <Activity className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <p className="text-purple-600 text-lg font-medium">No symptoms selected yet</p>
              <p className="text-purple-500">Start typing above to add symptoms</p>
            </div>
          ) : (
            <div className="space-y-4">
              {symptoms.map((symptom) => (
                <div
                  key={symptom.id}
                  className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-xl border-2 border-purple-200 shadow-lg hover:shadow-xl transition-shadow duration-200"
                >
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 text-sm font-semibold">
                      {symptom.name}
                    </Badge>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeSymptom(symptom.id)}
                      className="text-red-500 hover:text-red-700 hover:bg-red-50 rounded-full"
                    >
                      <X className="h-5 w-5" />
                    </Button>
                  </div>
                  <div className="space-y-3">
                    <Label className="text-purple-700 font-semibold flex items-center space-x-2">
                      <Zap className="h-4 w-4" />
                      <span>Severity: {symptom.severity}/10</span>
                    </Label>
                    <Slider
                      value={[symptom.severity]}
                      onValueChange={(value) => updateSymptomSeverity(symptom.id, value[0])}
                      max={10}
                      min={1}
                      step={1}
                      className="w-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
