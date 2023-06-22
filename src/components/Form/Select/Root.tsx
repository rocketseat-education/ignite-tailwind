'use client'

import { ComponentProps, ReactNode } from 'react'
import * as Select from '@radix-ui/react-select'

export interface RootProps extends ComponentProps<typeof Select.Root> {
  children: ReactNode
}

export function Root(props: RootProps) {
  return <Select.Root {...props} />
}
