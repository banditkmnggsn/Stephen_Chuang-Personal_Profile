import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Stephen Chuang - Computer Engineering Student',
  description: 'My portfolio showcasing projects, skills, and experience in IoT and Embedded Systems development.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}