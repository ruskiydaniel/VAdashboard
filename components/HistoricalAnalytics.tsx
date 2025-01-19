import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

interface PerformanceData {
  month: string
  taskCompletion: number
  clientSatisfaction: number
  revenue: number
}

interface Agent {
  id: number
}

interface HistoricalAnalyticsProps {
  selectedAgent: Agent | null
}

// Sample data for team and individual agents
const teamData: PerformanceData[] = [
  { month: 'Jan', taskCompletion: 92, clientSatisfaction: 95, revenue: 3200 },
  { month: 'Feb', taskCompletion: 94, clientSatisfaction: 96, revenue: 3400 },
  { month: 'Mar', taskCompletion: 95, clientSatisfaction: 97, revenue: 3600 },
  { month: 'Apr', taskCompletion: 95, clientSatisfaction: 98, revenue: 3500 },
  { month: 'May', taskCompletion: 96, clientSatisfaction: 98, revenue: 3800 },
  { month: 'Jun', taskCompletion: 97, clientSatisfaction: 98, revenue: 4000 },
]

const agentData: Record<number, PerformanceData[]> = {
  1: [
    { month: 'Jan', taskCompletion: 93, clientSatisfaction: 96, revenue: 800 },
    { month: 'Feb', taskCompletion: 95, clientSatisfaction: 97, revenue: 850 },
    { month: 'Mar', taskCompletion: 96, clientSatisfaction: 98, revenue: 900 },
    { month: 'Apr', taskCompletion: 96, clientSatisfaction: 99, revenue: 875 },
    { month: 'May', taskCompletion: 97, clientSatisfaction: 99, revenue: 950 },
    { month: 'Jun', taskCompletion: 98, clientSatisfaction: 99, revenue: 1000 },
  ],
  2: [
    { month: 'Jan', taskCompletion: 91, clientSatisfaction: 94, revenue: 750 },
    { month: 'Feb', taskCompletion: 93, clientSatisfaction: 95, revenue: 800 },
    { month: 'Mar', taskCompletion: 94, clientSatisfaction: 96, revenue: 850 },
    { month: 'Apr', taskCompletion: 94, clientSatisfaction: 97, revenue: 825 },
    { month: 'May', taskCompletion: 95, clientSatisfaction: 97, revenue: 900 },
    { month: 'Jun', taskCompletion: 96, clientSatisfaction: 98, revenue: 950 },
  ],
  3: [
    { month: 'Jan', taskCompletion: 90, clientSatisfaction: 93, revenue: 700 },
    { month: 'Feb', taskCompletion: 92, clientSatisfaction: 94, revenue: 750 },
    { month: 'Mar', taskCompletion: 93, clientSatisfaction: 95, revenue: 800 },
    { month: 'Apr', taskCompletion: 93, clientSatisfaction: 96, revenue: 775 },
    { month: 'May', taskCompletion: 94, clientSatisfaction: 96, revenue: 850 },
    { month: 'Jun', taskCompletion: 95, clientSatisfaction: 97, revenue: 900 },
  ],
  4: [
    { month: 'Jan', taskCompletion: 89, clientSatisfaction: 92, revenue: 650 },
    { month: 'Feb', taskCompletion: 91, clientSatisfaction: 93, revenue: 700 },
    { month: 'Mar', taskCompletion: 92, clientSatisfaction: 94, revenue: 750 },
    { month: 'Apr', taskCompletion: 92, clientSatisfaction: 95, revenue: 725 },
    { month: 'May', taskCompletion: 93, clientSatisfaction: 95, revenue: 800 },
    { month: 'Jun', taskCompletion: 94, clientSatisfaction: 96, revenue: 850 },
  ],
  5: [
    { month: 'Jan', taskCompletion: 88, clientSatisfaction: 91, revenue: 600 },
    { month: 'Feb', taskCompletion: 90, clientSatisfaction: 92, revenue: 650 },
    { month: 'Mar', taskCompletion: 91, clientSatisfaction: 93, revenue: 700 },
    { month: 'Apr', taskCompletion: 91, clientSatisfaction: 94, revenue: 675 },
    { month: 'May', taskCompletion: 92, clientSatisfaction: 94, revenue: 750 },
    { month: 'Jun', taskCompletion: 93, clientSatisfaction: 95, revenue: 800 },
  ],
}

const HistoricalAnalytics = ({ selectedAgent }: HistoricalAnalyticsProps) => {
  const data = selectedAgent ? agentData[selectedAgent.id] : teamData

  return (
    <Card>
      <CardHeader>
        <CardTitle>6-Month Performance Trends</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Legend />
              <Line yAxisId="left" type="monotone" dataKey="taskCompletion" stroke="#8884d8" name="Task Completion %" />
              <Line yAxisId="left" type="monotone" dataKey="clientSatisfaction" stroke="#82ca9d" name="Client Satisfaction %" />
              <Line yAxisId="right" type="monotone" dataKey="revenue" stroke="#ffc658" name="Revenue ($)" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

export default HistoricalAnalytics

