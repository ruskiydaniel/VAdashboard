import { useState } from "react"
import TaskAssignment from "./TaskAssignment"
import TaskList from "./TaskList"
import TaskDetails from "./TaskDetails"

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

const TaskManagement = () => {
  const [tasks, setTasks] = useState<Task[]>([])
  const [selectedTask, setSelectedTask] = useState<Task | null>(null)

  const handleAssignTask = (newTask: Omit<Task, 'id' | 'status' | 'createdAt'>) => {
    const task: Task = {
      ...newTask,
      id: Date.now(),
      status: "Not Started",
      createdAt: new Date().toISOString()
    }
    setTasks([...tasks, task])
  }

  const handleSelectTask = (task: Task) => {
    setSelectedTask(task)
  }

  const handleUpdateTask = (updatedTask: Task) => {
    const updatedTasks = tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    setTasks(updatedTasks)
    setSelectedTask(updatedTask)
  }

  return (
    <div className="space-y-6">
      <TaskAssignment onAssignTask={handleAssignTask} />
      <TaskList tasks={tasks} onSelectTask={handleSelectTask} />
      {selectedTask && (
        <div className="md:hidden">
          <TaskDetails task={selectedTask} onUpdateTask={handleUpdateTask} />
        </div>
      )}
      {selectedTask && (
        <div className="hidden md:block">
          <TaskDetails task={selectedTask} onUpdateTask={handleUpdateTask} />
        </div>
      )}
    </div>
  )
}

export default TaskManagement

