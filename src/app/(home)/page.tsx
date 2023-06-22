import * as Input from '@/components/Form/Input'
import * as FileInput from '@/components/Form/FileInput'
import * as Select from '@/components/Form/Select'
import { Bold, Italic, Link, List, ListOrdered, Mail } from 'lucide-react'
import { Button } from '@/components/Button'
import { SettingsTabs } from './SettingsTabs'
import { CountrySelect } from './CountrySelect'
import { Textarea } from '@/components/Form/Textarea'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>
      <SettingsTabs />
      <div className="mt-6 flex flex-col">
        <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
          <div className="flex flex-col gap-1">
            <h2 className="text-lg font-medium text-zinc-900">Personal info</h2>
            <span className="text-sm text-zinc-500">
              Update your photo and personal details here.
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Button type="button" variant="outline">
              Cancel
            </Button>
            <Button type="submit" form="settings" variant="primary">
              Save
            </Button>
          </div>
        </div>
      </div>

      <form
        id="settings"
        className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200"
      >
        <div className="grid gap-3 lg:grid-cols-form">
          <label
            htmlFor="firstName"
            className="text-sm font-medium text-zinc-700"
          >
            Name
          </label>
          <div className="grid gap-6 lg:grid-cols-2">
            <Input.Root>
              <Input.Control
                name="firstName"
                id="firstName"
                type="text"
                defaultValue="Diego"
              />
            </Input.Root>
            <Input.Root>
              <Input.Control
                name="lastName"
                type="text"
                defaultValue="Fernandes"
              />
            </Input.Root>
          </div>
        </div>

        <div className="grid gap-3 pt-5 lg:grid-cols-form">
          <label htmlFor="email" className="text-sm font-medium text-zinc-700">
            Email address
          </label>
          <div className="flex gap-3">
            <Input.Root>
              <Input.Prefix>
                <Mail className="h-5 w-5 text-zinc-500" />
              </Input.Prefix>
              <Input.Control
                id="email"
                type="email"
                name="email"
                defaultValue="diego.schell.f@gmail.com"
              />
            </Input.Root>
          </div>
        </div>

        <div className="grid gap-3 pt-5 lg:grid-cols-form">
          <label
            htmlFor="photo"
            className="flex flex-col text-sm font-medium leading-relaxed text-zinc-700"
          >
            Your photo
            <span className="text-sm font-normal text-zinc-500">
              This will be displayed on your profile.
            </span>
          </label>
          <FileInput.Root className="flex flex-col items-start gap-5 lg:flex-row">
            <FileInput.ImagePreview />
            <FileInput.Trigger />
            <FileInput.Control accept="image/*" />
          </FileInput.Root>
        </div>

        <div className="grid gap-3 pt-5 lg:grid-cols-form">
          <label htmlFor="role" className="text-sm font-medium text-zinc-700">
            Role
          </label>
          <div className="flex gap-3">
            <Input.Root>
              <Input.Control
                name="role"
                id="role"
                defaultValue="Product Designer"
              />
            </Input.Root>
          </div>
        </div>

        <div className="grid gap-3 pt-5 lg:grid-cols-form">
          <label
            htmlFor="country"
            className="flex flex-col text-sm font-medium leading-relaxed text-zinc-700"
          >
            Country
          </label>

          <CountrySelect />
        </div>

        <div className="grid gap-3 pt-5 lg:grid-cols-form">
          <label
            htmlFor="timezone"
            className="flex flex-col text-sm font-medium leading-relaxed text-zinc-700"
          >
            Timezone
          </label>
          <Select.Root>
            <Select.Trigger>
              <Select.Value placeholder="Select your timezone..." />
            </Select.Trigger>

            <Select.Content>
              <Select.Item value="utc-3">
                <Select.ItemText>
                  Pacific Standard Time (PST)
                  <span className="text-sm text-zinc-500">UTC 08:00</span>
                </Select.ItemText>
              </Select.Item>
            </Select.Content>
          </Select.Root>
        </div>

        <div className="grid gap-3 pt-5 lg:grid-cols-form">
          <label
            htmlFor="bio"
            className="flex flex-col text-sm font-medium leading-relaxed text-zinc-700"
          >
            Bio
            <span className="text-sm font-normal text-zinc-500">
              Write a short introduction.
            </span>
          </label>
          <div className="flex flex-col gap-3">
            <div className="grid gap-3 lg:grid-cols-2">
              <Select.Root defaultValue="normal">
                <Select.Trigger>
                  <Select.Value />
                </Select.Trigger>

                <Select.Content>
                  <Select.Item value="normal">
                    <Select.ItemText>Normal text</Select.ItemText>
                  </Select.Item>
                  <Select.Item value="md">
                    <Select.ItemText>Markdown</Select.ItemText>
                  </Select.Item>
                </Select.Content>
              </Select.Root>
              <div className="flex items-center gap-1">
                <Button variant="ghost">
                  <Bold className="h-4 w-4 text-zinc-400" strokeWidth={3} />
                </Button>
                <Button variant="ghost">
                  <Italic className="h-4 w-4 text-zinc-400" strokeWidth={3} />
                </Button>
                <Button variant="ghost">
                  <Link className="h-4 w-4 text-zinc-400" strokeWidth={3} />
                </Button>
                <Button variant="ghost">
                  <List className="h-4 w-4 text-zinc-400" strokeWidth={3} />
                </Button>
                <Button variant="ghost">
                  <ListOrdered
                    className="h-4 w-4 text-zinc-400"
                    strokeWidth={3}
                  />
                </Button>
              </div>
            </div>
            <Textarea
              name="bio"
              id="bio"
              defaultValue="I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development."
            />
          </div>
        </div>

        <div className="grid gap-3 pt-5 lg:grid-cols-form">
          <label
            htmlFor="bio"
            className="flex flex-col text-sm font-medium leading-relaxed text-zinc-700"
          >
            Portfolio projects
            <span className="text-sm font-normal text-zinc-500">
              Share a few snippets of your work.
            </span>
          </label>
          <FileInput.Root multiple>
            <FileInput.Trigger />
            <FileInput.FileList />
            <FileInput.Control />
          </FileInput.Root>
        </div>

        <div className="flex items-center justify-end gap-2 pt-5">
          <Button type="button" variant="outline">
            Cancel
          </Button>
          <Button type="submit" form="settings" variant="primary">
            Save
          </Button>
        </div>
      </form>
    </>
  )
}
