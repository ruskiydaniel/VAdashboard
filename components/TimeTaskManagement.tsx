import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts"

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

// Sample data for team and individual agents
const teamData: AgentData = {
  timeData: [
    { name: "Billable", value: 32 },
    { name: "Non-billable", value: 8 },
  ],
  taskData: [
    { name: "Email Management", value: 30 },
    { name: "Research Tasks", value: 25 },
    { name: "Content Creation", value: 20 },
    { name: "Admin Work", value: 15 },
    { name: "Meetings", value: 10 },
  ],
}

const agentData: AgentDataMap = {
  1: {
    timeData: [
      { name: "Billable", value: 35 },
      { name: "Non-billable", value: 5 },
    ],
    taskData: [
      { name: "Email Management", value: 35 },
      { name: "Research Tasks", value: 20 },
      { name: "Content Creation", value: 25 },
      { name: "Admin Work", value: 10 },
      { name: "Meetings", value: 10 },
    ],
  },
  2: {
    timeData: [
      { name: "Billable", value: 33 },
      { name: "Non-billable", value: 7 },
    ],
    taskData: [
      { name: "Email Management", value: 28 },
      { name: "Research Tasks", value: 30 },
      { name: "Content Creation", value: 22 },
      { name: "Admin Work", value: 12 },
      { name: "Meetings", value: 8 },
    ],
  },
  3: {
    timeData: [
      { name: "Billable", value: 34 },
      { name: "Non-billable", value: 6 },
    ],
    taskData: [
      { name: "Email Management", value: 32 },
      { name: "Research Tasks", value: 23 },
      { name: "Content Creation", value: 18 },
      { name: "Admin Work", value: 17 },
      { name: "Meetings", value: 10 },
    ],
  },
  4: {
    timeData: [
      { name: "Billable", value: 31 },
      { name: "Non-billable", value: 9 },
    ],
    taskData: [
      { name: "Email Management", value: 27 },
      { name: "Research Tasks", value: 28 },
      { name: "Content Creation", value: 20 },
      { name: "Admin Work", value: 15 },
      { name: "Meetings", value: 10 },
    ],
  },
  5: {
    timeData: [
      { name: "Billable", value: 36 },
      { name: "Non-billable", value: 4 },
    ],
    taskData: [
      { name: "Email Management", value: 33 },
      { name: "Research Tasks", value: 24 },
      { name: "Content Creation", value: 21 },
      { name: "Admin Work", value: 14 },
      { name: "Meetings", value: 8 },
    ],
  },
}

const COLORS = ["#3B82F6", "#10B981", "#F59E0B", "#EF4444", "#8B5CF6"]

interface TooltipProps {
  active?: boolean;
  payload?: Array<{
    name: string;
    value: number;
  }>;
}

const CustomTooltip = ({ active, payload }: TooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border rounded shadow-lg">
        <p className="font-semibold text-gray-800">{payload[0].name}</p>
        <p className="text-gray-600">{`Value: ${payload[0].value}`}</p>
      </div>
    )
  }
  return null
}

interface TimeTaskManagementProps {
  selectedAgent: Agent | null;
}

const TimeTaskManagement = ({ selectedAgent }: TimeTaskManagementProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const data = selectedAgent ? agentData[selectedAgent.id] : teamData;

  const onPieEnter = (_: unknown, index: number) => {
    setActiveIndex(index);
  };

  const onPieLeave = () => {
    setActiveIndex(null);
  };

  const renderTimeData = (entry: ChartData, index: number) => {
    const isActive = index === activeIndex;
    return (
      <Cell
        key={`cell-${index}`}
        fill={COLORS[index % COLORS.length]}
        style={{
          filter: isActive ? "brightness(110%) saturate(120%)" : "none",
          cursor: "pointer",
        }}
      />
    );
  };

  const renderTaskData = (entry: ChartData, index: number) => {
    const isActive = index === activeIndex;
    return (
      <Cell
        key={`cell-${index}`}
        fill={COLORS[index % COLORS.length]}
        style={{
          filter: isActive ? "brightness(110%) saturate(120%)" : "none",
          cursor: "pointer",
        }}
      />
    );
  };

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card className="bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg border-none shadow-lg">
        <CardHeader>
          <CardTitle>Time Tracking</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data.timeData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                  onMouseEnter={onPieEnter}
                  onMouseLeave={onPieLeave}
                  onClick={(_, index) => setActiveIndex(index)}
                >
                  {data.timeData.map((entry, index) => 
                    renderTimeData(entry, index)
                  )}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex flex-wrap justify-center mt-4 text-sm text-gray-600">
            {data.timeData.map((entry, index) => (
              <div key={entry.name} className="flex items-center mr-4 mb-2">
                <div
                  className="w-3 h-3 rounded-full mr-2"
                  style={{ backgroundColor: COLORS[index % COLORS.length] }}
                ></div>
                <span className="text-sm">{entry.name}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      <Card className="bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg border-none shadow-lg">
        <CardHeader>
          <CardTitle>Task Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data.taskData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  onMouseEnter={onPieEnter}
                  onMouseLeave={onPieLeave}
                  onClick={(_, index) => setActiveIndex(index)}
                >
                  {data.taskData.map((entry, index) => 
                    renderTaskData(entry, index)
                  )}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex flex-wrap justify-center mt-4 text-sm text-gray-600">
            {data.taskData.map((entry, index) => (
              <div key={entry.name} className="flex items-center mr-4 mb-2">
                <div
                  className="w-3 h-3 rounded-full mr-2"
                  style={{ backgroundColor: COLORS[index % COLORS.length] }}
                ></div>
                <span className="text-sm">{entry.name}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default TimeTaskManagement

