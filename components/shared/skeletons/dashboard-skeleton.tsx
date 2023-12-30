import style from './dashboard.module.css'
export const DashboardSkeleton = () => {
  return (
    <div className='w-full flex items-center justify-center'>
      <div className={`${style.container}`}>
        <div className={`${style.dot}`}></div>
      </div>
    </div>
  )
}
