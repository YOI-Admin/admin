import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import { Label } from "~/components/ui/label"
import { Switch } from "~/components/ui/switch"

export function SettingsForm() {
  return (
    <form className="space-y-6">
      <div>
        <Label htmlFor="site-name">Site Name</Label>
        <Input id="site-name" placeholder="Enter site name" defaultValue="My Awesome Blog" />
      </div>
      <div>
        <Label htmlFor="admin-email">Admin Email</Label>
        <Input id="admin-email" type="email" placeholder="Enter admin email" defaultValue="admin@example.com" />
      </div>
      <div className="flex items-center space-x-2">
        <Switch id="dark-mode" defaultChecked />
        <Label htmlFor="dark-mode">Dark Mode</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Switch id="notifications" />
        <Label htmlFor="notifications">Email Notifications</Label>
      </div>
      <Button type="submit">Save Settings</Button>
    </form>
  )
}

