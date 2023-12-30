import { Button } from '@/components/ui/button'
import { AddDoc } from '@/components/icons/icons'
import { SubItem } from '@/components/dashboard/sub/sub-item'
import { BackButton } from '@/components/shared/back-button/back-button'
import { getSubs } from '@/actions/subs'
import Link from 'next/link'

export default async function Page ({ params: { id } }: { params: { id: string } }) {
  const data = await getSubs(id)

  if (data?.error) {
    alert('Something went wrong'); return
  }

  return (
    <section className="p-4 md:gap-8 md:p-6">
      <header className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-5">
        <div>
          <h2 className="text-xl font-bold lg:text-2xl">Organization name</h2>
          <p className="text-sm text-zinc-500 mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, cumque itaque deserunt nihil facere delectus numquam possimus culpa.</p>
        </div>

        <nav className='flex items-center gap-2'>
          <BackButton route='/dashboard' />
          <Button asChild>
            <Link href={`/dashboard/subs/${id}/create`} className="flex items-center gap-1" >
              <AddDoc />
              Add sub
            </Link>
          </Button>
        </nav>
      </header>

      { /* // TODO: if no subs, show message */}
      <main className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {data?.subs?.map((sub) => (
          <SubItem key={sub.id} data={sub} />
        ))}
      </main>
    </section>
  )
}
