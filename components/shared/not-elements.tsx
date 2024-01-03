export const NoElements = ({ title }: { title: string }) => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <p className="w-full h3-bold text-center mt-3 underline text-foreground/100">{title}</p>
    </div>
  )
}
