import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export const SignOutButton = () => {
  const handleSignOut = async () => {
    'use server'
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    await supabase.auth.signOut()
    return redirect('/login')
  }
  return (
    <form action={ handleSignOut }>
      <button className="px-4 py-2 border rounded-lg">Sign Out</button>
    </form>
  )
}
