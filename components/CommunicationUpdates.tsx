import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Sample data for team and individual agents
const teamUpdates = [
  { type: 'Task Completion', message: 'Content creation task completed', time: '5 minutes ago' },
  { type: 'Deadline Alert', message: 'Research task due in 2 hours', time: '30 minutes ago' },
  { type: 'Client Message', message: 'New message from Client A', time: '1 hour ago' },
  { type: 'Performance Update', message: 'Task completion rate increased by 2%', time: '2 hours ago' },
]

const agentUpdates = {
  1: [
    { type: 'Task Completion', message: 'Email management task completed', time: '10 minutes ago' },
    { type: 'Client Message', message: 'New message from Client B', time: '45 minutes ago' },
    { type: 'Performance Update', message: 'Response time improved by 5%', time: '1.5 hours ago' },
  ],
  2: [
    { type: 'Deadline Alert', message: 'Content writing task due in 1 hour', time: '20 minutes ago' },
    { type: 'Task Completion', message: 'Research task completed', time: '1 hour ago' },
    { type: 'Performance Update', message: 'Task accuracy increased by 3%', time: '2 hours ago' },
  ],
  3: [
    { type: 'Client Message', message: 'Feedback received from Client C', time: '30 minutes ago' },
    { type: 'Task Completion', message: 'Data entry task completed', time: '1.5 hours ago' },
    { type: 'Performance Update', message: 'Client satisfaction score improved', time: '3 hours ago' },
  ],
  4: [
    { type: 'Deadline Alert', message: 'Project report due in 3 hours', time: '15 minutes ago' },
    { type: 'Task Completion', message: 'Customer support shift completed', time: '1 hour ago' },
    { type: 'Performance Update', message: 'Average response time decreased', time: '2.5 hours ago' },
  ],
  5: [
    { type: 'Task Completion', message: 'Social media scheduling completed', time: '25 minutes ago' },
    { type: 'Client Message', message: 'New task assigned by Client D', time: '1 hour ago' },
    { type: 'Performance Update', message: 'Task completion rate at 98% this week', time: '2 hours ago' },
  ],
}

const CommunicationUpdates = ({ selectedAgent }) => {
  const updates = selectedAgent ? agentUpdates[selectedAgent.id] : teamUpdates

  return (
    <Card>
      <CardHeader>
        <CardTitle>Communication & Updates</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {updates.map((update, index) => (
            <div key={index} className="flex items-start space-x-4">
              <Badge variant="outline">{update.type}</Badge>
              <div>
                <p className="text-sm font-medium">{update.message}</p>
                <p className="text-xs text-muted-foreground">{update.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default CommunicationUpdates

