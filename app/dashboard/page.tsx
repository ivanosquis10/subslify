import { Aside } from '@/components/dashboard/aside'
import { HeaderDashboard } from '@/components/dashboard/header-dashboard'
import { HeadingDashboard } from '@/components/dashboard/heading-dashboard'
import { OrganizationItem } from '@/components/dashboard/organization/organization-item'
import { SignOutButton } from '@/components/signout-button/signout-button'
import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'



export default async function Page() {
  const cookieStore = cookies()
  const supabase = createClient( cookieStore )

  const { data: { session } } = await supabase.auth.getSession()

  if ( !session ) {
    return redirect( '/logingoogle' )
  }

  // const user_session = {
  //   id: session.user.id,
  //   email: session.user.email,
  //   full_name: session.user.user_metadata.full_name,
  //   avatar_url: session.user.user_metadata.avatar_url,
  // }

  // // Traer todos las organizaciones del usuario que coincidan con el id relacionado a la sesion
  // const { data: organization, error } = await supabase
  //   .from( 'organizations' )
  //   .select( '*' )
  //   .eq( 'user_id', session.user.id )

  // const { data: user } = await supabase.from( 'users' ).select( '*' )

  // console.log( user )
  // console.log( organizations )
  return (
    // <section className="grid lg:min-h-screen w-full lg:grid-cols-[280px_1fr] gap-2">

    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
      <div className="flex flex-col w-full">
        <HeadingDashboard />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 w-full">
          <OrganizationItem />
          <OrganizationItem />
          <OrganizationItem />
          <OrganizationItem />
          {/* <pre>
                { JSON.stringify( organization, null, 2 ) }
              </pre> */}
        </div>
      </div>
    </main>
  )
}

