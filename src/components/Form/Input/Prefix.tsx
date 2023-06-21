import { HTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

export interface PrefixProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export function Prefix(props: PrefixProps) {
  return <div {...props} className={twMerge('', props.className)} />
}
