import { SubItem } from '@/components/dashboard/sub/sub-item'
import { NoElements } from '@/components/shared/not-elements'
import type { Sub } from '@/types'

export const SubWrapper = ({ subs }: { subs: Sub[] }) => (
  subs.length === 0
    ? (
      <NoElements title="No organizations yet!" />
    )
    : (
      <main className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {subs.map((sub) => (
          <SubItem key={sub.id} data={sub} />
        ))}
      </main>
    )
)
