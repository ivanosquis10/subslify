import { HeaderDashboard } from '@/components/dashboard/header-dashboard'


export default function DashboardLayout( {
  children,
}: {
  children: React.ReactNode
} ) {
  return (
    <section className="lg:min-h-screen w-full">
      <div className="flex flex-col w-full">

        <HeaderDashboard
          name="ivan"
        />
        { children }
      </div>
    </section>
  )
}