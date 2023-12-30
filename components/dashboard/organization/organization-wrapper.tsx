import type { Organization } from '@/types'
import { OrganizationItem } from './organization-item'
import { getOrgsById } from '@/actions'

export const OrganizationsWrapper = async ({ id }: { id: string }) => {
  const organizations = await getOrgsById(id)
  return (
    <div className="grid w-full gap-3 md:grid-cols-2 xl:grid-cols-3">
      {organizations.length === 0 && <NotItem />}

      {organizations.map((org: Organization) => (
        <OrganizationItem key={org.id}
          organization={org}
        />
      ))}
    </div>
  )
}

const NotItem = () => {
  return (
    <p className="w-full h3-bold text-center col-span-3 mt-3 underline">No organizations yet</p>
  )
}
