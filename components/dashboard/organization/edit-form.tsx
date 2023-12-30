'use client'

import { useTransition } from 'react'
import { redirect } from 'next/navigation'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { editOrg } from '@/actions/organizations'
import { formSchema, type CreateOrgsSchema } from '@/validations'
import { useNotifications } from '@/hooks/useNotifications'
import { SubmitButton } from '@/components/shared/loading-button'
import { BackButton } from '@/components/shared/back-button/back-button'

interface Props {
  org: any
  id: string
}

export const EditForm = ({ org }: Props) => {
  const [isPending, startTransition] = useTransition()
  const { notify } = useNotifications()

  const { handleSubmit, register, formState: { errors } } = useForm<CreateOrgsSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: org?.title,
      description: org?.description
    }
  })

  const onSubmit: SubmitHandler<CreateOrgsSchema> = async (values) => {
    startTransition(async () => {
      const { error } = await editOrg({ ...values, id: org.id })

      if (!error) {
        notify('Organization edited successfully')
        return redirect('/dashboard')
      }
    })
  }

  return (

    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center items-center mx-auto gap-5">
      <div className="flex flex-col gap-1 w-full">
        <div className="flex items-center justify-between">
          <label className="font-medium text-sm" htmlFor="title">Title of the organization</label>
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
          <label className="font-medium text-sm" htmlFor="description">Description of the organization</label>
          {errors.description && <p className="text-sm text-red-500">{errors.description.message}</p>}
        </div>
        <textarea
          {...register('description')}
          id="description"
          className="w-full p-2 text-sm rounded-md bg-zinc-100 dark:bg-zinc-950/50 border shadow placeholder:text-zinc-500 resize-none"
          placeholder="Lorem ipsum dolor sit amet..."
        />

      </div>

      <div className='w-full flex gap-2'>
        <SubmitButton isPending={isPending} loadingText="Saving..." >
          Save changes
        </SubmitButton>
        <BackButton route="/dashboard" />
      </div>

    </form>
  )
}
