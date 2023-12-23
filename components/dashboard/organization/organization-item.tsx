import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { EyeIcon, PencilIcon, TrashIcon } from '@/components/icons/icons'
import type { Organization } from '@/types'
import Link from 'next/link'
import { DialogDelete } from '@/components/dashboard/dialog-delete'

interface Props {
  organization: Organization
}

export const OrganizationItem = ({ organization }: Props) => {
  return (
    <Link href={`/dashboard/orgs/${organization.id}`} >
      <Card className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full transition-all duration-300 shadow-lg bg-muted dark:bg-zinc-950/30 backdrop-blur-sm ring-2 ring-transparent hover:ring-emerald-500">
        <CardHeader className='md:flex-1'>
          <CardTitle className="capitalize p-bold-20">{organization.title}</CardTitle>
          <CardDescription className=''>
            {organization.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-row md:flex-col md:items-center gap-1 md:pt-6">
          <Button asChild size='icon' title='Edit organization'>
            <Link href={`/dashboard/orgs/${organization.id}/edit`} >
              <PencilIcon className="w-5 h-5" />
              <span className="sr-only">Edit</span>
            </Link>
          </Button>
          <DialogDelete id={organization.id} />
        </CardContent>
      </Card>
    </Link>
  )
}
