import { z } from 'zod'

const titleValidation = z.string().min(4, { message: 'Must be at least 4 characters*' }).max(30)

const startDateValidation = z.coerce.date({
  required_error: 'Required',
    invalid_type_error: 'Must be a valid date'
}).min(new Date('1900-01-01'), { message: 'Cannot be in the past' })

const endDateValidation = z.coerce.date({
  required_error: 'Required',
    invalid_type_error: 'Must be a valid date'
}).min(new Date(), { message: 'Cannot be the same as start date' })

export const formSubSchema = z.object({
  title: titleValidation,
  startDate: startDateValidation,
  endDate: endDateValidation
})

export type CreateSubsSchema = z.infer<typeof formSubSchema>
