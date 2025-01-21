import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface TaskAssignmentProps {
  onAssignTask: (task: {
    title: string;
    description: string;
    assignedVA: string;
    priority: string;
    deadline: string;
  }) => void;
}

const TaskAssignment = ({ onAssignTask }: TaskAssignmentProps) => {
  const [taskTitle, setTaskTitle] = useState("")
  const [taskDescription, setTaskDescription] = useState("")
  const [assignedVA, setAssignedVA] = useState("")
  const [priority, setPriority] = useState("medium")
  const [deadline, setDeadline] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onAssignTask({
      title: taskTitle,
      description: taskDescription,
      assignedVA,
      priority,
      deadline
    })
    setTaskTitle("")
    setTaskDescription("")
    setAssignedVA("")
    setPriority("medium")
    setDeadline("")
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Assign New Task</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="taskTitle">Task Title</Label>
            <Input id="taskTitle" value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)} required />
          </div>
          <div>
            <Label htmlFor="taskDescription">Task Description</Label>
            <Textarea
              id="taskDescription"
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="assignedVA">Assign to VA</Label>
            <Select value={assignedVA} onValueChange={setAssignedVA} required>
              <SelectTrigger id="assignedVA">
                <SelectValue placeholder="Select VA" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">John Doe</SelectItem>
                <SelectItem value="2">Jane Smith</SelectItem>
                <SelectItem value="3">Bob Johnson</SelectItem>
                <SelectItem value="4">Alice Williams</SelectItem>
                <SelectItem value="5">Charlie Brown</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="priority">Priority</Label>
            <Select value={priority} onValueChange={setPriority} required>
              <SelectTrigger id="priority">
                <SelectValue placeholder="Select priority" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="low">Low</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="high">High</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="deadline">Deadline</Label>
            <Input id="deadline" type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} required />
          </div>
          <Button type="submit">Assign Task</Button>
        </form>
      </CardContent>
    </Card>
  )
}

export default TaskAssignment

