'use client'

import { motion } from 'framer-motion'
import * as Tabs from '@radix-ui/react-tabs'

interface TabItemProps {
  value: string
  title: string
  isSelected: boolean
}

export function TabItem({ title, value, isSelected }: TabItemProps) {
  return (
    <Tabs.Trigger
      value={value}
      className="group relative px-1 pb-4 text-sm font-medium leading-5 text-zinc-500 outline-none hover:text-violet-700 data-[state=active]:text-violet-700"
    >
      <span className="whitespace-nowrap rounded group-focus:ring-2 group-focus:ring-violet-400 group-focus:ring-offset-4">
        {title}
      </span>

      {isSelected && (
        <motion.div
          layoutId="activeTab"
          className="absolute -bottom-px left-0 right-0 h-0.5 bg-violet-700"
        />
      )}
    </Tabs.Trigger>
  )
}
