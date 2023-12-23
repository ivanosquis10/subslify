import { HeadingDashboard } from '@/components/dashboard/heading-dashboard'
import { OrganizationItem } from '@/components/dashboard/organization/organization-item'
import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

// interface Org {
//   id: string
//   title: string
//   description: string
// }

export default async function Page () {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const { data: { session } } = await supabase.auth.getSession()

  if (!session) {
    return redirect('/login')
  }

  const { data: organizations } = await supabase
    .from('organizations')
    .select('*')
    .eq('user_id', session.user.id)

  return (
    <main className="flex flex-col flex-1 gap-4 p-4 md:gap-8 md:p-6">
      <div className="flex flex-col w-full">
        <HeadingDashboard />
        <div className="grid w-full gap-3 md:grid-cols-2 xl:grid-cols-3">
          {
            organizations?.map((org) => (
              <OrganizationItem key={org.id}
                organization={org}
              />
            ))
          }
        </div>
      </div>
    </main>
  )
}
