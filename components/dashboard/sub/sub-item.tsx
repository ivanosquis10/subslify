import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FireIcon, PencilIcon, TrashIcon } from '@/components/icons/icons'

export const SubItem = () => {
  return (
    <Card
      className="relative block overflow-hidden dark:bg-zinc-950/50 shadow-lg p-2" >

      <CardHeader className="sm:flex sm:flex-row sm:gap-4 p-0 sm:items-center">
        <div className="hidden sm:block border shadow rounded-2xl">
          {/* <img
            alt="Paul Clapton"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
            className="h-16 w-16 rounded-lg object-cover shadow-sm"
          /> */}
          <FireIcon />
        </div>
        <div className="py-0 px-4 lg:px-0">
          <CardTitle className="text-sm sm:text-lg font-medium">
            Iván Rodríguez - Telegram sub
          </CardTitle>

          <Badge className="bg-emerald-600 hover:bg-emerald-700 text-white tracking-widest cursor-default">Online</Badge>
        </div>
      </CardHeader>

      <CardContent className="mt-2 grid sm:grid-cols-3 gap-4 py-2 px-4 rounded-lg bg-zinc-100 dark:bg-zinc-800/50 shadow border-y">
        <div className="flex flex-col">
          <p className="text-sm font-thin tracking-wide dark:text-zinc-400">Start date:</p>
          <span className="text-base font-medium">12/18/2023</span>
        </div>

        <div className="flex flex-col">
          <p className="text-sm font-thin tracking-wide dark:text-zinc-400">End date:</p>
          <span className="text-base font-medium">01/12/2024</span>
        </div>

        <div className="flex items-center justify-between gap-2">
          <Button className="flex items-center space-x-1 w-full">
            <PencilIcon className="w-4 h-4" />
            <span className="sr-only" >Edit</span>
          </Button>
          <Button className="flex items-center space-x-1 w-full">
            <TrashIcon className="w-4 h-4" />
            <span className="sr-only">Delete</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
