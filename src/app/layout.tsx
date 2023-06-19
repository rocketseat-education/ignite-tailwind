import './globals.css'

import { ReactNode } from 'react'
import {
  BarChart,
  CheckSquare,
  Cog,
  Flag,
  Home,
  LifeBuoy,
  LogOut,
  Search,
  SquareStack,
  Users,
} from 'lucide-react'
import { Inter } from 'next/font/google'
import { NavItem } from '@/components/NavItem'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Untitled UI',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="grid min-h-screen pl-24 sm:grid-cols-app sm:pl-0">
          <aside className="group absolute bottom-0 left-0 top-0 w-20 flex-col gap-6 overflow-hidden border-r border-zinc-200 px-5 py-8 transition-all hover:w-[15rem] sm:relative">
            <strong className="mx-1 text-xl font-semibold text-zinc-900">
              Untitled UI
            </strong>

            <div className="mx-1 flex items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 focus-within:ring-2 focus-within:ring-violet-500">
              <Search className="h-5 w-5 text-zinc-500" />
              <input
                type="text"
                placeholder="Search"
                className="flex-1 placeholder-zinc-500 outline-none"
              />
            </div>

            <nav className="flex flex-col gap-0.5">
              <NavItem icon={Home} title="Home" />
              <NavItem icon={BarChart} title="Dashboard" />
              <NavItem icon={SquareStack} title="Projects" />
              <NavItem icon={CheckSquare} title="Tasks" />
              <NavItem icon={Flag} title="Reporting" />
              <NavItem icon={Users} title="Users" />
            </nav>

            <div className="mt-auto flex flex-col gap-6">
              <nav className="flex flex-col gap-1">
                <NavItem icon={LifeBuoy} title="Support" />
                <NavItem icon={Cog} title="Settings" />
              </nav>

              <div className="flex flex-col gap-4 rounded-lg bg-violet-50 px-4 py-5">
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-medium leading-5 text-violet-700">
                    Used space
                  </span>
                  <span className="text-sm leading-5 text-violet-500">
                    Your team has used 20% of your available space. Need more?
                  </span>
                </div>

                <div className="h-2 rounded-full bg-violet-100">
                  <div className="h-2 w-1/4 rounded-full bg-violet-600" />
                </div>

                <div className="flex gap-3">
                  <button
                    type="button"
                    className="text-sm font-medium text-violet-500"
                  >
                    Dismiss
                  </button>

                  <button
                    type="button"
                    className="text-sm font-medium text-violet-700"
                  >
                    Upgrade plan
                  </button>
                </div>
              </div>

              <div className="h-px bg-zinc-200" />

              <div className="flex items-center gap-3">
                <img
                  src="https://github.com/diego3g.png"
                  className="h-10 w-10 rounded-full"
                  alt=""
                />
                <div className="flex flex-col">
                  <span className="block text-sm font-semibold text-zinc-700">
                    Diego Fernandes
                  </span>
                  <span className="block text-sm text-zinc-500">
                    diego.schell.f@gmail.com
                  </span>
                </div>
                <LogOut className="ml-auto h-5 w-5 text-zinc-500" />
              </div>
            </div>
          </aside>

          <main className="overflow-hidden px-8 pb-12 pt-8">{children}</main>
        </div>
      </body>
    </html>
  )
}
