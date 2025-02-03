"use client"

import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card"
import { BarChart, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Bar, Line } from "recharts"

const mockBlogData = {
  1: { id: 1, title: "10 Tips for Better Productivity", views: 1500, comments: 25, likes: 150 },
  2: { id: 2, title: "The Future of AI in Web Development", views: 2000, comments: 40, likes: 200 },
  3: { id: 3, title: "How to Start a Successful Blog", views: 1800, comments: 35, likes: 180 },
  4: { id: 4, title: "Best Practices for React Development", views: 2200, comments: 50, likes: 220 },
}

const mockTimeSeriesData = [
  { date: "2023-01-01", views: 100, comments: 5, likes: 20 },
  { date: "2023-01-02", views: 150, comments: 8, likes: 30 },
  { date: "2023-01-03", views: 120, comments: 6, likes: 25 },
  { date: "2023-01-04", views: 200, comments: 10, likes: 40 },
  { date: "2023-01-05", views: 180, comments: 9, likes: 35 },
]

export function BlogPostAnalytics({ id }: { id: string }) {
  const blogPost = mockBlogData[id as keyof typeof mockBlogData]

  if (!blogPost) {
    return <div>Blog post not found</div>
  }

  return (
    <div className="flex-1 p-8 overflow-auto">
      <h2 className="text-3xl font-bold mb-6">{blogPost.title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Card>
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent className="h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={[
                  { name: "Views", value: blogPost.views },
                  { name: "Comments", value: blogPost.comments },
                  { name: "Likes", value: blogPost.likes },
                ]}
              >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Time Series</CardTitle>
          </CardHeader>
          <CardContent className="h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={mockTimeSeriesData}>
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="views" stroke="#8884d8" />
                <Line type="monotone" dataKey="comments" stroke="#82ca9d" />
                <Line type="monotone" dataKey="likes" stroke="#ffc658" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

