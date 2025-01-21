import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

interface Agent {
  id: number;
  name: string;
}

interface AnalyticsData {
  performanceData: Array<{
    month: string;
    performance: number;
  }>;
  taskCompletionData: Array<{
    month: string;
    tasks: number;
  }>;
}

interface AgentDataMap {
  [key: number]: AnalyticsData;
}

interface HistoricalAnalyticsProps {
  selectedAgent: Agent | null;
}

// Sample data for team and individual agents
const teamData: AnalyticsData = {
  performanceData: [
    { month: 'Jan', performance: 92 },
    { month: 'Feb', performance: 94 },
    { month: 'Mar', performance: 95 },
    { month: 'Apr', performance: 95 },
    { month: 'May', performance: 96 },
    { month: 'Jun', performance: 97 },
  ],
  taskCompletionData: [
    { month: 'Jan', tasks: 93 },
    { month: 'Feb', tasks: 95 },
    { month: 'Mar', tasks: 96 },
    { month: 'Apr', tasks: 96 },
    { month: 'May', tasks: 97 },
    { month: 'Jun', tasks: 98 },
  ],
}

const agentData: AgentDataMap = {
  1: {
    performanceData: [
      { month: 'Jan', performance: 93 },
      { month: 'Feb', performance: 95 },
      { month: 'Mar', performance: 96 },
      { month: 'Apr', performance: 96 },
      { month: 'May', performance: 97 },
      { month: 'Jun', performance: 98 },
    ],
    taskCompletionData: [
      { month: 'Jan', tasks: 93 },
      { month: 'Feb', tasks: 95 },
      { month: 'Mar', tasks: 96 },
      { month: 'Apr', tasks: 96 },
      { month: 'May', tasks: 97 },
      { month: 'Jun', tasks: 98 },
    ],
  },
  2: {
    performanceData: [
      { month: 'Jan', performance: 91 },
      { month: 'Feb', performance: 93 },
      { month: 'Mar', performance: 94 },
      { month: 'Apr', performance: 94 },
      { month: 'May', performance: 95 },
      { month: 'Jun', performance: 96 },
    ],
    taskCompletionData: [
      { month: 'Jan', tasks: 91 },
      { month: 'Feb', tasks: 93 },
      { month: 'Mar', tasks: 94 },
      { month: 'Apr', tasks: 94 },
      { month: 'May', tasks: 95 },
      { month: 'Jun', tasks: 96 },
    ],
  },
  3: {
    performanceData: [
      { month: 'Jan', performance: 90 },
      { month: 'Feb', performance: 92 },
      { month: 'Mar', performance: 93 },
      { month: 'Apr', performance: 93 },
      { month: 'May', performance: 94 },
      { month: 'Jun', performance: 95 },
    ],
    taskCompletionData: [
      { month: 'Jan', tasks: 90 },
      { month: 'Feb', tasks: 92 },
      { month: 'Mar', tasks: 93 },
      { month: 'Apr', tasks: 93 },
      { month: 'May', tasks: 94 },
      { month: 'Jun', tasks: 95 },
    ],
  },
  4: {
    performanceData: [
      { month: 'Jan', performance: 89 },
      { month: 'Feb', performance: 91 },
      { month: 'Mar', performance: 92 },
      { month: 'Apr', performance: 92 },
      { month: 'May', performance: 93 },
      { month: 'Jun', performance: 94 },
    ],
    taskCompletionData: [
      { month: 'Jan', tasks: 89 },
      { month: 'Feb', tasks: 91 },
      { month: 'Mar', tasks: 92 },
      { month: 'Apr', tasks: 92 },
      { month: 'May', tasks: 93 },
      { month: 'Jun', tasks: 94 },
    ],
  },
  5: {
    performanceData: [
      { month: 'Jan', performance: 88 },
      { month: 'Feb', performance: 90 },
      { month: 'Mar', performance: 91 },
      { month: 'Apr', performance: 91 },
      { month: 'May', performance: 92 },
      { month: 'Jun', performance: 93 },
    ],
    taskCompletionData: [
      { month: 'Jan', tasks: 88 },
      { month: 'Feb', tasks: 90 },
      { month: 'Mar', tasks: 91 },
      { month: 'Apr', tasks: 91 },
      { month: 'May', tasks: 92 },
      { month: 'Jun', tasks: 93 },
    ],
  },
}

const HistoricalAnalytics = ({ selectedAgent }: HistoricalAnalyticsProps) => {
  const data = selectedAgent ? agentData[selectedAgent.id] : teamData

  return (
    <Card>
      <CardHeader>
        <CardTitle>Historical Analytics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-medium mb-2">Performance Trends</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data.performanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="performance" stroke="#8884d8" name="Performance Score" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Task Completion History</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data.taskCompletionData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="tasks" stroke="#82ca9d" name="Tasks Completed" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default HistoricalAnalytics

