import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
import { createClient } from '@/utils/supabase/server'

import { LogOutIcon } from '../icons/icons'
import { Button } from '../ui/button'

export const SignOut = () => {
  const handleSignOut = async () => {
    'use server'
    const cookieStore = cookies()
    const supabase = createClient( cookieStore )

    await supabase.auth.signOut()
    return redirect( '/login' )
  }
  return (
    <form action={ handleSignOut }>
      <Button className="w-full">
        <LogOutIcon className="h-4 w-4 mr-2" />
        Logout
      </Button>
    </form>
  )
}