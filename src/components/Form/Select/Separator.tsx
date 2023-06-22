'use client'

import * as Select from '@radix-ui/react-select'
import { ComponentProps } from 'react'

export interface SeparatorProps
  extends ComponentProps<typeof Select.Separator> {}

export function Separator(props: SeparatorProps) {
  return <Select.Separator {...props} />
}
