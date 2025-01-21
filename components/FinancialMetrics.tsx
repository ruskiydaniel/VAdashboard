import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

interface Agent {
  id: number;
  name: string;
}

interface FinancialData {
  revenueData: Array<{ month: string; revenue: number }>;
  monthlySavings: number;
  roi: number;
  costPerTask: number;
  efficiencyGains: number;
}

interface AgentDataMap {
  [key: number]: FinancialData;
}

interface FinancialMetricsProps {
  selectedAgent: Agent | null;
}

// Sample data for team and individual agents
const teamData: FinancialData = {
  revenueData: [
    { month: 'Jan', revenue: 3200 },
    { month: 'Feb', revenue: 3400 },
    { month: 'Mar', revenue: 3600 },
    { month: 'Apr', revenue: 3500 },
    { month: 'May', revenue: 3800 },
  ],
  monthlySavings: 2200,
  roi: 158,
  costPerTask: 12.5,
  efficiencyGains: 1800,
}

const agentData: AgentDataMap = {
  1: {
    revenueData: [
      { month: 'Jan', revenue: 800 },
      { month: 'Feb', revenue: 850 },
      { month: 'Mar', revenue: 900 },
      { month: 'Apr', revenue: 875 },
      { month: 'May', revenue: 950 },
    ],
    monthlySavings: 550,
    roi: 162,
    costPerTask: 12,
    efficiencyGains: 450,
  },
  2: {
    revenueData: [
      { month: 'Jan', revenue: 750 },
      { month: 'Feb', revenue: 800 },
      { month: 'Mar', revenue: 850 },
      { month: 'Apr', revenue: 825 },
      { month: 'May', revenue: 900 },
    ],
    monthlySavings: 500,
    roi: 155,
    costPerTask: 12.5,
    efficiencyGains: 400,
  },
  3: {
    revenueData: [
      { month: 'Jan', revenue: 700 },
      { month: 'Feb', revenue: 750 },
      { month: 'Mar', revenue: 800 },
      { month: 'Apr', revenue: 775 },
      { month: 'May', revenue: 850 },
    ],
    monthlySavings: 450,
    roi: 150,
    costPerTask: 13,
    efficiencyGains: 350,
  },
  4: {
    revenueData: [
      { month: 'Jan', revenue: 650 },
      { month: 'Feb', revenue: 700 },
      { month: 'Mar', revenue: 750 },
      { month: 'Apr', revenue: 725 },
      { month: 'May', revenue: 800 },
    ],
    monthlySavings: 400,
    roi: 145,
    costPerTask: 13.5,
    efficiencyGains: 300,
  },
  5: {
    revenueData: [
      { month: 'Jan', revenue: 600 },
      { month: 'Feb', revenue: 650 },
      { month: 'Mar', revenue: 700 },
      { month: 'Apr', revenue: 675 },
      { month: 'May', revenue: 750 },
    ],
    monthlySavings: 350,
    roi: 140,
    costPerTask: 14,
    efficiencyGains: 250,
  },
}

const FinancialMetrics = ({ selectedAgent }: FinancialMetricsProps) => {
  const data = selectedAgent ? agentData[selectedAgent.id] : teamData

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Revenue Generated</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">${data.revenueData[data.revenueData.length - 1].revenue}</div>
          <p className="text-xs text-muted-foreground">Monthly revenue</p>
          <div className="h-[200px] mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data.revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            {selectedAgent ? `${((data.revenueData[data.revenueData.length - 1].revenue / data.revenueData[0].revenue - 1) * 100).toFixed(1)}% growth over 5 months` : "12% growth month-over-month"}
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Cost Savings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">${data.monthlySavings}</div>
          <p className="text-xs text-muted-foreground">Monthly savings</p>
          <div className="mt-4">
            <div className="flex justify-between mb-2">
              <span>ROI</span>
              <span className="font-bold">{data.roi}%</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Cost per task</span>
              <span className="font-bold">${data.costPerTask.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Efficiency gains</span>
              <span className="font-bold">${data.efficiencyGains}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default FinancialMetrics

