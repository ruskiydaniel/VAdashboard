import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

// Sample data for team and individual agents
const teamData = {
  taskCompletionRate: 96,
  responseTime: 14,
  efficiencyScore: 94,
}

const agentData = {
  1: { taskCompletionRate: 98, responseTime: 12, efficiencyScore: 96 },
  2: { taskCompletionRate: 95, responseTime: 15, efficiencyScore: 93 },
  3: { taskCompletionRate: 97, responseTime: 13, efficiencyScore: 95 },
  4: { taskCompletionRate: 94, responseTime: 16, efficiencyScore: 92 },
  5: { taskCompletionRate: 96, responseTime: 14, efficiencyScore: 94 },
}

const PerformanceMetrics = ({ selectedAgent }) => {
  const data = selectedAgent ? agentData[selectedAgent.id] : teamData

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Task Completion Rate</CardTitle>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="h-4 w-4 text-muted-foreground"
          >
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
          </svg>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{data.taskCompletionRate}%</div>
          <Progress value={data.taskCompletionRate} className="mt-2" />
          <p className="text-xs text-muted-foreground mt-2">
            {selectedAgent ? `+${data.taskCompletionRate - teamData.taskCompletionRate}% above team average` : "+2.1% from last month"}
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Response Time</CardTitle>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="h-4 w-4 text-muted-foreground"
          >
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
          </svg>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{data.responseTime} minutes</div>
          <p className="text-xs text-muted-foreground mt-2">
            {selectedAgent ? `${teamData.responseTime - data.responseTime} minutes faster than team average` : "3 minutes faster than SLA target"}
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Efficiency Score</CardTitle>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="h-4 w-4 text-muted-foreground"
          >
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
          </svg>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{data.efficiencyScore}%</div>
          <Progress value={data.efficiencyScore} className="mt-2" />
          <p className="text-xs text-muted-foreground mt-2">
            {selectedAgent ? `+${data.efficiencyScore - teamData.efficiencyScore}% above team average` : "+1.5% above benchmark"}
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

export default PerformanceMetrics

