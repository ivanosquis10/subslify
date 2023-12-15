import Link from 'next/link'
import { PlusIcon } from '../icons/icons'
import { Button } from '../ui/button'
export const HeadingDashboard = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4 lg:mb-0">
      <div>
        <h1 className="font-semibold text-lg md:text-2xl mb-2">Organizations</h1>
        <p className="text-sm text-zinc-500 mb-4">Here is a list of all registered organizations:</p>
      </div>


      <Button asChild>
        <Link href='dashboard/orgs/create' className="flex items-center gap-2">
          <PlusIcon />
          Add organization
        </Link>
      </Button>
    </div>
  )
}