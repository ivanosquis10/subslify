import Link from 'next/link'
import { BuildingIcon, FlagIcon, HomeIcon, UsersIcon } from '@/components/icons/icons'
import { ToggleTheme } from '../toggle-theme/toggle-theme'
import { SignOut } from '../sign-out/sign-out'

export const Aside = () => {
  return (
    <aside className="hidden lg:block h-full lg:rounded-md shadow border-r bg-zinc-100 dark:bg-zinc-950/50">
      <div className="flex h-full max-h-screen flex-col gap-2 px-3">
        <div className="flex h-[60px] items-center justify-between border-b">
          <Link className="flex items-center gap-2 font-semibold" href="#">
            <FlagIcon className="h-6 w-6" />
            <span className="">Subs-Status</span>
          </Link>
        </div>
        <div className="flex-1 overflow-auto py-2">
          <nav className="grid gap-2 items-start px-3 lg:px-0 text-base font-semibold">
            <Link
              className="flex items-center gap-3 rounded-lg p-2 text-zinc-600 hover:dark:bg-zinc-800/50 hover:bg-zinc-200 transition-all duration-300 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-gray-50"
              href="#"
            >
              <HomeIcon className="h-5 w-5" />
              Home
            </Link>
            <Link
              className="flex items-center gap-3 rounded-lg p-2 text-zinc-600 hover:dark:bg-zinc-800/50 hover:bg-zinc-200 transition-all duration-300 hover:text-gray-900 dark:text-zinc-300 dark:hover:text-gray-50"
              href="#"
            >
              <BuildingIcon className="h-5 w-5" />
              Organizations
            </Link>
            <Link
              className="flex items-center gap-3 rounded-lg p-2 text-zinc-600 hover:dark:bg-zinc-800/50 hover:bg-zinc-200 transition-all duration-300 hover:text-gray-900 dark:text-zinc-300 dark:hover:text-gray-50"
              href="#"
            >
              <UsersIcon className="h-5 w-5" />
              Users
            </Link>
          </nav>
        </div>
        <div className="mt-auto py-4">
          <SignOut />
        </div>
      </div>
    </aside>
  )
}
