import { Sidebar } from "~/components/sidebar"
import { MainContent } from "~/components/main-content"
import { Breadcrumbs } from "~/components/breadcrumbs"

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Breadcrumbs items={[{ label: "Dashboard", href: "/dashboard" }]} />
        <MainContent />
      </div>
    </div>
  )
}

