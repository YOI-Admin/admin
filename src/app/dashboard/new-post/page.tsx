import { Sidebar } from "~/components/sidebar"
import { Breadcrumbs } from "~/components/breadcrumbs"
import { NewPostForm } from "~/components/new-post-form"

export default function NewPost() {
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Breadcrumbs
          items={[
            { label: "Dashboard", href: "/dashboard" },
            { label: "New Post", href: "/dashboard/new-post" },
          ]}
        />
        <div className="flex-1 p-8 overflow-auto">
          <h2 className="text-3xl font-bold mb-6">Create New Post</h2>
          <NewPostForm />
        </div>
      </div>
    </div>
  )
}

