'use client'

import { createClient } from '@/utils/supabase/client'
import { redirect } from 'next/navigation'

export default function LoginGoogle() {
  const supabase = createClient()

  const handleSignIn = async () => {
    const { error, data } = await supabase.auth.signInWithOAuth( {
      provider: 'google',
      options: {
        redirectTo: 'http://localhost:3000/auth/callback',
      }
    } )

    if ( error ) {
      console.log( error )
    }
    // redireccion al login
    return redirect( '/dashboard' )
  }

  return (
    <div>
      <h1>Google Login</h1>
      <button onClick={ handleSignIn } >Login with Google</button>
    </div>
  )
}