import './globals.css'

import { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import { Sidebar } from '@/components/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Untitled UI',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative grid min-h-screen lg:grid-cols-app">
          <Sidebar />

          <main className="col-start-2 px-8 pb-12 pt-8">{children}</main>
        </div>
      </body>
    </html>
  )
}
