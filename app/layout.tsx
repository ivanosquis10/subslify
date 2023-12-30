import './globals.css'
// import { GeistSans as geist } from 'geist/font/sans'
import { onest } from '@/fonts'
import { ThemeProvider } from '@/components/shared/providers/theme-providers'
import { Toaster } from '@/components/ui/toaster'

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000'

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: 'Subslify',
  description: 'Subslify is a simple and efficient subscription manager'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={onest.className}>
      <body >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <main className="flex flex-col items-center overflow-hidden">
            <div className="absolute inset-0 bg-grid-zinc-900/20 dark:bg-grid-white/5 bg-grid-10 -z-10 h-full" />
            {children}
            <Toaster />
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
