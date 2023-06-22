import { LogOut } from 'lucide-react'
import { Button } from '../Button'

export interface ProfileProps {}

export function Profile() {
  return (
    <div className="flex items-center gap-3">
      <img
        src="https://github.com/diego3g.png"
        className="h-10 w-10 rounded-full"
        alt=""
      />
      <div className="flex flex-col">
        <span className="block text-sm font-semibold text-zinc-700 dark:text-zinc-100">
          Diego Fernandes
        </span>
        <span className="block text-sm text-zinc-500 dark:text-zinc-400">
          diego.schell.f@gmail.com
        </span>
      </div>
      <Button variant="ghost" className="ml-auto">
        <LogOut className="h-5 w-5 text-zinc-500 dark:text-zinc-400" />
      </Button>
    </div>
  )
}
