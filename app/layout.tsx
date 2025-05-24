import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Paperhead',
  description: 'Paperhead | build defi project live on stream',
  generator: 'Paperhead',
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
