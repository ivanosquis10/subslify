import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
import { createClient } from '@/utils/supabase/server'

import { LogOutIcon } from '@/components/icons/icons'
import { Button } from '@/components/ui/button'

export const SignOut = () => {
  // Todo: mover a un server action
  const handleSignOut = async () => {
    'use server'
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    await supabase.auth.signOut()
    return redirect('/login')
  }
  return (
    <form action={handleSignOut}>
      <Button className="w-full" variant='ghost'>
        <LogOutIcon className="h-4 w-4 mr-2" />
        Logout
      </Button>
    </form>
  )
}
