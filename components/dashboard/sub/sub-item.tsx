import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { SubActions } from './sub-actions'
import { calculateDate, formatDate } from '@/lib/utils'
import type { Sub } from '@/types'

type Props = {
  data: Sub
}
export const SubItem = ({ data }: Props) => {
  const today = new Date()
  return (
    <Card
      className="relative block overflow-hidden dark:bg-zinc-950/50 backdrop-blur-sm border-[1.5px] shadow-lg p-2" >

      <CardHeader className="sm:flex sm:flex-row sm:gap-4 py-0 px-4 sm:items-center justify-between space-y-0">
        <CardTitle className="text-sm sm:text-lg capitalize font-medium">
          {data.title}
        </CardTitle>
        <span className='text-sm tracking-wide dark:text-zinc-400'>
          {calculateDate(today, data.end_date)}
        </span>
      </CardHeader>

      <CardContent className="mt-2 flex items-center justify-between gap-4 py-2 px-4 rounded-lg bg-rose-50 dark:bg-zinc-800/50 shadow border-2 border-y">
        <div className="flex flex-col">
          <p className="text-sm tracking-wide dark:text-zinc-400">Start date:</p>
          <span className="text-base font-medium">{formatDate(data.start_date)}</span>
        </div>

        <div className="flex flex-col">
          <p className="text-sm tracking-wide dark:text-zinc-400">End date:</p>
          <span className="text-base font-medium">{formatDate(data.end_date)}</span>
        </div>

        <SubActions id={data.id} />
      </CardContent>
    </Card>
  )
}
