import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { EyeIcon, PencilIcon, TrashIcon } from '@/components/icons/icons'

export const OrganizationItem = () => {
  return (
    <Card className="bg-muted dark:bg-zinc-950/30 ring-2 ring-transparent transition-all duration-300 hover:ring-emerald-500 shadow-lg">
      <CardHeader className="">
        <CardTitle className="text-xl">Organization Name</CardTitle>
        <CardDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea veritatis necessitatibus facilis incidunt iure. Sequi labore, voluptatibus officiis vel.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col sm:flex-row gap-2 mt-2 text-base">
        <Button>
          <EyeIcon className="h-5 w-5 mr-1" />
          View
        </Button>
        <Button>
          <PencilIcon className="h-5 w-5 mr-1" />
          Edit
        </Button>
        <Button>
          <TrashIcon className="h-5 w-5 mr-1" />
          Delete
        </Button>
      </CardContent>
    </Card>
  )
}