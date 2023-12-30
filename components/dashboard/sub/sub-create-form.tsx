'use client'

import { useTransition } from 'react'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { createSub } from '@/actions/subs'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNotifications } from '@/hooks/useNotifications'
import { SubmitButton } from '@/components/shared/loading-button'
import { BackButton } from '@/components/shared/back-button/back-button'
import { formSubSchema, type CreateSubsSchema } from '@/validations'
import { getCurrentDate } from '@/lib/utils'

export const SubCreateForm = ({ id }: { id: string }) => {
  // const [days, setDays] = useState<number>(0)
  const [isPending, startTransition] = useTransition()
  const { notify } = useNotifications()

  const { handleSubmit, register, formState: { errors }, reset } = useForm<CreateSubsSchema>({ resolver: zodResolver(formSubSchema) })
  // const startDate = watch('startDate')
  // const endDate = watch('endDate')

  const onSubmit: SubmitHandler<CreateSubsSchema> = async (values) => {
    startTransition(async () => {
      const data = await createSub(id, values)

      if (!data?.error) {
        notify('Sub created successfully')
        reset()
      }
    })
  }

  // useEffect(() => {
  //   if (startDate && endDate) {
  //     setDays(calculateDaysRemaining(startDate, endDate, true))
  //     return
  //   }

  //   setDays(0)
  // }, [startDate, endDate])

  return (

    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center items-center mx-auto gap-5">
      <div className="flex flex-col gap-1 w-full">
        <div className="flex items-center justify-between">
          <label className="font-medium text-sm" htmlFor="title">Title of the sub</label>
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

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 w-full'>
        <div className="flex flex-col gap-1 w-full">
          <div className="flex items-center justify-between">
            <label className="font-medium text-sm" htmlFor="start_date">Start date</label>
            {errors.startDate && <p className="text-sm text-red-500">{errors.startDate.message}</p>}
          </div>
          <input
            type="date"
            {...register('startDate')}
            id="start_date"
            className='w-full p-2 text-sm rounded-md bg-zinc-100 dark:bg-zinc-950/50 border shadow placeholder:text-zinc-500'
            min={getCurrentDate()}
          />

        </div>

        <div className="flex flex-col gap-1 w-full">
          <div className="flex items-center justify-between">
            <label className="font-medium text-sm" htmlFor="end_date">End date</label>
            {errors.endDate && <p className="text-sm text-red-500">{errors.endDate.message}</p>}
          </div>
          <input
            type="date"
            {...register('endDate')}
            id="end_date"
            className='w-full p-2 text-sm rounded-md bg-zinc-100 dark:bg-zinc-950/50 border shadow placeholder:text-zinc-500'
            min={getCurrentDate()}
          />

        </div>
      </div>

      {/* <div className={`${days === 0 ? 'hidden' : 'flex-1'}`}>
        <p className="text-sm text-zinc-400">
          The number of days will be: {days}
        </p>
      </div> */}

      <div className='w-full flex gap-2'>
        <SubmitButton isPending={isPending} loadingText="Creating..." >
          Create
        </SubmitButton>
        <BackButton route={`/dashboard/orgs/${id}`} />
      </div>

    </form>
  )
}
