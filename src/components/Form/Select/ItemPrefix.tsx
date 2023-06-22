'use client'

import { ReactNode } from 'react'

export interface ItemPrefixProps {
  children: ReactNode
}

export function ItemPrefix({ children }: ItemPrefixProps) {
  return <div>{children}</div>
}
