'use client'

import { Inter } from 'next/font/google'
import './globals.css'
import { NextUIProvider } from '@nextui-org/system'
import CalobNavbar from '@/components/navbar'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='dark text-foreground bg-background'>
      <body>
        <NextUIProvider>
          <CalobNavbar />
          {children}
        </NextUIProvider>
      </body>
    </html>
  )
}
