import { Suspense } from 'react'
import Link from 'next/link'
import { getSubs } from '@/actions'

import { BackButton } from '@/components/shared/back-button/back-button'
import { Button } from '@/components/ui/button'
import { AddDoc } from '@/components/icons/icons'
import { Heading } from '@/components/shared/heading/heading'
import { DraweSubs } from '@/components/drawer-subs'

export const SubHeading = async ({ id, title }: { id: string, title: string }) => {
  const expiredSubs = await getSubs(id, true)
  return (
    <header className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-5">

      <Heading
        title={title}
        subtitle='Here are your subs. You have the options available to delete and edit, all expired subs will be deleted.'
      />

      <nav className='flex items-center gap-2 justify-between md:justify-end'>
        <Suspense fallback={<div>Loading...</div>}>
          <DraweSubs
            expireds={expiredSubs.subs}
          />
        </Suspense>
        <BackButton route='/dashboard' />
        <Button asChild>
          <Link href={`/dashboard/subs/${id}/create`} className="flex items-center gap-1" >
            <AddDoc />
            Add sub
          </Link>
        </Button>
      </nav>
    </header>
  )
}
