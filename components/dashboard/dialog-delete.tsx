'use client'

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { TrashIcon } from '@/components/icons/icons'
import { useState, useTransition } from 'react'
import { deleteOrg } from '@/actions/organizations'
import { ReloadIcon } from '@radix-ui/react-icons'
import { useNotifications } from '@/hooks/useNotifications'
import { deleteSub } from '@/actions/subs'

type Props = {
  id: string
  type: 'organization' | 'sub'
}

export const DialogDelete = ({ id, type }: Props) => {
  const [open, setOpen] = useState(false)
  const [isDeleting, startTransition] = useTransition()
  const { notify } = useNotifications()

  const handleDelete = async () => {
    try {
      startTransition(async () => {
        type === 'organization'
          ? await deleteOrg(id)
          : await deleteSub(id)
        setOpen(false)
        notify(`Successfully deleted ${type}`)
      })
    } catch (error) {
      console.log(`Error deleting ${type}:`, error)
    }
  }

  return (
    <AlertDialog open={open} >
      <AlertDialogTrigger asChild>
        <button
          onClick={() => { setOpen(true) }} title='Delete organization' className='w-full relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent hover:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 gap-1'
        >
          <TrashIcon className="w-4 h-4" />
          <span>Delete</span>
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => { setOpen(false) }} >Cancel</AlertDialogCancel>
          <Button onClick={handleDelete} disabled={isDeleting}>
            {isDeleting
              ? (
                <>
                  <ReloadIcon className="w-5 h-5 mr-1 animate-spin" />
                  Deleting...
                </>
              )
              : 'Delete'
            }
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
