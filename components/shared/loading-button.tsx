/* eslint-disable @typescript-eslint/consistent-type-definitions */
import { ReloadIcon } from '@radix-ui/react-icons'
import { Button } from '../ui/button'

type Props = {
  children: React.ReactNode
  isPending: boolean
  loadingText?: string
}

export const SubmitButton = ({ children, isPending, loadingText }: Props) => {
  return (
    <Button type="submit" className="w-full font-bold" disabled={isPending}>
      {isPending
        ? (
          <>
            <ReloadIcon className="h-5 w-5 mr-1 animate-spin" />
            {loadingText}
          </>
        )
        : children
      }
    </Button>
  )
}
