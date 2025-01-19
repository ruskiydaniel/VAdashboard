import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectGroup,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator
} from "@/components/ui/select"

const AdministrativeTools = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Administrative Tools</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <Label htmlFor="task-assignment">Task Assignment</Label>
            <div className="flex space-x-2">
              <Select>
                <option>Select VA</option>
                <option>John Doe</option>
                <option>Jane Smith</option>
              </Select>
              <Input id="task-assignment" placeholder="Enter task description" />
              <Button>Assign</Button>
            </div>
          </div>
          <div>
            <Label htmlFor="priority-setting">Priority Setting</Label>
            <div className="flex space-x-2">
              <Select>
                <option>Select Task</option>
                <option>Content Creation</option>
                <option>Data Entry</option>
              </Select>
              <Select>
                <option>Set Priority</option>
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </Select>
              <Button>Update</Button>
            </div>
          </div>
          <div>
            <Label htmlFor="schedule-management">Schedule Management</Label>
            <div className="flex space-x-2">
              <Select>
                <option>Select VA</option>
                <option>John Doe</option>
                <option>Jane Smith</option>
              </Select>
              <Input id="schedule-management" type="date" />
              <Button>Set Schedule</Button>
            </div>
          </div>
          <div>
            <Label htmlFor="performance-review">Performance Review</Label>
            <div className="flex space-x-2">
              <Select>
                <option>Select VA</option>
                <option>John Doe</option>
                <option>Jane Smith</option>
              </Select>
              <Button>Generate Report</Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default AdministrativeTools

