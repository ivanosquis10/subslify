import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { ThickArrowLeftIcon } from '@radix-ui/react-icons'

interface Props {
  route: string
}

export const BackButton = ({ route }: Props) => {
  return (
    <Button asChild variant='secondary'>
      <Link href={route} className="flex items-center gap-1">
        <ThickArrowLeftIcon className="w-5 h-5" />
        Back
      </Link>
    </Button>
  )
}
