import { NextResponse, type NextRequest } from 'next/server'
import { createClient } from '@/utils/supabase/middleware'

export async function middleware(request: NextRequest) {
  try {
    const { supabase, response } = createClient(request)
    // const { data } = await supabase.auth.getSession()

    // console.log(data)
    
    // if(data.session === null) {
    //   return NextResponse.redirect(new URL('/login', request.url))
    // }

    // Proteger la ruta del login, en caso de que haya una sesion activa, llevar al dashboard
    // if( request.nextUrl.pathname === '/login' && data.session !== null ) {
    //   return NextResponse.redirect(new URL('/dashboard', request.url))
    // }


    return response
  } catch (e) {
    return NextResponse.next({
      request: {
        headers: request.headers,
      },
    })
  }
}


export const config = {
  matcher: ['/dashboard/:path*'],
}