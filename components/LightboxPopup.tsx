import type React from "react"
import { useState, useEffect } from "react"
import ReactDOM from "react-dom"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const slides = [
  {
    title: "Performance",
    image: "/images/performance-highlight.png",
    description: "View key performance metrics for your team or individual VAs.",
  },
  {
    title: "Time & Task",
    image: "/images/time-task-highlight.png",
    description: "Analyze time allocation and task distribution across your team.",
  },
  {
    title: "Financial",
    image: "/images/financial-highlight.png",
    description: "Track revenue, cost savings, and other financial metrics.",
  },
  {
    title: "Satisfaction",
    image: "/images/satisfaction-highlight.png",
    description: "Monitor client satisfaction scores and feedback.",
  },
  {
    title: "Real-Time",
    image: "/images/real-time-highlight.png",
    description: "Get live updates on VA status and task progress.",
  },
  {
    title: "Historical",
    image: "/images/historical-highlight.png",
    description: "View trends and patterns in performance over time.",
  },
  {
    title: "Communication",
    image: "/images/communication-highlight.png",
    description: "Stay updated with the latest team communications and updates.",
  },
  {
    title: "Task Management",
    image: "/images/task-management-highlight.png",
    description: "Assign, track, and manage tasks for your virtual assistants.",
  },
  {
    title: "Admin",
    image: "/images/admin-highlight.png",
    description: "Access administrative tools and settings for your dashboard.",
  },
]

interface LightboxPopupProps {
  onClose: () => void
}

const LightboxPopup: React.FC<LightboxPopupProps> = ({ onClose }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(null)

  useEffect(() => {
    setPortalRoot(document.body)
  }, [])

  const handleNext = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1))
  }

  const handleClose = () => {
    onClose()
  }

  if (!portalRoot) return null

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 relative">
        <button onClick={handleClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
          <X size={24} />
        </button>
        <div className="p-8">
          <h2 className="text-2xl font-bold mb-4">{slides[currentSlide].title}</h2>
          <div className="mb-6 bg-gray-100 rounded-lg overflow-hidden relative" style={{ height: '400px' }}>
            <Image
              src={slides[currentSlide].image || "/placeholder.svg"}
              alt={`${slides[currentSlide].title} section`}
              fill
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
          <p className="text-gray-600 mb-6">{slides[currentSlide].description}</p>
          <div className="flex justify-between">
            {currentSlide < slides.length - 1 ? (
              <Button onClick={handleNext}>Next</Button>
            ) : (
              <Button onClick={handleClose}>Test it out</Button>
            )}
          </div>
        </div>
      </div>
    </div>,
    portalRoot,
  )
}

export default LightboxPopup

