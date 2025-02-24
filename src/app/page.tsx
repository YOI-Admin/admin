import { Sidebar } from "~/components/sidebar"
import { MainContent } from "~/components/main-content"
import { Breadcrumbs } from "~/components/breadcrumbs"

export default function Dashboard() {
  return (
    <div className="flex h-screen w-screen bg-gray-800 text-white justify-center items-center">
      <AuthView />
    </div>
  )
}

