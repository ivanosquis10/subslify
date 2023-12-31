import { getOrgById } from '@/actions/organizations'
import { EditForm } from '@/components/dashboard/organization/edit-form'

export default async function Page ({ params: { id } }: { params: { id: string } }) {
  const data = await getOrgById(id)
  return (
    <section className='px-2 md:px-0'>
      <div className="p-4 md:p-6 max-w-2xl mx-auto mt-10 border shadow dark:bg-zinc-950/40 rounded-lg backdrop-blur-sm">

        <header className="text-center mb-10 mx-auto">
          <h2 className="text-3xl font-bold">Edit Organization</h2>
          <p className="font-light text-sm text-zinc-500">Lorem ipsum dolor sit amet consectetur adipisicing eliti perferendis</p>
        </header>

        <EditForm org={data} id={id} />
      </div>
    </section>
  )
}
