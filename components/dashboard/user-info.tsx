import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { SignOut } from '../sign-out/sign-out'

export const UserInfo = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className="w-9 h-9 shadow border border-zinc-100">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-60 rounded-xl mr-4">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuItem>
          caroline.miller0208@gmail.com
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem asChild>
          <SignOut />
        </DropdownMenuItem>
      </DropdownMenuContent>

    </DropdownMenu>
  )
}
