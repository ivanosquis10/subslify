import { getOrgsById } from '@/actions'
import { OrganizationItem } from './organization-item'
import type { Organization } from '@/types'
import { NoElements } from '@/components/shared/not-elements'

export const OrganizationsWrapper = async ({ id }: { id: string }) => {
  const organizations = await getOrgsById(id)
  return (
    <div className="grid w-full gap-3 md:grid-cols-2 xl:grid-cols-3">
      {organizations.length === 0 && <NoElements title='No organizations yet!' />}

      {organizations.map((org: Organization) => (
        <OrganizationItem key={org.id}
          organization={org}
        />
      ))}
    </div>
  )
}
