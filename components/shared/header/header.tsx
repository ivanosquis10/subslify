import Link from 'next/link'
import { ToggleTheme } from '@/components/shared/toggle-theme/toggle-theme'

export const Header = () => {
  return (
    <header className="flex flex-col md:flex-row lg:h-[60px] items-center md:p-6 p-4 border-b w-full gap-2 lg:gap-5 backdrop-blur-sm bg-transparent">
      <nav className="relative flex items-center justify-between flex-1 w-full gap-4">
        <Link className="text-lg font-semibold" href="/dashboard">
          Subslify
        </Link>
        <ul className="flex items-center gap-3 ml-auto">
          <li>
            <ToggleTheme />
          </li>
          <li>
            <Link href='/login'>
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
