'use client'

// import { useTransition } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { createClient } from '@/utils/supabase/client'

import { GithubIcon, GoogleIcon } from '@/components/icons/icons'
import { Button } from '@/components/ui/button'
import { Card, CardHeader } from '@/components/ui/card'
import { getURL } from '@/lib/utils'

export default function LoginGoogle () {
  // const [isPending, startTransition] = useTransition()
  const supabase = createClient()
  const router = useRouter()

  const handleSignIn = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${getURL()}auth/callback`
        }
      })

      if (error) {
        console.error('Error en la autenticación con Google:', error)
      }

      router.refresh()
    } catch (error) {
      console.log('Error with Google login:', error)
    }
  }

  return (
    <section>
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <div className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt="Night"
            src="https://images.unsplash.com/photo-1617195737496-bc30194e3a19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            className="absolute inset-0 h-full w-full object-cover opacity-80"
          />

          <div className="hidden lg:relative lg:block lg:p-12">
            <Link
              className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-blue-600 sm:h-20 sm:w-20"
              href="/"
            >
              <img src='/assets/shark.svg' alt="logo" width={100} height={100} className="h-10 w-10" />
            </Link>

            <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Welcome to Subslify🦑
            </h2>

            <p className="mt-4 leading-relaxed text-white/90">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam dolorum aliquam,
              quibusdam aperiam voluptatum.
            </p>
          </div>
        </div>

        <main
          className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6 backdrop-blur-md"
        >
          <div className="max-w-xl lg:max-w-7xl w-full">
            <div className="relative -mt-16 block lg:hidden">
              <Link
                className="inline-flex h-28 w-28 items-center justify-center"
                href="/"
              >
                <img src='/assets/shark.svg' alt="logo" width={100} height={100} className="h-28 w-28" />
              </Link>

              <h1 className="mt-2 text-2xl font-bold sm:text-3xl md:text-4xl">
                Welcome to Subslify🦑
              </h1>

              <p className="mt-4 leading-relaxed ">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam dolorum aliquam,
                quibusdam aperiam voluptatum.
              </p>
            </div>

            <Card className="mt-10 dark:border-zinc-800/50 shadow-md bg-zinc-50 dark:bg-zinc-950/40">
              <CardHeader className="space-y-3">
                <h2 className="text-2xl font-bold text-center mb-5">Starts with</h2>
                <Button
                  // onClick={handleSignIn}
                  className="w-full flex items-center gap-3 font-bold"
                >
                  <GoogleIcon />
                  Google
                </Button>
                <span className="flex items-center">
                  <span className="h-px flex-1 dark:bg-zinc-800 bg-zinc-300"></span>
                  <span className="shrink-0 px-6">or</span>
                  <span className="h-px flex-1 dark:bg-zinc-800 bg-zinc-300"></span>
                </span>

                <Button className="w-full flex items-center gap-3 font-bold" variant='ghost'>
                  <GithubIcon />
                  Github
                </Button>
              </CardHeader>
            </Card>
          </div>
        </main>
      </div>
    </section>
  )
}
