'use server'

import { cookies } from 'next/headers'
import { createClient } from '@/utils/supabase/server'

export const loginWithGoogle = async () => {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const result = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `${location.origin}/auth/callback`
    }
  })

  return result
}
