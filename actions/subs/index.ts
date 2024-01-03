/* eslint-disable @typescript-eslint/no-unsafe-argument */
'use server'

import { cookies } from 'next/headers'
import { revalidatePath } from 'next/cache'
import { createClient } from '@/utils/supabase/server'
import type { GetSubsResponse, Sub, CreateProps } from '@/types'

/**
 * Retrieves the subscriptions for a given organization.
 *
 * @param {string} orgId - The ID of the organization.
 * @param {boolean} expired - Optional. If true, retrieves expired subscriptions. Otherwise, retrieves non-expired subscriptions.
 * @return {Promise<GetSubsResponse>} A Promise that resolves to an object containing the organization title, an array of sorted subscriptions, and error information.
 */

export const getSubs = async (orgId: string, expired?: boolean): Promise<GetSubsResponse> => {
  try {
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
    const currentDate = new Date().toISOString()

    // trae las suscripciones que NO estan expiradas
    if (!expired) {
      const { data, error } = await supabase.from('organizations')
      .select(`
        title,
        subs (id, title, start_date, end_date, organization_id)
      `)
      .eq('id', orgId)
      .gte('subs.end_date', currentDate)
      .single()

      if (error) {
        console.error(error)
        return { organization: null, subs: [], error }
      }

      const sortedSubs = data.subs.sort((a, b) => new Date(a.end_date).getTime() - new Date(b.end_date).getTime()) as Sub[]

      return { organization: data.title, subs: sortedSubs, error: null }
    }

    // trae las suscripciones que estan expiradas
    const { data, error } = await supabase.from('organizations')
      .select(`
        title,
        subs (id, title, start_date, end_date, organization_id)
      `)
      .eq('id', orgId)
      .lte('subs.end_date', currentDate)
      // .gte('subs.end_date', currentDate)
      .single()

      if (error) {
        console.error(error)
        return { organization: null, subs: [], error }
      }

      const sortedSubs = data.subs.sort((a, b) => new Date(a.end_date).getTime() - new Date(b.end_date).getTime()) as Sub[]

      return { organization: data.title, subs: sortedSubs, error: null }
  } catch (error) {
      console.log(error)
      return { organization: null, subs: [], error }
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
