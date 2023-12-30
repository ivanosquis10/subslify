import { SubCreateForm } from '@/components/dashboard/sub/sub-create-form'

export default function Page ({ params }: { params: { id: string } }) {
  return (
    <section className='px-2 md:px-0'>

      <div className="p-4 max-w-2xl mx-auto mt-10 border shadow dark:bg-zinc-950/40 rounded-lg backdrop-blur-sm">

        <header className="text-center mb-8 mx-auto">
          <h2 className="h3-bold">Create Sub</h2>
          <p className="font-light text-sm lg:text-base text-zinc-500">Please, check your data correctly</p>
        </header>

        <SubCreateForm id={params.id} />
      </div>
    </section>
  )
}
