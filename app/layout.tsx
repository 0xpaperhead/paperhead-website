import type { Metadata } from 'next'
import './globals.css'
import { Analytics } from "@vercel/analytics/next"

// <meta name="apple-mobile-web-app-title" content="Paperhead" />


export const metadata: Metadata = {
  title: 'Paperhead',
  description: 'Paperhead | AI Trading Agent',
  generator: 'Paperhead',
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
