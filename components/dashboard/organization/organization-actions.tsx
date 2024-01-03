import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { DotsVerticalIcon } from '@radix-ui/react-icons'
import { DialogDelete } from '../dialog-delete'
import Link from 'next/link'
import { EyeIcon, PencilIcon } from '@/components/icons/icons'

export const OrganizationActions = ({ id }: { id: string }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline' size='icon'>
          <span className="sr-only">actions</span>
          <DotsVerticalIcon className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link className='w-full flex items-center gap-1 cursor-pointer' href={`/dashboard/orgs/${id}`} >
            <EyeIcon className="w-4 h-4" />
            <span>View</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link className='flex items-center gap-1 cursor-pointer' href={`/dashboard/orgs/${id}/edit`} >
            <PencilIcon className="w-4 h-4" />
            <span>Edit</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <DialogDelete id={id} type='organization' />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
