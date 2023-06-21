import { cva, type VariantProps } from 'cva'
import { Slot } from '@radix-ui/react-slot'
import { ButtonHTMLAttributes } from 'react'

const button = cva(
  [
    'rounded-lg px-4 py-2 text-sm font-semibold outline-none shadow-sm',
    'focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-violet-500',
    'active:opacity-80',
  ],
  {
    variants: {
      variant: {
        primary: 'bg-violet-600  text-white hover:bg-violet-700',
        outline: 'border border-zinc-300  text-zinc-700 hover:bg-zinc-50',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  },
)

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  asChild?: boolean
}

export function Button({ asChild, variant, className, ...props }: ButtonProps) {
  const Component = asChild ? Slot : 'button'

  return <Component {...props} className={button({ variant, className })} />
}
