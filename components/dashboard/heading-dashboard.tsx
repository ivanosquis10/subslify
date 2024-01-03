import Link from 'next/link'
import { PlusIcon } from '../icons/icons'
import { Button } from '../ui/button'
import { Heading } from '../shared/heading/heading'
export const HeadingDashboard = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4 lg:mb-0">
      <Heading
        title='Organizations'
        subtitle='Your organizations are listed here. You can view, delete and edit what you need.'
      />

      <Button asChild>
        <Link href='dashboard/orgs/create' className="flex items-center gap-2">
          <PlusIcon />
          Add organization
        </Link>
      </Button>
    </div>
  )
}
