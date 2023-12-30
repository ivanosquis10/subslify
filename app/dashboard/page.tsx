import { Suspense } from 'react'
import { redirect } from 'next/navigation'
import { getUserSession } from '@/actions/user'
import { HeadingDashboard } from '@/components/dashboard/heading-dashboard'
import { OrganizationsWrapper } from '@/components/dashboard/organization/organization-wrapper'
import { DashboardSkeleton } from '@/components/shared/skeletons/dashboard-skeleton'

export default async function Page () {
  const session = await getUserSession()

  if (!session) redirect('/login')

  return (
    <main className="flex flex-col flex-1 gap-4 p-4 md:gap-8 md:p-6">
      <div className="flex flex-col w-full">
        <HeadingDashboard />
        <Suspense fallback={<DashboardSkeleton />} >
          <OrganizationsWrapper id={session.user.id} />
        </Suspense>
      </div>
    </main>
  )
}
