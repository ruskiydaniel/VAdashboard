import type React from "react"
import { useState, useEffect } from "react"
import ReactDOM from "react-dom"
import { 
  X, 
  Home, 
  Clock, 
  DollarSign, 
  Smile, 
  Activity, 
  TrendingUp, 
  MessageCircle, 
  Clipboard, 
  Settings,
  ChevronLeft,
  ChevronRight
} from "lucide-react"
import { Button } from "@/components/ui/button"

const slides = [
  {
    title: "Performance",
    icon: Home,
    description: "View key performance metrics for your team or individual VAs.",
  },
  {
    title: "Time & Task",
    icon: Clock,
    description: "Analyze time allocation and task distribution across your team.",
  },
  {
    title: "Financial",
    icon: DollarSign,
    description: "Track revenue, cost savings, and other financial metrics.",
  },
  {
    title: "Satisfaction",
    icon: Smile,
    description: "Monitor client satisfaction scores and feedback.",
  },
  {
    title: "Real-Time",
    icon: Activity,
    description: "Get live updates on VA status and task progress.",
  },
  {
    title: "Historical",
    icon: TrendingUp,
    description: "View trends and patterns in performance over time.",
  },
  {
    title: "Communication",
    icon: MessageCircle,
    description: "Stay updated with the latest team communications and updates.",
  },
  {
    title: "Task Management",
    icon: Clipboard,
    description: "Assign, track, and manage tasks for your virtual assistants.",
  },
  {
    title: "Admin",
    icon: Settings,
    description: "Configure system settings and manage user permissions.",
  },
]

interface LightboxPopupProps {
  onClose: () => void
}

const LightboxPopup: React.FC<LightboxPopupProps> = ({ onClose }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const handlePrevious = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  if (!mounted) return null

  const slide = slides[currentSlide]
  const Icon = slide.icon

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-2xl w-full p-6 relative">
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-4"
          onClick={onClose}
        >
          <X className="h-6 w-6" />
        </Button>
        
        <div className="flex flex-col items-center space-y-6 pt-8">
          <div className="w-24 h-24 flex items-center justify-center bg-blue-100 rounded-full">
            <Icon className="w-12 h-12 text-blue-600" />
          </div>
          
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-2">{slide.title}</h2>
            <p className="text-gray-600">{slide.description}</p>
          </div>

          <div className="flex items-center space-x-4 mt-6">
            <Button variant="outline" size="icon" onClick={handlePrevious}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <span className="text-sm text-gray-500">
              {currentSlide + 1} of {slides.length}
            </span>
            <Button variant="outline" size="icon" onClick={handleNext}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  )
}

export default LightboxPopup

