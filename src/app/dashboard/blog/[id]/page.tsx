import { Sidebar } from "~/components/sidebar";
import { Breadcrumbs } from "~/components/breadcrumbs";
import { BlogPostAnalytics } from "~/components/blog-post-analytics";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div className="flex h-screen bg-background text-foreground">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <Breadcrumbs
          items={[
            { label: "Dashboard", href: "/dashboard" },
            {
              label: "Blog Post Analytics",
              href: `/dashboard/blog/${id}`,
            },
          ]}
        />
        <BlogPostAnalytics id={id} />
      </div>
    </div>
  );
}
