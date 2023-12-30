import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { EyeIcon, PencilIcon, TrashIcon } from '@/components/icons/icons'
import type { Organization } from '@/types'
import { OrganizationActions } from './organization-actions'

interface Props {
  organization: Organization
}

export const OrganizationItem = ({ organization }: Props) => {
  // <Link href={`/dashboard/orgs/${organization.id}`}></Link>
  return (
    // <Card className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full transition-all duration-300 shadow-lg bg-muted dark:bg-zinc-950/30 backdrop-blur-sm ring-2 ring-transparent hover:ring-emerald-500">
    <Card className="w-full transition-all duration-300 shadow-lg bg-muted border-2 dark:bg-zinc-950/30 backdrop-blur-sm ring-2 ring-transparent hover:ring-emerald-500 flex items-center justify-between">
      <CardHeader className='p3'>
        <CardTitle className="capitalize p-bold-20">{organization.title}</CardTitle>
        <CardDescription className=''>
          {organization.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex items-center p-3 pt-3">
        <OrganizationActions id={organization.id} />
      </CardContent>
    </Card>
  )
}
