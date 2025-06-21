import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Quality Guard MSO',
  description: 'Quality Guard MSO website for Life Care Planning',
  // generator: 'v0.dev',
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
