import { ComponentProps } from 'react'

export type RootProps = ComponentProps<'div'>

export function Root(props: RootProps) {
  return <div {...props} />
}
