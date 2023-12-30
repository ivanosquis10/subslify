'use server'

import { cookies } from 'next/headers'
import { revalidatePath } from 'next/cache'
import { createClient } from '@/utils/supabase/server'
import type { Sub } from '@/types'

interface CreateProps {
  title: string
  startDate: Date | string
  endDate: Date | string
}

export const getSubs = async (orgId: string) => {
  try {
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    const { data, error } = await supabase.from('subs').select().eq('organization_id', orgId)

    const subs = data as Sub[] | null

    return { subs, error }
  } catch (error) {
    console.log(error)
  }
}

export const createSub = async (organizationId: string, sub: CreateProps) => {
  try {
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    const result = await supabase.from('subs').insert([
      {
        title: sub.title,
        start_date: sub.startDate,
        end_date: sub.endDate,
        organization_id: organizationId
      }
    ]).select().single()

    revalidatePath('/dashboard/orgs')
    return result
  } catch (error) {
    console.log(error)
  }
}

export const deleteSub = async (id: string) => {
  try {
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    const result = await supabase.from('subs').delete().eq('id', id)

    revalidatePath('/dashboard/orgs')
    return result
  } catch (error) {
    console.log(error)
  }
}
