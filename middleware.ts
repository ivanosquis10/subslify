import { NextResponse, type NextRequest } from 'next/server'
import { createClient } from '@/utils/supabase/middleware'

export async function middleware (request: NextRequest) {
  try {
    const { supabase, response } = createClient(request)
    const { data } = await supabase.auth.getSession()

    // Si el usuario ya tiene una sesión y está intentando acceder a /login, redirige a /dashboard
    if (data.session !== null && request.nextUrl.pathname === '/login') {
      return NextResponse.redirect(new URL('/dashboard', request.url))
    }

    // Si el usuario no tiene una sesión y está intentando acceder a una ruta protegida, redirige a /login
    if (!data.session && request.nextUrl.pathname.startsWith('/dashboard')) {
      return NextResponse.redirect(new URL('/login', request.url))
    }

    return response
  } catch (e) {
    return NextResponse.next({
      request: {
        headers: request.headers
      }
    })
  }
}

export const config = {
  matcher: ['/dashboard/:path*', '/login']
}
