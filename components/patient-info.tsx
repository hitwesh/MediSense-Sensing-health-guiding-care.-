"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { User, Heart, Shield, Star } from "lucide-react"
import type { PatientInfo as PatientInfoType } from "@/types"
import { MEDICAL_CONDITIONS, GENDER_OPTIONS } from "@/constants/medical-data"

interface PatientInfoProps {
  patientInfo: PatientInfoType
  setPatientInfo: (info: PatientInfoType) => void
}

export function PatientInfo({ patientInfo, setPatientInfo }: PatientInfoProps) {
  const handleMedicalHistoryChange = (condition: string, checked: boolean) => {
    if (checked) {
      setPatientInfo({
        ...patientInfo,
        medicalHistory: [...patientInfo.medicalHistory, condition],
      })
    } else {
      setPatientInfo({
        ...patientInfo,
        medicalHistory: patientInfo.medicalHistory.filter((c) => c !== condition),
      })
    }
  }

  return (
    <Card className="border-0 shadow-2xl bg-gradient-to-br from-white to-teal-50 overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-teal-500 to-blue-500 text-white">
        <CardTitle className="flex items-center space-x-3 text-xl">
          <div className="bg-white/20 p-2 rounded-lg">
            <User className="h-6 w-6" />
          </div>
          <span>Patient Information</span>
          <Star className="h-5 w-5 text-yellow-300 animate-pulse" />
        </CardTitle>
        <CardDescription className="text-teal-100">
          Provide basic information to improve diagnosis accuracy
        </CardDescription>
      </CardHeader>
      <CardContent className="p-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Label htmlFor="age" className="text-teal-900 font-bold text-lg flex items-center space-x-2">
              <User className="h-5 w-5 text-teal-600" />
              <span>Age</span>
            </Label>
            <Input
              id="age"
              type="number"
              placeholder="Enter your age"
              value={patientInfo.age}
              onChange={(e) => setPatientInfo({ ...patientInfo, age: e.target.value })}
              className="mt-3 h-12 border-2 border-teal-200 focus:border-teal-400 rounded-xl text-lg bg-gradient-to-r from-white to-teal-50"
            />
          </div>
          <div>
            <Label htmlFor="gender" className="text-teal-900 font-bold text-lg flex items-center space-x-2">
              <Heart className="h-5 w-5 text-pink-500" />
              <span>Gender</span>
            </Label>
            <Select
              value={patientInfo.gender}
              onValueChange={(value) => setPatientInfo({ ...patientInfo, gender: value })}
            >
              <SelectTrigger className="mt-3 h-12 border-2 border-teal-200 rounded-xl bg-gradient-to-r from-white to-teal-50">
                <SelectValue placeholder="Select gender" />
              </SelectTrigger>
              <SelectContent>
                {GENDER_OPTIONS.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          <Label className="text-teal-900 font-bold text-lg flex items-center space-x-2">
            <Shield className="h-5 w-5 text-green-600" />
            <span>Medical History</span>
          </Label>
          <p className="text-teal-700 mb-4 font-medium">Select any conditions you have or have had</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {MEDICAL_CONDITIONS.map((condition) => (
              <div
                key={condition}
                className="flex items-center space-x-3 bg-gradient-to-r from-teal-50 to-blue-50 p-4 rounded-xl border border-teal-200 hover:shadow-md transition-shadow duration-200"
              >
                <Checkbox
                  id={condition}
                  checked={patientInfo.medicalHistory.includes(condition)}
                  onCheckedChange={(checked) => handleMedicalHistoryChange(condition, checked as boolean)}
                  className="border-2 border-teal-400"
                />
                <Label htmlFor={condition} className="text-teal-800 font-medium cursor-pointer">
                  {condition}
                </Label>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
