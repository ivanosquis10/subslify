import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
import type { Sub } from '@/types'
import { SubItem } from './dashboard/sub/sub-item'
import { Button } from './ui/button'
import { NoElements } from './shared/not-elements'

export const DraweSubs = async ({ expireds }: { expireds: Sub[] }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant='ghost'>
          Expired subs
        </Button>
      </SheetTrigger>
      <SheetContent className='backdrop-blur-sm'>
        <SheetHeader>
          <SheetTitle>Expired Subs</SheetTitle>
          <SheetDescription className='text-wrap text-foreground/80 mb-2'>
            Here you will see your subs that are already finished, you can reactivate them or delete them. After 10 days they will be automatically deleted.
          </SheetDescription>

          <SheetDescription>
            {expireds.length === 0 && <NoElements title='No expired subs' />}
            {expireds.map((sub) => (
              <SubItem key={sub.id} data={sub} />
            ))}
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>

  )
}
