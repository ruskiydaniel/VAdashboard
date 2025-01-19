import { Home, Clock, DollarSign, Smile, Activity, TrendingUp, MessageCircle, Settings } from 'lucide-react'

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Sidebar = ({ activeTab, setActiveTab }: SidebarProps) => {
  const menuItems = [
    { id: 'performance', icon: Home, label: 'Performance' },
    { id: 'timeTask', icon: Clock, label: 'Time & Task' },
    { id: 'financial', icon: DollarSign, label: 'Financial' },
    { id: 'satisfaction', icon: Smile, label: 'Satisfaction' },
    { id: 'realTime', icon: Activity, label: 'Real-Time' },
    { id: 'historical', icon: TrendingUp, label: 'Historical' },
    { id: 'communication', icon: MessageCircle, label: 'Communication' },
    { id: 'admin', icon: Settings, label: 'Admin' },
  ]

  return (
    <div className="flex flex-col w-64 bg-white border-r">
      <div className="flex items-center justify-center h-20 shadow-md">
        <h1 className="text-3xl font-semibold text-blue-500">VA Dashboard</h1>
      </div>
      <ul className="flex flex-col py-4">
        {menuItems.map((item) => (
          <li key={item.id}>
            <a
              href="#"
              className={`flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 ${
                activeTab === item.id ? 'text-blue-500' : 'text-gray-500'
              }`}
              onClick={() => setActiveTab(item.id)}
            >
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                <item.icon />
              </span>
              <span className="text-sm font-medium">{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar

