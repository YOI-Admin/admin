import { Sidebar } from "~/components/sidebar"
import { Breadcrumbs } from "~/components/breadcrumbs"
import { SettingsForm } from "~/components/settings-form"

export default function Settings() {
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Breadcrumbs
          items={[
            { label: "Dashboard", href: "/" },
            { label: "Settings", href: "/settings" },
          ]}
        />
        <div className="flex-1 p-8 overflow-auto">
          <h2 className="text-3xl font-bold mb-6">Settings</h2>
          <SettingsForm />
        </div>
      </div>
    </div>
  )
}

