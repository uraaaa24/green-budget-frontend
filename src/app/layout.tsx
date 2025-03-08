import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import Navigation from '@/components/layouts/navigation'
import { DateRangeProvider } from '@/providers/date-range-provider'
import { SessionProvider } from 'next-auth/react'
import { ResponsiveLayoutProvider } from '@/providers/responsive-layout-provider'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700']
})

export const metadata: Metadata = {
  title: 'Green Budget',
  description: 'A simple budgeting app'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body
        className={`${inter.variable} flex min-h-screen bg-neutral text-textColors-primary antialiased`}
      >
        <SessionProvider>
          <ResponsiveLayoutProvider>
            <DateRangeProvider>
              <Navigation />
              <main className="flex-1 overflow-auto px-10 py-6 sm:ml-64">{children}</main>
            </DateRangeProvider>
          </ResponsiveLayoutProvider>
        </SessionProvider>
      </body>
    </html>
  )
}
