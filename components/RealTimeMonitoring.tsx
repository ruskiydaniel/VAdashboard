import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Agent {
  id: number;
  name: string;
}

interface MonitoringData {
  status: string;
  currentTask: string;
  timeOnTask: string;
  nextTask: string;
  lastActivity: string;
}

interface AgentDataMap {
  [key: number]: MonitoringData;
}

interface RealTimeMonitoringProps {
  selectedAgent: Agent | null;
}

// Sample data for team and individual agents
const teamData: MonitoringData = {
  status: "Active",
  currentTask: "Multiple Tasks",
  timeOnTask: "Various",
  nextTask: "Upcoming Tasks",
  lastActivity: "1 minute ago",
}

const agentData: AgentDataMap = {
  1: {
    status: "Active",
    currentTask: "Email Management",
    timeOnTask: "45 minutes",
    nextTask: "Content Creation",
    lastActivity: "2 minutes ago",
  },
  2: {
    status: "Break",
    currentTask: "Research",
    timeOnTask: "30 minutes",
    nextTask: "Data Entry",
    lastActivity: "5 minutes ago",
  },
  3: {
    status: "Active",
    currentTask: "Customer Support",
    timeOnTask: "15 minutes",
    nextTask: "Report Generation",
    lastActivity: "1 minute ago",
  },
  4: {
    status: "Meeting",
    currentTask: "Client Call",
    timeOnTask: "20 minutes",
    nextTask: "Task Planning",
    lastActivity: "3 minutes ago",
  },
  5: {
    status: "Active",
    currentTask: "Social Media",
    timeOnTask: "25 minutes",
    nextTask: "Content Review",
    lastActivity: "4 minutes ago",
  },
}

const RealTimeMonitoring = ({ selectedAgent }: RealTimeMonitoringProps) => {
  const data = selectedAgent ? agentData[selectedAgent.id] : teamData

  return (
    <Card>
      <CardHeader>
        <CardTitle>Real-Time Monitoring</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Status</span>
            <Badge variant={data.status.toLowerCase() === "active" ? "default" : "secondary"}>
              {data.status}
            </Badge>
          </div>
          <div>
            <span className="text-sm font-medium">Current Task</span>
            <p className="mt-1 text-sm">{data.currentTask}</p>
            <p className="text-xs text-muted-foreground">Time on task: {data.timeOnTask}</p>
          </div>
          <div>
            <span className="text-sm font-medium">Next Task</span>
            <p className="mt-1 text-sm">{data.nextTask}</p>
          </div>
          <div>
            <span className="text-sm font-medium">Last Activity</span>
            <p className="mt-1 text-sm">{data.lastActivity}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default RealTimeMonitoring

