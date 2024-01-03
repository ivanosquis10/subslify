export const Heading = ({ title, subtitle }: { title: string, subtitle: string }) => {
  return (
    <div className='flex flex-col'>
      <h2 className="font-semibold text-lg md:text-2xl mb-1 capitalize">{title}</h2>
      <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4">{subtitle}</p>
    </div>
  )
}
