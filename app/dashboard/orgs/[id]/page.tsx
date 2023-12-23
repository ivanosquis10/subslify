import { Button } from '@/components/ui/button'
import { AddDoc } from '@/components/icons/icons'
import { CardTitle, Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { SubItem } from '@/components/dashboard/sub/sub-item'

export default function Page ({ params: { id } }: { params: { id: string } }) {
  return (
    <section className="p-4 md:gap-8 md:p-6">
      <header className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-5">
        <div>
          <h2 className="text-xl font-bold lg:text-2xl">Organization name</h2>
          <p className="text-sm text-zinc-500 mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, cumque itaque deserunt nihil facere delectus numquam possimus culpa.</p>
        </div>

        <Button className="flex items-center gap-1">
          <AddDoc />
          Add sub
        </Button>
      </header>

      <main className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">

        <SubItem />
        <SubItem />
        <SubItem />
        <SubItem />

      </main>
    </section>
  )
}
