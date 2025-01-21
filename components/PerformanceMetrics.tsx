import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

interface Agent {
  id: number;
  name: string;
}

interface PerformanceData {
  taskCompletion: number;
  responseTime: number;
  accuracy: number;
  productivity: number;
}

interface AgentDataMap {
  [key: number]: PerformanceData;
}

interface PerformanceMetricsProps {
  selectedAgent: Agent | null;
}

// Sample data for team and individual agents
const teamData: PerformanceData = {
  taskCompletion: 95,
  responseTime: 92,
  accuracy: 97,
  productivity: 94,
}

const agentData: AgentDataMap = {
  1: {
    taskCompletion: 96,
    responseTime: 93,
    accuracy: 98,
    productivity: 95,
  },
  2: {
    taskCompletion: 94,
    responseTime: 91,
    accuracy: 96,
    productivity: 93,
  },
  3: {
    taskCompletion: 93,
    responseTime: 90,
    accuracy: 95,
    productivity: 92,
  },
  4: {
    taskCompletion: 92,
    responseTime: 89,
    accuracy: 94,
    productivity: 91,
  },
  5: {
    taskCompletion: 91,
    responseTime: 88,
    accuracy: 93,
    productivity: 90,
  },
}

const PerformanceMetrics = ({ selectedAgent }: PerformanceMetricsProps) => {
  const data = selectedAgent ? agentData[selectedAgent.id] : teamData

  return (
    <Card>
      <CardHeader>
        <CardTitle>Performance Metrics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div>
            <div className="flex justify-between mb-2">
              <span>Task Completion Rate</span>
              <span>{data.taskCompletion}%</span>
            </div>
            <Progress value={data.taskCompletion} />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <span>Response Time</span>
              <span>{data.responseTime}%</span>
            </div>
            <Progress value={data.responseTime} />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <span>Accuracy</span>
              <span>{data.accuracy}%</span>
            </div>
            <Progress value={data.accuracy} />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <span>Productivity</span>
              <span>{data.productivity}%</span>
            </div>
            <Progress value={data.productivity} />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default PerformanceMetrics

