import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface Task {
  id: number;
  title: string;
  description: string;
  assignedVA: string;
  priority: string;
  deadline: string;
  status: string;
  createdAt: string;
}

interface TaskDetailsProps {
  task: Task;
  onUpdateTask: (task: Task) => void;
}

const TaskDetails = ({ task, onUpdateTask }: TaskDetailsProps) => {
  const [status, setStatus] = useState(task.status)

  const handleStatusChange = (newStatus: string) => {
    setStatus(newStatus)
    onUpdateTask({ ...task, status: newStatus })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Task Details</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label className="font-bold">Title:</Label>
          <p>{task.title}</p>
        </div>
        <div>
          <Label className="font-bold">Description:</Label>
          <p>{task.description}</p>
        </div>
        <div>
          <Label className="font-bold">Assigned To:</Label>
          <p>{task.assignedVA}</p>
        </div>
        <div>
          <Label className="font-bold">Priority:</Label>
          <p className="capitalize">{task.priority}</p>
        </div>
        <div>
          <Label className="font-bold">Deadline:</Label>
          <p>{new Date(task.deadline).toLocaleDateString()}</p>
        </div>
        <div>
          <Label htmlFor="status" className="font-bold">
            Status:
          </Label>
          <Select value={status} onValueChange={handleStatusChange}>
            <SelectTrigger id="status">
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Not Started">Not Started</SelectItem>
              <SelectItem value="In Progress">In Progress</SelectItem>
              <SelectItem value="Completed">Completed</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label className="font-bold">Created At:</Label>
          <p>{new Date(task.createdAt).toLocaleString()}</p>
        </div>
      </CardContent>
    </Card>
  )
}

export default TaskDetails

