import { SignalIcon, UsersIcon, PlusIcon } from '../icons/icons'
import { ToggleTheme } from '@/components/toggle-theme/toggle-theme'
import { Button } from '../ui/button'
import Link from 'next/link'

interface Props {
  name: string
}

export const HeaderDashboard = ( { name }: Props ) => {
  return (
    <header className="flex flex-col md:flex-row lg:h-[60px] items-center md:p-6 p-4 border-b w-full gap-2 lg:gap-5">
      <div className="p-2 lg:h-[60px] border-x-2 shadow flex items-center bg-zinc-100 dark:bg-zinc-950/50">
        <Link className="font-semibold text-lg" href="/dashboard">
          Sub-status
        </Link>
      </div>

      <nav className="flex-1 w-full flex items-center justify-between gap-4">
        <h3 className="font-semibold text-lg md:text-2xl md:ml-2 capitalize">Welcome, { name }🚀</h3>
        <ul className="ml-auto flex gap-2">
          <li>
            <ToggleTheme />
          </li>
          <li>
            <Button className="" size="icon" variant='ghost'>
              <UsersIcon className="h-6 w-6" />
              <span className="sr-only">User Details</span>
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  )
}