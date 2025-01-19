import { useState } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Sample data for agents
const agents = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
  { id: 3, name: "Bob Johnson" },
  { id: 4, name: "Alice Williams" },
  { id: 5, name: "Charlie Brown" },
]

const TeamAgentSelector = ({ selectedAgent, setSelectedAgent }) => {
  const handleChange = (value) => {
    setSelectedAgent(value === "team" ? null : agents.find(agent => agent.id === parseInt(value)))
  }

  return (
    <Select onValueChange={handleChange} defaultValue="team">
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select view" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="team">Full Team</SelectItem>
        {agents.map((agent) => (
          <SelectItem key={agent.id} value={agent.id.toString()}>{agent.name}</SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

export default TeamAgentSelector

