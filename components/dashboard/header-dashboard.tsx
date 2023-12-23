import Link from 'next/link'
import { ToggleTheme } from '@/components/toggle-theme/toggle-theme'
import { UserInfo } from '@/components/dashboard/user-info'

interface Props {
  name: string
}

export const HeaderDashboard = ({ name }: Props) => {
  return (
    <header className="flex flex-col md:flex-row lg:h-[60px] items-center md:p-6 p-4 border-b w-full gap-2 lg:gap-5 dark:bg-zinc-900 bg-white">
      <nav className="relative flex items-center justify-between flex-1 w-full gap-4">
        <Link className="text-lg font-semibold" href="/dashboard">
          Sub-status
        </Link>
        <ul className="flex items-center gap-3 ml-auto">
          <li>
            <ToggleTheme />
          </li>
          <li>
            <UserInfo />
          </li>
        </ul>
      </nav>
    </header>
  )
}
