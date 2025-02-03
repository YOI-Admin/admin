import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import { Textarea } from "~/components/ui/textarea"
import { Label } from "~/components/ui/label"

export function NewPostForm() {
  return (
    <form className="space-y-6">
      <div>
        <Label htmlFor="title">Title</Label>
        <Input id="title" placeholder="Enter post title" />
      </div>
      <div>
        <Label htmlFor="content">Content</Label>
        <Textarea id="content" placeholder="Write your post content here" rows={10} />
      </div>
      <div>
        <Label htmlFor="tags">Tags</Label>
        <Input id="tags" placeholder="Enter tags, separated by commas" />
      </div>
      <Button type="submit">Create Post</Button>
    </form>
  )
}

