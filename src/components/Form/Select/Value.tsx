'use client'

import * as Select from '@radix-ui/react-select'
import { ComponentProps } from 'react'

export interface ValueProps extends ComponentProps<typeof Select.Value> {}

export function Value({ children, ...props }: ValueProps) {
  if (!children) {
    return <Select.Value {...props} />
  }

  return (
    <Select.Value {...props}>
      <span className="flex items-center gap-2 text-black dark:text-zinc-100">
        {children}
      </span>
    </Select.Value>
  )
}
