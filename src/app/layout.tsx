import MouseLight from '@/components/Animations/MouseLight'
import type { Metadata } from 'next'
import React from 'react'
import './globals.css'

export const metadata: Metadata = {
  title: 'Manzura Jabbarova',
  description: 'Portfolio',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`antialiased bg-slate-900`}>
        <MouseLight />
        {children}
      </body>
    </html>
  )
}
