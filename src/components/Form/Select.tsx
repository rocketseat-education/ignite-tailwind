'use client'

import * as SelectPrimitive from '@radix-ui/react-select'
import { Check, ChevronDown } from 'lucide-react'

export interface SelectProps {}

export function Select(props: SelectProps) {
  return (
    <SelectPrimitive.Root>
      <SelectPrimitive.Trigger className="flex h-11 w-full items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm data-[placeholder]:text-zinc-600">
        <SelectPrimitive.Value
          placeholder="Select a country..."
          className="text-black"
        />
        <SelectPrimitive.Icon>
          <ChevronDown className="h-5 w-5 text-zinc-500" />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>

      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          side="bottom"
          position="popper"
          sideOffset={8}
          className="z-10 w-[--radix-select-trigger-width] overflow-hidden rounded-lg border border-zinc-200 bg-white"
        >
          <SelectPrimitive.Viewport>
            <SelectPrimitive.Item
              value="br"
              className="flex items-center justify-between gap-2 px-3 py-2.5 outline-none data-[highlighted]:bg-zinc-50"
            >
              <SelectPrimitive.ItemText className="text-black">
                Brazil
              </SelectPrimitive.ItemText>

              <SelectPrimitive.ItemIndicator>
                <Check className="h-4 w-4 text-violet-500" />
              </SelectPrimitive.ItemIndicator>
            </SelectPrimitive.Item>

            <SelectPrimitive.Item
              value="us"
              className="flex items-center justify-between gap-2 px-3 py-2.5 outline-none data-[highlighted]:bg-zinc-50"
            >
              <SelectPrimitive.ItemText className="text-black">
                United States
              </SelectPrimitive.ItemText>

              <SelectPrimitive.ItemIndicator>
                <Check className="h-4 w-4 text-violet-500" />
              </SelectPrimitive.ItemIndicator>
            </SelectPrimitive.Item>
          </SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  )
}
