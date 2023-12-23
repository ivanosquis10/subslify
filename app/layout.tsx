import './globals.css'
import { GeistSans as geist } from 'geist/font/sans'
import { ThemeProvider } from '@/components/providers/theme-providers'
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
    <html lang="en" className={geist.className}>
      <body >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <main className="flex flex-col items-center min-h-screen">
            <Toaster />
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
