/* eslint-disable @typescript-eslint/no-misused-promises */
'use client'

import { useTransition } from 'react'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { createOrg } from '@/actions/organizations'
import { Button } from '@/components/ui/button'
import { formSchema, type CreateOrgsSchema } from '@/validations'
import { useNotifications } from '@/hooks/useNotifications'
import { ReloadIcon } from '@radix-ui/react-icons'

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
      const { data, error } = await createOrg(values)
      if (!error) {
        notify('Organization created successfully')
        reset()
      }
    })
  }

  return (
    <section>

      <div className="p-4 md:p-6 max-w-2xl mx-auto mt-10 border shadow dark:bg-zinc-950/40 rounded-lg">

        <header className="text-center mb-10 mx-auto">
          <h2 className="text-3xl font-bold">Create Organization</h2>
          <p className="font-light text-sm text-zinc-500">Lorem ipsum dolor sit amet consectetur adipisicing eliti perferendis</p>
        </header>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center items-center mx-auto gap-5">
          <div className="flex flex-col gap-1 w-full">
            <div className="flex items-center justify-between">
              <label className="font-medium" htmlFor="title">Title of the organization</label>
              {errors.title && <p className="text-sm text-red-500">{errors.title.message}</p>}
            </div>
            <input
              type="text"
              {...register('title')}
              id="title"
              className="w-full p-2 rounded-md bg-zinc-100 dark:bg-zinc-950/50 border shadow placeholder:text-zinc-500"
              placeholder="Entretainment, Food, News... "
            />
          </div>

          <div className="flex flex-col gap-1 w-full">
            <div className="flex items-center justify-between">
              <label className="font-medium" htmlFor="description">Description of the organization</label>
              {errors.description && <p className="text-sm text-red-500">{errors.description.message}</p>}
            </div>
            <textarea
              {...register('description')}
              id="description"
              className="w-full p-2 rounded-md bg-zinc-100 dark:bg-zinc-950/50 border  shadow placeholder:text-zinc-500 resize-none"
              placeholder="Lorem ipsum dolor sit amet..."
            />

          </div>

          <Button type="submit" className="w-full font-bold">
            {isPending
              ? (
                <>
                  <ReloadIcon className="h-5 w-5 mr-1 animate-spin" />
                  Creating...
                </>
              )
              : 'Create'
            }
          </Button>

        </form>
      </div>
    </section>
  )
}
