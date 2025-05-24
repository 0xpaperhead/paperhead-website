import type { Metadata } from 'next'
import './globals.css'
// <meta name="apple-mobile-web-app-title" content="Paperhead" />


export const metadata: Metadata = {
  title: 'Paperhead',
  description: 'Paperhead | build defi project live on stream',
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
      <body>{children}</body>
    </html>
  )
}
