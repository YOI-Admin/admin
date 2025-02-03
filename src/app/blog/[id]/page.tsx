import { Sidebar } from "~/components/sidebar"
import { Breadcrumbs } from "~/components/breadcrumbs"
import { BlogPostAnalytics } from "~/components/blog-post-analytics"

export default function BlogPostPage({ params }: { params: { id: string } }) {
  return (
    <div className="flex h-screen bg-background text-foreground">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Breadcrumbs
          items={[
            { label: "Dashboard", href: "/" },
            { label: "Blog Post Analytics", href: `/blog/${params.id}` },
          ]}
        />
        <BlogPostAnalytics id={params.id} />
      </div>
    </div>
  )
}

