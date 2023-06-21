import { Search, LifeBuoy, Cog } from 'lucide-react'
import * as Input from '../Form/Input'
import { Logo } from './Logo'
import { Profile } from './Profile'
import { Navigation } from './Navigation'
import { UsedSpaceWidget } from './UsedSpaceWidget'
import { NavItem } from './Navigation/NavItem'

export function Sidebar() {
  return (
    <aside className="fixed bottom-0 top-0 hidden w-80 flex-col gap-6 overflow-auto border-r border-zinc-200 px-5 py-8 scrollbar-thin scrollbar-track-zinc-100 scrollbar-thumb-zinc-300 lg:flex">
      <Logo />

      <Input.Root className="mx-1 w-auto">
        <Input.Prefix>
          <Search className="h-5 w-5 text-zinc-500" />
        </Input.Prefix>
        <Input.Control type="text" placeholder="Search" />
      </Input.Root>

      <Navigation />

      <div className="mt-auto flex flex-col gap-6">
        <nav className="flex flex-col gap-1">
          <NavItem icon={LifeBuoy} title="Support" />
          <NavItem icon={Cog} title="Settings" />
        </nav>

        <UsedSpaceWidget />
        <div className="h-px bg-zinc-200" />
        <Profile />
      </div>
    </aside>
  )
}
