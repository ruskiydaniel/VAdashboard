import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

interface Agent {
  id: number;
  name: string;
}

interface ChartData {
  name: string;
  value: number;
}

interface AgentData {
  timeData: ChartData[];
  taskData: ChartData[];
}

interface AgentDataMap {
  [key: number]: AgentData;
}

interface TimeTaskManagementProps {
  selectedAgent: Agent | null;
}

// Sample data for team and individual agents
const teamData: AgentData = {
  timeData: [
    { name: 'Billable', value: 32 },
    { name: 'Non-billable', value: 8 },
  ],
  taskData: [
    { name: 'Email Management', value: 30 },
    { name: 'Research Tasks', value: 25 },
    { name: 'Content Creation', value: 20 },
    { name: 'Admin Work', value: 15 },
    { name: 'Meetings', value: 10 },
  ],
}

const agentData: AgentDataMap = {
  1: {
    timeData: [
      { name: 'Billable', value: 35 },
      { name: 'Non-billable', value: 5 },
    ],
    taskData: [
      { name: 'Email Management', value: 35 },
      { name: 'Research Tasks', value: 20 },
      { name: 'Content Creation', value: 25 },
      { name: 'Admin Work', value: 10 },
      { name: 'Meetings', value: 10 },
    ],
  },
  2: {
    timeData: [
      { name: 'Billable', value: 33 },
      { name: 'Non-billable', value: 7 },
    ],
    taskData: [
      { name: 'Email Management', value: 28 },
      { name: 'Research Tasks', value: 30 },
      { name: 'Content Creation', value: 22 },
      { name: 'Admin Work', value: 12 },
      { name: 'Meetings', value: 8 },
    ],
  },
  3: {
    timeData: [
      { name: 'Billable', value: 34 },
      { name: 'Non-billable', value: 6 },
    ],
    taskData: [
      { name: 'Email Management', value: 32 },
      { name: 'Research Tasks', value: 23 },
      { name: 'Content Creation', value: 18 },
      { name: 'Admin Work', value: 17 },
      { name: 'Meetings', value: 10 },
    ],
  },
  4: {
    timeData: [
      { name: 'Billable', value: 31 },
      { name: 'Non-billable', value: 9 },
    ],
    taskData: [
      { name: 'Email Management', value: 27 },
      { name: 'Research Tasks', value: 28 },
      { name: 'Content Creation', value: 20 },
      { name: 'Admin Work', value: 15 },
      { name: 'Meetings', value: 10 },
    ],
  },
  5: {
    timeData: [
      { name: 'Billable', value: 36 },
      { name: 'Non-billable', value: 4 },
    ],
    taskData: [
      { name: 'Email Management', value: 33 },
      { name: 'Research Tasks', value: 24 },
      { name: 'Content Creation', value: 21 },
      { name: 'Admin Work', value: 14 },
      { name: 'Meetings', value: 8 },
    ],
  },
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8']

const TimeTaskManagement = ({ selectedAgent }: TimeTaskManagementProps) => {
  const data = selectedAgent ? agentData[selectedAgent.id] : teamData

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Time Distribution</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-center">
          <ResponsiveContainer width={200} height={200}>
            <PieChart>
              <Pie
                data={data.timeData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {data.timeData.map((entry: ChartData, index: number) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Task Distribution</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-center">
          <ResponsiveContainer width={200} height={200}>
            <PieChart>
              <Pie
                data={data.taskData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {data.taskData.map((entry: ChartData, index: number) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}

export default TimeTaskManagement

