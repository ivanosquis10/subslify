/* eslint-disable @typescript-eslint/no-misused-promises */
'use client'

import { useTransition } from 'react'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { createOrg } from '@/actions/organizations'
import { formSchema, type CreateOrgsSchema } from '@/validations'
import { useNotifications } from '@/hooks/useNotifications'
import { SubmitButton } from '@/components/shared/loading-button'
import { BackButton } from '@/components/shared/back-button/back-button'

export default function Page () {
  const [isPending, startTransition] = useTransition()
  const { notify } = useNotifications()

  const { handleSubmit, register, formState: { errors }, reset } = useForm<CreateOrgsSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      description: ''
    }
  })

  const onSubmit: SubmitHandler<CreateOrgsSchema> = async (values) => {
    startTransition(async () => {
      const { error } = await createOrg(values)
      if (!error) {
        notify('Organization created successfully')
        reset()
      }
    })
  }

  return (
    <section className='px-2 md:px-0'>

      <div className="p-4 md:p-6 max-w-2xl mx-auto mt-10 border shadow-md bg-zinc-100 dark:bg-zinc-950/40 rounded-lg backdrop-blur-sm relative">

        <header className="text-center mb-8 mx-auto">
          <h2 className="h3-bold">Create Organization</h2>
          <p className="font-light text-sm lg:text-base text-zinc-500">Please, check your data correctly</p>
        </header>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center items-center mx-auto gap-5">
          <div className="flex flex-col gap-1 w-full">
            <div className="flex items-center justify-between">
              <label className="font-medium text-sm md:text-base" htmlFor="title">Title of the organization</label>
              {errors.title && <p className="text-sm text-red-500">{errors.title.message}</p>}
            </div>
            <input
              type="text"
              {...register('title')}
              id="title"
              className="w-full p-2 text-sm rounded-md bg-zinc-100 dark:bg-zinc-950/50 border shadow placeholder:text-zinc-500"
              placeholder="Entretainment, Food, News... "
            />
          </div>

          <div className="flex flex-col gap-1 w-full">
            <div className="flex items-center justify-between">
              <label className="font-medium text-sm md:text-base" htmlFor="description">Description of the organization</label>
              {errors.description && <p className="text-sm text-red-500">{errors.description.message}</p>}
            </div>
            <textarea
              {...register('description')}
              id="description"
              className="w-full text-sm p-2 rounded-md bg-zinc-100 dark:bg-zinc-950/50 border shadow placeholder:text-zinc-500 resize-none"
              placeholder="Lorem ipsum dolor sit amet..."
            />

          </div>

          <div className='w-full flex gap-2'>
            <SubmitButton isPending={isPending} loadingText="Creating..." >
              Create
            </SubmitButton>
            <BackButton route="/dashboard" />
          </div>

        </form>
      </div>
    </section>
  )
}
