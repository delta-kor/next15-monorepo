import { Ubuntu } from 'next/font/google'
import React from 'react'
import './globals.css'

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>{children}</body>
    </html>
  )
}
