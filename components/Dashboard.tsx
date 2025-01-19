'use client'

import { useState } from 'react'
import Sidebar from './Sidebar'
import PerformanceMetrics from './PerformanceMetrics'
import TimeTaskManagement from './TimeTaskManagement'
import FinancialMetrics from './FinancialMetrics'
import ClientSatisfaction from './ClientSatisfaction'
import RealTimeMonitoring from './RealTimeMonitoring'
import HistoricalAnalytics from './HistoricalAnalytics'
import CommunicationUpdates from './CommunicationUpdates'
import AdministrativeTools from './AdministrativeTools'
import TeamAgentSelector from './TeamAgentSelector'

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('performance')
  const [selectedAgent, setSelectedAgent] = useState(null)

  const renderContent = () => {
    switch (activeTab) {
      case 'performance':
        return <PerformanceMetrics selectedAgent={selectedAgent} />
      case 'timeTask':
        return <TimeTaskManagement selectedAgent={selectedAgent} />
      case 'financial':
        return <FinancialMetrics selectedAgent={selectedAgent} />
      case 'satisfaction':
        return <ClientSatisfaction selectedAgent={selectedAgent} />
      case 'realTime':
        return <RealTimeMonitoring selectedAgent={selectedAgent} />
      case 'historical':
        return <HistoricalAnalytics selectedAgent={selectedAgent} />
      case 'communication':
        return <CommunicationUpdates selectedAgent={selectedAgent} />
      case 'admin':
        return <AdministrativeTools selectedAgent={selectedAgent} />
      default:
        return <PerformanceMetrics selectedAgent={selectedAgent} />
    }
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
        <div className="container mx-auto px-6 py-8">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-3xl font-semibold text-gray-700">VA Performance Dashboard</h3>
            <TeamAgentSelector selectedAgent={selectedAgent} setSelectedAgent={setSelectedAgent} />
          </div>
          {renderContent()}
        </div>
      </main>
    </div>
  )
}

export default Dashboard

