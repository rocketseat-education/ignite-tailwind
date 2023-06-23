'use client'

import * as Select from '@radix-ui/react-select'
import * as ScrollArea from '@radix-ui/react-scroll-area'
import { ComponentProps } from 'react'

export interface ContentProps extends ComponentProps<typeof Select.Content> {}

export function Content({ children, ...props }: ContentProps) {
  return (
    <Select.Portal>
      <Select.Content
        {...props}
        sideOffset={8}
        side="bottom"
        position="popper"
        className="group z-10 w-[var(--radix-select-trigger-width)] animate-slideUpAndFade overflow-hidden rounded-lg border border-zinc-200 bg-white will-change-[opacity,transform] dark:border-zinc-700 dark:bg-zinc-800"
      >
        <ScrollArea.Root className="h-full w-full" type="auto">
          <Select.Viewport className="max-h-[300px]" asChild>
            <ScrollArea.Viewport className="h-full w-full overflow-y-scroll">
              {children}
            </ScrollArea.Viewport>
          </Select.Viewport>

          <ScrollArea.Scrollbar
            className="invisible flex w-2.5 touch-none select-none bg-zinc-100 p-0.5 group-hover:visible dark:bg-zinc-700"
            orientation="vertical"
          >
            <ScrollArea.Thumb className="relative flex-1 rounded-lg bg-zinc-300 before:absolute before:left-1/2 before:top-1/2 before:h-full before:min-h-[44px] before:w-full before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2 before:content-[''] dark:bg-zinc-500" />
          </ScrollArea.Scrollbar>
        </ScrollArea.Root>
      </Select.Content>
    </Select.Portal>
  )
}
