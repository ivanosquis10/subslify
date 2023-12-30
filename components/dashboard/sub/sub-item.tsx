import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { SubActions } from './sub-actions'
import { CheckIcon } from '@radix-ui/react-icons'
import { calculateDaysRemaining } from '@/lib/utils'

type Sub = {
  id: string
  created_at: string
  title: string
  start_date: string
  organization_id: string
  end_date: string
}

type Props = {
  data: Sub
}
export const SubItem = ({ data }: Props) => {
  return (
    <Card
      className="relative block overflow-hidden dark:bg-zinc-950/50 backdrop-blur-sm border-[1.5px] shadow-lg p-2" >

      <CardHeader className="sm:flex sm:flex-row sm:gap-4 py-0 px-4 sm:items-center justify-between space-y-0">
        <CardTitle className="text-sm sm:text-lg capitalize font-medium">
          {data.title}
        </CardTitle>
        <span className='text-sm tracking-wide dark:text-zinc-400'>
          {calculateDaysRemaining(data.start_date, data.end_date)}
        </span>
        {/* <div className='border p-0.5 rounded-lg shadow-md hidden md:block'>
          <CheckIcon className="w-6 h-6 text-emerald-500" />
          <span className="sr-only">Active</span>
        </div> */}
      </CardHeader>

      {/* <CardContent className="mt-2 grid sm:grid-cols-3 gap-4 py-2 px-4 rounded-lg bg-zinc-100 dark:bg-zinc-800/50 shadow border-y"> */}
      <CardContent className="mt-2 flex items-center justify-between gap-4 py-2 px-4 rounded-lg bg-rose-50 dark:bg-zinc-800/50 shadow border-2 border-y">
        <div className="flex flex-col">
          <p className="text-sm tracking-wide dark:text-zinc-400">Start date:</p>
          <span className="text-base font-medium">{data.start_date}</span>
        </div>

        <div className="flex flex-col">
          <p className="text-sm tracking-wide dark:text-zinc-400">End date:</p>
          <span className="text-base font-medium">{data.end_date}</span>
        </div>

        <SubActions id={data.id} />
      </CardContent>
    </Card>
  )
}
