import { ThemeProvider } from '@/components/providers/theme-providers'
import './globals.css'
import { sora } from '@/fonts'

const defaultUrl = process.env.VERCEL_URL
  ? `https://${ process.env.VERCEL_URL }`
  : 'http://localhost:3000'

export const metadata = {
  metadataBase: new URL( defaultUrl ),
  title: 'Next.js and Supabase Starter Kit',
  description: 'The fastest way to build apps with Next.js and Supabase',
}

export default function RootLayout( {
  children,
}: {
  children: React.ReactNode
} ) {
  return (
    <html lang="en" className={ sora.className }>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <main className="flex flex-col items-center min-h-screen">
            { children }
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
