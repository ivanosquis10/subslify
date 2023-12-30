'use client'

import { useRouter } from 'next/navigation'
import { signOutSession } from '@/actions'
import { LogOutIcon } from '@/components/icons/icons'
import { Button } from '@/components/ui/button'

export const SignOut = () => {
  const router = useRouter()

  const handleSignOut = async () => {
    await signOutSession()
    router.replace('/login')
  }
  return (
    <Button onClick={handleSignOut} className="w-full" variant='ghost'>
      <LogOutIcon className="h-4 w-4 mr-2" />
      Logout
    </Button>
  )
}
