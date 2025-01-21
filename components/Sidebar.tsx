import {
  Home,
  Clock,
  DollarSign,
  Smile,
  Activity,
  TrendingUp,
  MessageCircle,
  Settings,
  Clipboard,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Sidebar = ({ activeTab, setActiveTab, isOpen, setIsOpen }: SidebarProps) => {
  const menuItems = [
    { id: "performance", icon: Home, label: "Performance" },
    { id: "timeTask", icon: Clock, label: "Time & Task" },
    { id: "financial", icon: DollarSign, label: "Financial" },
    { id: "satisfaction", icon: Smile, label: "Satisfaction" },
    { id: "realTime", icon: Activity, label: "Real-Time" },
    { id: "historical", icon: TrendingUp, label: "Historical" },
    { id: "communication", icon: MessageCircle, label: "Communication" },
    { id: "taskManagement", icon: Clipboard, label: "Task Management" },
    { id: "admin", icon: Settings, label: "Admin" },
  ]

  return (
    <div
      className={`fixed inset-y-0 right-0 z-30 w-64 bg-white bg-opacity-70 backdrop-filter backdrop-blur-lg border-r border-gray-200 transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out md:relative md:translate-x-0`}
    >
      <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200 bg-white bg-opacity-80">
        <h1 className="text-xl font-semibold text-blue-500">VA Dashboard</h1>
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(false)}>
          <X className="h-6 w-6" />
        </Button>
      </div>
      <nav className="mt-5">
        <ul className="px-2">
          {menuItems.map((item) => (
            <li key={item.id} className="mb-2">
              <a
                href="#"
                id={`sidebar-${item.id}`}
                className={`flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors duration-150 ease-in-out ${
                  activeTab === item.id
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                }`}
                onClick={() => {
                  setActiveTab(item.id)
                  setIsOpen(false)
                }}
              >
                <item.icon className="mr-3 h-6 w-6" />
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar

