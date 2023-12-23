import Link from 'next/link'

export default async function Page () {
  return (
    <div className="flex flex-col items-center flex-1 w-full gap-20">
      hola
      <Link href='/login'>
        login
      </Link>
    </div>
  )
}
