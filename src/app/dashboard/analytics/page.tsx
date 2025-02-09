import { Sidebar } from "~/components/sidebar"
import { Breadcrumbs } from "~/components/breadcrumbs"
import { AnalyticsOverview } from "~/components/analytics-overview"

export default function Analytics() {
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Breadcrumbs
          items={[
            { label: "Dashboard", href: "/dashboard" },
            { label: "Analytics", href: "/dashboard/analytics" },
          ]}
        />
        <div className="flex-1 p-8 overflow-auto">
          <h2 className="text-3xl font-bold mb-6">Analytics</h2>
          <AnalyticsOverview />
        </div>
      </div>
    </div>
  )
}

