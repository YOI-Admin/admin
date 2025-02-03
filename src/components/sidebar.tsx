import Link from "next/link"
import { BarChart, FileText, Home, PlusCircle, Settings } from "lucide-react"

export function Sidebar() {
  return (
    <div className="w-64 bg-gray-800 h-full shadow-md">
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4 text-white">Blog Admin</h1>
        <nav>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="flex items-center p-2 text-gray-300 hover:bg-gray-700 rounded">
                <Home className="mr-2" size={20} />
                Dashboard
              </Link>
            </li>
            <li>
              <Link href="/blog-posts" className="flex items-center p-2 text-gray-300 hover:bg-gray-700 rounded">
                <FileText className="mr-2" size={20} />
                Blog Posts
              </Link>
            </li>
            <li>
              <Link href="/analytics" className="flex items-center p-2 text-gray-300 hover:bg-gray-700 rounded">
                <BarChart className="mr-2" size={20} />
                Analytics
              </Link>
            </li>
            <li>
              <Link href="/new-post" className="flex items-center p-2 text-gray-300 hover:bg-gray-700 rounded">
                <PlusCircle className="mr-2" size={20} />
                New Post
              </Link>
            </li>
            <li>
              <Link href="/settings" className="flex items-center p-2 text-gray-300 hover:bg-gray-700 rounded">
                <Settings className="mr-2" size={20} />
                Settings
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

