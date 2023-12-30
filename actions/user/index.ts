'use server'

import { cookies } from 'next/headers'
import { createClient } from '@/utils/supabase/server'

export const getUserSession = async () => {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const { data: { session } } = await supabase.auth.getSession()

  return session
}

export const signOutSession = async () => {
  try {
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    await supabase.auth.signOut()
  } catch (error) {
    console.log(error)
  }
}
