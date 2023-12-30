/* eslint-disable @typescript-eslint/naming-convention */
'use server'

import { cookies } from 'next/headers'
import { revalidatePath } from 'next/cache'
import { createClient } from '@/utils/supabase/server'
import { handleError } from '@/lib/utils'
import type { Organization } from '@/types'

interface CreateProps {
  id?: string
  title: string
  description: string
}

export const createOrg = async ({ title, description }: CreateProps) => {
  try {
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    // Obtenemos el user_id del usuario actual
    const user_id = (await supabase.auth.getSession()).data.session?.user.id

    const newOrg = { user_id, title, description }

    const result = await supabase.from('organizations').insert(newOrg).select().single()
    revalidatePath('/dashboard')
    return result
  } catch (error) {
    return handleError(error)
  }
}

export const editOrg = async (data: CreateProps) => {
  try {
    const { id, description, title } = data

    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    const result = await supabase.from('organizations').update({ title, description }).eq('id', id).select().single()
    revalidatePath('/dashboard')
    return result
  } catch (error) {
    return handleError(error)
  }
}

export const getOrgsById = async (id: string) => {
  try {
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    const { data } = await supabase.from('organizations').select().eq('user_id', id)
    return data as Organization[]
  } catch (error) {
    return handleError(error)
  }
}

export const getOrgById = async (id: string) => {
  try {
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    const { data } = await supabase.from('organizations').select().eq('id', id).single()
    return data
  } catch (error) {
    return handleError(error)
  }
}

export const deleteOrg = async (id: string) => {
  try {
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    const result = await supabase.from('organizations').delete().eq('id', id)

    revalidatePath('/dashboard')
    return result
  } catch (error) {
    return handleError(error)
  }
}
