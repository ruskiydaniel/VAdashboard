import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

interface MetricsData {
  overallSatisfaction: number
  responseQuality: number
  communication: number
  taskAccuracy: number
}

interface Agent {
  id: number
}

interface ClientSatisfactionProps {
  selectedAgent: Agent | null
}

// Sample data for team and individual agents
const teamData: MetricsData = {
  overallSatisfaction: 98,
  responseQuality: 96,
  communication: 98,
  taskAccuracy: 97,
}

const agentData: Record<number, MetricsData> = {
  1: { overallSatisfaction: 99, responseQuality: 97, communication: 99, taskAccuracy: 98 },
  2: { overallSatisfaction: 97, responseQuality: 95, communication: 98, taskAccuracy: 96 },
  3: { overallSatisfaction: 98, responseQuality: 96, communication: 97, taskAccuracy: 98 },
  4: { overallSatisfaction: 96, responseQuality: 94, communication: 97, taskAccuracy: 95 },
  5: { overallSatisfaction: 98, responseQuality: 97, communication: 98, taskAccuracy: 97 },
}

const ClientSatisfaction = ({ selectedAgent }: ClientSatisfactionProps) => {
  const data = selectedAgent ? agentData[selectedAgent.id] : teamData

  return (
    <Card>
      <CardHeader>
        <CardTitle>Client Satisfaction Metrics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-1">
              <span>Overall Satisfaction</span>
              <span className="font-bold">{data.overallSatisfaction}%</span>
            </div>
            <Progress value={data.overallSatisfaction} className="h-2" />
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span>Response Quality</span>
              <span className="font-bold">{data.responseQuality}%</span>
            </div>
            <Progress value={data.responseQuality} className="h-2" />
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span>Communication</span>
              <span className="font-bold">{data.communication}%</span>
            </div>
            <Progress value={data.communication} className="h-2" />
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span>Task Accuracy</span>
              <span className="font-bold">{data.taskAccuracy}%</span>
            </div>
            <Progress value={data.taskAccuracy} className="h-2" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default ClientSatisfaction

