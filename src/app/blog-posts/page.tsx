import { Sidebar } from "~/components/sidebar"
import { Breadcrumbs } from "~/components/breadcrumbs"
import { BlogList } from "~/components/blog-list"

export default function BlogPosts() {
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Breadcrumbs
          items={[
            { label: "Dashboard", href: "/" },
            { label: "Blog Posts", href: "/blog-posts" },
          ]}
        />
        <div className="flex-1 p-8 overflow-auto">
          <h2 className="text-3xl font-bold mb-6">Blog Posts</h2>
          <BlogList />
        </div>
      </div>
    </div>
  )
}

