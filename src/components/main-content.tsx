import { Button } from "~/components/ui/button"
import { PlusCircle } from "lucide-react"
import { BlogList } from "~/components/blog-list"
import { AnalyticsOverview } from "~/components/analytics-overview"

export function MainContent() {
  return (
    <div className="flex-1 p-8 overflow-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Dashboard</h2>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" /> Add New Entry
        </Button>
      </div>
      <AnalyticsOverview />
      <BlogList />
    </div>
  )
}

