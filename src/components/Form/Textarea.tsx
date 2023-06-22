import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export interface TextareaProps extends ComponentProps<'textarea'> {}

export function Textarea(props: TextareaProps) {
  return (
    <textarea
      className={twMerge(
        'flex min-h-[120px] w-full resize-y items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm outline-none',
        'focus-visible:border-violet-300 focus-visible:ring-4 focus-visible:ring-violet-100',
        props.className,
      )}
      {...props}
    />
  )
}
