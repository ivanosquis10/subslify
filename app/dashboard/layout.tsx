import { HeaderDashboard } from '@/components/dashboard/header-dashboard'

export default function DashboardLayout ({ children }: { children: React.ReactNode }) {
  return (
    <section className="relative w-full lg:min-h-screen">
      {/* <div className="absolute inset-0 bg-grid-zinc-500/50 dark:bg-grid-white/10 bg-grid-12 -z-10 h-full"></div> */}
      <div className="flex flex-col w-full">
        <HeaderDashboard />
        {children}
      </div>
    </section>
  )
}
