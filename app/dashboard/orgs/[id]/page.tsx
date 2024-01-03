import { Suspense } from 'react'
import { getSubs } from '@/actions'
import { SubWrapper } from '@/components/dashboard/sub/sub-wrapper'
import { SubHeading } from '@/components/dashboard/sub/sub-heading'
import { DashboardSkeleton } from '@/components/shared/skeletons/dashboard-skeleton'

export default async function Page ({ params: { id } }: { params: { id: string } }) {
  const data = await getSubs(id)

  return (
    <section className="p-4 md:gap-8 md:p-6">
      <SubHeading id={id} title={data.organization!} />

      <Suspense fallback={<DashboardSkeleton />}>
        <SubWrapper subs={data.subs} />
      </Suspense>
    </section>
  )
}
