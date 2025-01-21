import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface Agent {
  id: number;
  name: string;
}

// Sample data for agents
const agents: Agent[] = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
  { id: 3, name: "Bob Johnson" },
  { id: 4, name: "Alice Williams" },
  { id: 5, name: "Charlie Brown" },
]

interface TeamAgentSelectorProps {
  selectedAgent: Agent | null;
  setSelectedAgent: (agent: Agent | null) => void;
}

const TeamAgentSelector = ({ selectedAgent, setSelectedAgent }: TeamAgentSelectorProps) => {
  const handleChange = (value: string) => {
    setSelectedAgent(value === "team" ? null : agents.find((agent) => agent.id === Number.parseInt(value)) || null)
  }

  return (
    <Select onValueChange={handleChange} defaultValue="team" value={selectedAgent?.id.toString() || "team"}>
      <SelectTrigger className="w-[140px] sm:w-[180px] bg-white bg-opacity-70 backdrop-filter backdrop-blur-lg border border-gray-200 rounded-md shadow-sm">
        <SelectValue placeholder="Select view" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="team">Full Team</SelectItem>
        {agents.map((agent) => (
          <SelectItem key={agent.id} value={agent.id.toString()}>
            {agent.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

export default TeamAgentSelector

