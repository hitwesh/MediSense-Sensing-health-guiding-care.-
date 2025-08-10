"use client"
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { AlertCircle } from "lucide-react"

interface FormFieldProps {
  label: string
  error?: string
  required?: boolean
  className?: string
}

interface TextInputProps extends FormFieldProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  type?: "text" | "email" | "tel"
}

interface TextAreaProps extends FormFieldProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  rows?: number
}

interface SelectFieldProps extends FormFieldProps {
  value: string
  onChange: (value: string) => void
  options: { value: string; label: string }[]
  placeholder?: string
}

interface CheckboxFieldProps extends FormFieldProps {
  checked: boolean
  onChange: (checked: boolean) => void
  description?: string
}

export function TextInput({
  label,
  value,
  onChange,
  error,
  required,
  placeholder,
  type = "text",
  className,
}: TextInputProps) {
  return (
    <div className={cn("space-y-2", className)}>
      <Label htmlFor={label} className="text-sm font-medium">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </Label>
      <Input
        id={label}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={cn(error && "border-red-500")}
      />
      {error && (
        <div className="flex items-center space-x-1 text-sm text-red-600">
          <AlertCircle className="h-4 w-4" />
          <span>{error}</span>
        </div>
      )}
    </div>
  )
}

export function TextAreaField({
  label,
  value,
  onChange,
  error,
  required,
  placeholder,
  rows = 3,
  className,
}: TextAreaProps) {
  return (
    <div className={cn("space-y-2", className)}>
      <Label htmlFor={label} className="text-sm font-medium">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </Label>
      <Textarea
        id={label}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        className={cn(error && "border-red-500")}
      />
      {error && (
        <div className="flex items-center space-x-1 text-sm text-red-600">
          <AlertCircle className="h-4 w-4" />
          <span>{error}</span>
        </div>
      )}
    </div>
  )
}

export function SelectField({
  label,
  value,
  onChange,
  options,
  error,
  required,
  placeholder,
  className,
}: SelectFieldProps) {
  return (
    <div className={cn("space-y-2", className)}>
      <Label className="text-sm font-medium">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </Label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className={cn(error && "border-red-500")}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {error && (
        <div className="flex items-center space-x-1 text-sm text-red-600">
          <AlertCircle className="h-4 w-4" />
          <span>{error}</span>
        </div>
      )}
    </div>
  )
}

export function CheckboxField({
  label,
  checked,
  onChange,
  error,
  required,
  description,
  className,
}: CheckboxFieldProps) {
  return (
    <div className={cn("space-y-2", className)}>
      <div className="flex items-top space-x-2">
        <Checkbox id={label} checked={checked} onCheckedChange={onChange} className={cn(error && "border-red-500")} />
        <div className="grid gap-1.5 leading-none">
          <Label
            htmlFor={label}
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </Label>
          {description && <p className="text-xs text-muted-foreground">{description}</p>}
        </div>
      </div>
      {error && (
        <div className="flex items-center space-x-1 text-sm text-red-600">
          <AlertCircle className="h-4 w-4" />
          <span>{error}</span>
        </div>
      )}
    </div>
  )
}

// Multi-select checkbox group for symptoms
interface SymptomCheckboxGroupProps extends FormFieldProps {
  selectedSymptoms: string[]
  onChange: (symptoms: string[]) => void
  symptoms: string[]
}

export function SymptomCheckboxGroup({
  label,
  selectedSymptoms,
  onChange,
  symptoms,
  error,
  required,
  className,
}: SymptomCheckboxGroupProps) {
  const handleSymptomChange = (symptom: string, checked: boolean) => {
    if (checked) {
      onChange([...selectedSymptoms, symptom])
    } else {
      onChange(selectedSymptoms.filter((s) => s !== symptom))
    }
  }

  return (
    <div className={cn("space-y-3", className)}>
      <Label className="text-sm font-medium">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </Label>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {symptoms.map((symptom) => (
          <div key={symptom} className="flex items-center space-x-2">
            <Checkbox
              id={symptom}
              checked={selectedSymptoms.includes(symptom)}
              onCheckedChange={(checked) => handleSymptomChange(symptom, checked as boolean)}
            />
            <Label
              htmlFor={symptom}
              className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {symptom}
            </Label>
          </div>
        ))}
      </div>
      {error && (
        <div className="flex items-center space-x-1 text-sm text-red-600">
          <AlertCircle className="h-4 w-4" />
          <span>{error}</span>
        </div>
      )}
    </div>
  )
}
