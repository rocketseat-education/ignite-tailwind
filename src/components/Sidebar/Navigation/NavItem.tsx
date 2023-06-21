import { ChevronDown } from 'lucide-react'
import { ElementType } from 'react'

interface NavItemProps {
  title: string
  icon: ElementType
}

export function NavItem({ title, icon: Icon }: NavItemProps) {
  return (
    <a
      href=""
      className="group flex items-center gap-3 rounded px-3 py-2 text-zinc-500 outline-none hover:bg-violet-50 focus-visible:ring-2 focus-visible:ring-violet-500"
    >
      <Icon className="h-5 w-5 flex-shrink-0" />
      <span className="font-medium text-zinc-700 group-hover:text-violet-500">
        {title}
      </span>
      <ChevronDown className="ml-auto h-5 w-5 text-zinc-400" />
    </a>
  )
}
