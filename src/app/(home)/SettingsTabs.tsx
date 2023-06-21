'use client'

import { useState } from 'react'
import { TabItem } from '@/components/TabItem'
import * as Tabs from '@radix-ui/react-tabs'

export function SettingsTabs() {
  const [currentTab, setCurrentTab] = useState<string>('tab1')

  return (
    <Tabs.Root
      value={currentTab}
      onValueChange={setCurrentTab}
      className="max-w-full overflow-x-auto"
    >
      <Tabs.List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200">
        <TabItem
          isSelected={currentTab === 'tab1'}
          value="tab1"
          title="My details"
        />
        <TabItem
          isSelected={currentTab === 'tab2'}
          value="tab2"
          title="Profile"
        />
        <TabItem
          isSelected={currentTab === 'tab3'}
          value="tab3"
          title="Password"
        />
        <TabItem isSelected={currentTab === 'tab4'} value="tab4" title="Team" />
        <TabItem isSelected={currentTab === 'tab5'} value="tab5" title="Plan" />
        <TabItem
          isSelected={currentTab === 'tab6'}
          value="tab6"
          title="Billing"
        />
        <TabItem
          isSelected={currentTab === 'tab7'}
          value="tab7"
          title="Email"
        />
        <TabItem
          isSelected={currentTab === 'tab8'}
          value="tab8"
          title="Notifications"
        />
        <TabItem
          isSelected={currentTab === 'tab9'}
          value="tab9"
          title="Integrations"
        />
        <TabItem
          isSelected={currentTab === 'tab10'}
          value="tab10"
          title="API"
        />
      </Tabs.List>
    </Tabs.Root>
  )
}
