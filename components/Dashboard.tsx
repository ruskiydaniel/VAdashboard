"use client"

import { useState, useEffect } from "react"
import Sidebar from "./Sidebar"
import PerformanceMetrics from "./PerformanceMetrics"
import TimeTaskManagement from "./TimeTaskManagement"
import FinancialMetrics from "./FinancialMetrics"
import ClientSatisfaction from "./ClientSatisfaction"
import RealTimeMonitoring from "./RealTimeMonitoring"
import HistoricalAnalytics from "./HistoricalAnalytics"
import CommunicationUpdates from "./CommunicationUpdates"
import AdministrativeTools from "./AdministrativeTools"
import TeamAgentSelector from "./TeamAgentSelector"
import TaskManagement from "./TaskManagement"
import LightboxPopup from "./LightboxPopup"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

interface Agent {
  id: number;
  name: string;
}

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("performance")
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [showLightbox, setShowLightbox] = useState(false)

  useEffect(() => {
    const hasSeenWalkthrough = localStorage.getItem("hasSeenWalkthrough")
    if (!hasSeenWalkthrough) {
      setShowLightbox(true)
      localStorage.setItem("hasSeenWalkthrough", "true")
    }
  }, [])

  const renderContent = () => {
    switch (activeTab) {
      case "performance":
        return <PerformanceMetrics selectedAgent={selectedAgent} />
      case "timeTask":
        return <TimeTaskManagement selectedAgent={selectedAgent} />
      case "financial":
        return <FinancialMetrics selectedAgent={selectedAgent} />
      case "satisfaction":
        return <ClientSatisfaction selectedAgent={selectedAgent} />
      case "realTime":
        return <RealTimeMonitoring selectedAgent={selectedAgent} />
      case "historical":
        return <HistoricalAnalytics selectedAgent={selectedAgent} />
      case "communication":
        return <CommunicationUpdates selectedAgent={selectedAgent} />
      case "admin":
        return <AdministrativeTools />
      case "taskManagement":
        return <TaskManagement />
      default:
        return <PerformanceMetrics selectedAgent={selectedAgent} />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        <Sidebar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          isOpen={sidebarOpen}
          setIsOpen={setSidebarOpen}
        />
        <div className="flex-1">
          <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200 bg-white bg-opacity-80">
            <h1 className="text-xl font-semibold text-gray-900">
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1).replace(/([A-Z])/g, ' $1')}
            </h1>
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setSidebarOpen(true)}>
              <Menu className="h-6 w-6" />
            </Button>
          </div>
          <div className="p-6">
            <TeamAgentSelector selectedAgent={selectedAgent} setSelectedAgent={setSelectedAgent} />
            {renderContent()}
          </div>
        </div>
      </div>
      {showLightbox && <LightboxPopup onClose={() => setShowLightbox(false)} />}
      <a
        href="https://teleforce360.com"
        className="fixed bottom-6 right-6 z-50 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg transition-colors duration-200 flex items-center space-x-2"
      >
        <span>Exit Demo</span>
      </a>
    </div>
  )
}

export default Dashboard

