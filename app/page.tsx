import Link from 'next/link'
import { Header } from '@/components/shared/header/header'
import { Spotlight } from '@/components/shared/spotligth-wrapper'
import { Button } from '@/components/ui/button'

export default function Page () {
  return (
    <>
      <Header />

      <section className="px-4 w-full grid place-content-center min-h-[90svh]">
        {/* <div className="absolute inset-0 bg-grid-zinc-500/50 dark:bg-grid-white/5 bg-grid-12 -z-10 h-full" /> */}

        <div className="text-center max-w-4xl mx-auto">
          <h1 className="mt-8 font-extrabold lg:text-5xl text-4xl tracking-tight leading-10 text-pretty">
            Subslify your subs,<br /> Simplify your life
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 lg:text-xl mt-4 mx-auto text-base text-balance">
            Simplify your life by managing your subscriptions effortlessly🚀
          </p>
        </div>
        <div className="flex justify-center items-center gap-3 mt-10 flex-col sm:flex-row">
          <Button asChild className='rounded-xl text-base font-bold' size='lg'>

            <Link
              className="w-full sm:w-auto"
              href="/dashboard"
            >
              Get started
            </Link>
          </Button>
        </div>
        <div className="lg:gap-x-8 lg:grid-cols-3 max-w-4xl mt-8 mx-auto sm:gap-x-6 sm:gap-y-12 sm:grid sm:grid-cols-2 sm:space-y-0 space-y-6 text-center text-sm items-start">
          <Spotlight>
            <p className="spotligth p-3 rounded-lg border-2 shadow-md backdrop-blur-md">
              <strong>Astro, Tailwind CSS and Alpine.js</strong> ━ This are the popular technologies behind Astrosaas.
            </p>
          </Spotlight>

          <Spotlight>
            <p className="spotligth p-3 rounded-lg border-2 shadow-md backdrop-blur-md">
              <strong>Astro, Tailwind CSS and Alpine.js</strong> ━ This are the popular technologies behind Astrosaas.
            </p>
          </Spotlight>

          <Spotlight>
            <p className="spotligth p-3 rounded-lg border-2 shadow-md backdrop-blur-md">
              <strong>Astro, Tailwind CSS and Alpine.js</strong> ━ This are the popular technologies behind Astrosaas.
            </p>
          </Spotlight>
        </div>
      </section>
    </>
  )
}
