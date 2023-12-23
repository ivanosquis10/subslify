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

export const DialogDelete = ({ id }: { id: string }) => {
  const [open, setOpen] = useState(false)
  const [isDeleting, startTransition] = useTransition()
  const { notify } = useNotifications()

  const handleDelete = async () => {
    try {
      startTransition(async () => {
        await deleteOrg(id)
        setOpen(false)
        notify('Organization deleted')
      })
    } catch (error) {
      console.log('Error deleting organization:', error)
    }
  }

  return (
    <AlertDialog open={open} >
      <AlertDialogTrigger asChild>
        <Button onClick={() => { setOpen(true) }} size='icon' title='Delete organization'>
          <TrashIcon className="w-5 h-5" />
          <span className='sr-only'>Delete</span>
        </Button>
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
