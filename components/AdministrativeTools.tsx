import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"

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
                <SelectTrigger>
                  <SelectValue placeholder="Select VA" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="john">John Doe</SelectItem>
                  <SelectItem value="jane">Jane Smith</SelectItem>
                </SelectContent>
              </Select>
              <Input id="task-assignment" placeholder="Enter task description" />
              <Button>Assign</Button>
            </div>
          </div>
          <div>
            <Label htmlFor="priority-setting">Priority Setting</Label>
            <div className="flex space-x-2">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select Task" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="content">Content Creation</SelectItem>
                  <SelectItem value="data">Data Entry</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Set Priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="low">Low</SelectItem>
                </SelectContent>
              </Select>
              <Button>Update</Button>
            </div>
          </div>
          <div>
            <Label htmlFor="schedule-management">Schedule Management</Label>
            <div className="flex space-x-2">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select VA" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="john">John Doe</SelectItem>
                  <SelectItem value="jane">Jane Smith</SelectItem>
                </SelectContent>
              </Select>
              <Input id="schedule-management" type="date" />
              <Button>Set Schedule</Button>
            </div>
          </div>
          <div>
            <Label htmlFor="performance-review">Performance Review</Label>
            <div className="flex space-x-2">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select VA" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="john">John Doe</SelectItem>
                  <SelectItem value="jane">Jane Smith</SelectItem>
                </SelectContent>
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

