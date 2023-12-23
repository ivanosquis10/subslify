'use server'

import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'

interface CreateProps {
  id?: string
  title: string
  description: string
}

export const createOrg = async ({ title, description }: CreateProps) => {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  // Obtenemos el user_id del usuario actual
  const user_id = (await supabase.auth.getSession()).data.session?.user.id

  const newOrg = { user_id, title, description }

  const result = await supabase.from('organizations').insert(newOrg).select().single()
  revalidatePath('/dashboard')
  return result
}

export const editOrg = async (data: CreateProps) => {
  const { id, description, title } = data

  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const result = await supabase.from('organizations').update({ title, description }).eq('id', id).select().single()
  revalidatePath('/dashboard')
  return result
}

export const getOrgById = async (id: string) => {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)
  const result = await supabase.from('organizations').select().eq('id', id).single()
  return result
}

export const deleteOrg = async (id: string) => {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)
  const result = await supabase.from('organizations').delete().eq('id', id)
  revalidatePath('/dashboard')
  return result
}
