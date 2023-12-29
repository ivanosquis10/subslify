import Link from 'next/link'
import { getUserSession } from '@/actions'
import { ToggleTheme } from '@/components/shared/toggle-theme/toggle-theme'
import { UserInfo } from '@/components/dashboard/user-info'

export const HeaderDashboard = async () => {
  const session = await getUserSession()

  const user = {
    email: session?.user.email,
    photo: session?.user.user_metadata.avatar_url
  }

  return (
    <header className="flex flex-col md:flex-row lg:h-[60px] items-center md:p-6 p-4 border-b w-full gap-2 lg:gap-5 dark:bg-zinc-900 bg-white">
      <nav className="relative flex items-center justify-between flex-1 w-full gap-4">
        <Link className="text-lg font-semibold" href="/dashboard">
          Subslify
        </Link>
        <ul className="flex items-center gap-3 ml-auto">
          <li>
            <ToggleTheme />
          </li>
          <li>
            <UserInfo user={user} />
          </li>
        </ul>
      </nav>
    </header>
  )
}
