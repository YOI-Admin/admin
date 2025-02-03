"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { Eye, MessageCircle, Heart } from "lucide-react";

const mockBlogData = [
  {
    id: 1,
    title: "10 Tips for Better Productivity",
    views: 1500,
    comments: 25,
    likes: 150,
  },
  {
    id: 2,
    title: "The Future of AI in Web Development",
    views: 2000,
    comments: 40,
    likes: 200,
  },
  {
    id: 3,
    title: "How to Start a Successful Blog",
    views: 1800,
    comments: 35,
    likes: 180,
  },
  {
    id: 4,
    title: "Best Practices for React Development",
    views: 2200,
    comments: 50,
    likes: 220,
  },
];

export function BlogList() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Blog Posts</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Statistics</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockBlogData.map((blog) => (
              <TableRow key={blog.id}>
                <TableCell>
                  <Link
                    href={`/blog/${blog.id}`}
                    className="text-blue-400 hover:underline"
                  >
                    {blog.title}
                  </Link>
                </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-4 w-12">
                    <div className="flex items-center space-x-1">
                      <Eye className="h-4 w-4" />
                      <span className="w-12">{blog.views}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageCircle className="h-4 w-4" />
                      <span className="w-8">{blog.comments}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Heart className="h-4 w-4" />
                      <span className="w-12">{blog.likes}</span>
                    </div>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
