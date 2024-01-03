export interface Organization {
  id: string
  created_at: string
  title: string
  description: string
  user_id: string
  items?: null | [string]
}

export type Sub = {
  id: string
  created_at: string
  title: string
  start_date: string
  organization_id: string
  end_date: string
}

export interface CreateProps {
  title: string
  startDate: Date | string
  endDate: Date | string
}

export interface GetSubsResponse {
  organization: string | null
  subs: Sub[]
  error: any
}
