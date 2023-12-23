import { z } from 'zod'

const titleValidation = z.string().min(4, { message: 'Must be at least 4 characters*' }).max(15)
const descriptionValidation = z.string().min(10, { message: 'Must be at least 10 characters*' }).max(100)

export const formSchema = z.object({
  title: titleValidation,
  description: descriptionValidation
})

export type CreateOrgsSchema = z.infer<typeof formSchema>
