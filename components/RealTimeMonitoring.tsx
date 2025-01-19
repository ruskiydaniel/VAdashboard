import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface VAStatus {
  name: string
  status: 'Online' | 'Offline'
  currentTask: string
  lastActive: string
}

interface TaskProgress {
  task: string
  deadline: string
  priority: 'High' | 'Medium' | 'Low'
  status: 'In Progress' | 'Not Started' | 'Completed'
}

interface MonitoringData {
  vaStatus: VAStatus[]
  taskProgress: TaskProgress[]
}

interface Agent {
  id: number
}

interface RealTimeMonitoringProps {
  selectedAgent: Agent | null
}

// Sample data for team and individual agents
const teamData: MonitoringData = {
  vaStatus: [
    { name: 'John Doe', status: 'Online', currentTask: 'Email Management', lastActive: '2 minutes ago' },
    { name: 'Jane Smith', status: 'Offline', currentTask: 'N/A', lastActive: '1 hour ago' },
    { name: 'Bob Johnson', status: 'Online', currentTask: 'Research', lastActive: '5 minutes ago' },
  ],
  taskProgress: [
    { task: 'Content Creation', deadline: '2023-07-15', priority: 'High', status: 'In Progress' },
    { task: 'Data Entry', deadline: '2023-07-20', priority: 'Medium', status: 'Not Started' },
    { task: 'Customer Support', deadline: '2023-07-10', priority: 'High', status: 'Completed' },
  ],
}

const agentData: Record<number, MonitoringData> = {
  1: {
    vaStatus: [
      { name: 'John Doe', status: 'Online', currentTask: 'Email Management', lastActive: '2 minutes ago' },
    ],
    taskProgress: [
      { task: 'Content Creation', deadline: '2023-07-15', priority: 'High', status: 'In Progress' },
      { task: 'Research', deadline: '2023-07-18', priority: 'Medium', status: 'Not Started' },
    ],
  },
  // ... (similar data for agents 2-5)
}

const RealTimeMonitoring = ({ selectedAgent }: RealTimeMonitoringProps) => {
  const data = selectedAgent ? agentData[selectedAgent.id] : teamData

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>VA Status Tracking</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {data.vaStatus.map((va, index) => (
              <div key={index} className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{va.name}</p>
                  <p className="text-sm text-muted-foreground">{va.currentTask}</p>
                </div>
                <div className="text-right">
                  <Badge variant={va.status === 'Online' ? 'default' : 'secondary'}>
                    {va.status}
                  </Badge>
                  <p className="text-xs text-muted-foreground mt-1">Last active: {va.lastActive}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Task Progress Tracking</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {data.taskProgress.map((task, index) => (
              <div key={index} className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{task.task}</p>
                  <p className="text-sm text-muted-foreground">Deadline: {task.deadline}</p>
                </div>
                <div className="text-right">
                  <Badge variant={task.priority === 'High' ? 'destructive' : 'default'}>
                    {task.priority}
                  </Badge>
                  <p className="text-xs text-muted-foreground mt-1">{task.status}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default RealTimeMonitoring

