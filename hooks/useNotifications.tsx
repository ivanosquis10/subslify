import { useToast } from '@/components/ui/use-toast'

export const useNotifications = () => {
  const { toast } = useToast()

  const notify = (title: string) => {
    toast({ title, duration: 3000 })
  }

  return {
    notify
  }
}
