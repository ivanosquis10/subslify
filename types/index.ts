export interface Organization {
  id: string
  created_at: string
  title: string
  description: string
  user_id: string
  items?: null | [string]
}
