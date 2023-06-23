'use client'

import { useState } from 'react'
import * as Select from '@/components/Form/Select'
import { countries } from '@/utils/countries'
import Flag from 'react-world-flags'

export interface CountrySelectProps {}

type CountryCode = keyof typeof countries

export function CountrySelect(props: CountrySelectProps) {
  const [value, setValue] = useState<CountryCode | undefined>(undefined)

  function handleCountrySelected(value: string) {
    setValue(value as CountryCode)
  }

  return (
    <Select.Root
      name="country"
      value={value}
      onValueChange={handleCountrySelected}
    >
      <Select.Trigger>
        <Select.Value placeholder="Select your country...">
          {value && (
            <>
              <Flag
                className="h-5 w-5 rounded-full object-cover object-center"
                code={value}
              />
              {countries[value]}
            </>
          )}
        </Select.Value>
      </Select.Trigger>

      <Select.Content>
        {Object.entries(countries).map(([code, title]) => {
          return (
            <Select.Item key={code} value={code}>
              <Select.ItemPrefix>
                <Flag
                  className="h-5 w-5 rounded-full object-cover object-center"
                  code={code}
                />
              </Select.ItemPrefix>
              <Select.ItemText>{title}</Select.ItemText>
            </Select.Item>
          )
        })}
      </Select.Content>
    </Select.Root>
  )
}
