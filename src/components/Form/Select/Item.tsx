'use client'

import * as Select from '@radix-ui/react-select'
import { Check } from 'lucide-react'
import { ComponentProps } from 'react'

export interface ItemProps extends ComponentProps<typeof Select.Item> {}

export function Item({ children, ...props }: ItemProps) {
  return (
    <Select.Item
      className="flex items-center gap-2 px-3 py-2.5 data-[highlighted]:bg-zinc-50 data-[highlighted]:outline-none dark:data-[highlighted]:bg-zinc-700"
      {...props}
    >
      {children}

      <Select.ItemIndicator className="ml-auto">
        <Check className="h-4 w-4 text-violet-500 dark:text-violet-300" />
      </Select.ItemIndicator>
    </Select.Item>
  )
}
