import { createClient } from '@/utils/supabase/server'
import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

// esto es una opción de Next.js, para evitar que cachee de forma
// estática la ruta, y que siempre se ejecute en el servidor
// export const dynamic = 'force-dynamic'
export async function GET(request: Request) {
  console.log(request.url, '<- request.url')
  const requestUrl = new URL(request.url)
  console.log(requestUrl, '<- requestUrl despues')
  const code = requestUrl.searchParams.get('code')

  if (code !== null) {
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
    await supabase.auth.exchangeCodeForSession(code)
  }

  // URL to redirect to after sign in process completes
  return NextResponse.redirect(new URL('/dashboard', requestUrl))
  // return NextResponse.redirect(requestUrl.origin)
  // Se redirige al usuario al /Dashboard
}
