import * as Input from '@/components/Form/Input'
import { Mail } from 'lucide-react'
import { Button } from '@/components/Button'
import { SettingsTabs } from './SettingsTabs'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>
      <SettingsTabs />
      <div className="mt-6 flex flex-col">
        <div className="flex items-center justify-between">
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
        className="mt-6 flex flex-col gap-5 divide-y divide-zinc-200"
      >
        <div className="grid grid-cols-form gap-3">
          <label
            htmlFor="firstName"
            className="text-sm font-medium text-zinc-700"
          >
            Name
          </label>
          <div className="grid grid-cols-2 gap-6">
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

        <div className="grid grid-cols-form gap-3 pt-5">
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

        <div className="grid grid-cols-form gap-3 pt-5">
          <label
            htmlFor="photo"
            className="flex flex-col text-sm font-medium leading-relaxed text-zinc-700"
          >
            Your photo
            <span className="text-sm font-normal text-zinc-500">
              This will be displayed on your profile.
            </span>
          </label>
          <div className="flex gap-3"></div>
        </div>

        <div className="grid grid-cols-form gap-3 pt-5">
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

        <div className="grid grid-cols-form gap-3 pt-5">
          <label
            htmlFor="country"
            className="flex flex-col text-sm font-medium leading-relaxed text-zinc-700"
          >
            Country
          </label>
          <div className="flex gap-3"></div>
        </div>

        <div className="grid grid-cols-form gap-3 pt-5">
          <label
            htmlFor="timezone"
            className="flex flex-col text-sm font-medium leading-relaxed text-zinc-700"
          >
            Timezone
          </label>
          <div className="flex gap-3"></div>
        </div>

        <div className="grid grid-cols-form gap-3 pt-5">
          <label
            htmlFor="bio"
            className="flex flex-col text-sm font-medium leading-relaxed text-zinc-700"
          >
            Bio
            <span className="text-sm font-normal text-zinc-500">
              Write a short introduction.
            </span>
          </label>
          <div className="flex gap-3"></div>
        </div>

        <div className="grid grid-cols-form gap-3 pt-5">
          <label
            htmlFor="bio"
            className="flex flex-col text-sm font-medium leading-relaxed text-zinc-700"
          >
            Portfolio projects
            <span className="text-sm font-normal text-zinc-500">
              Share a few snippets of your work.
            </span>
          </label>
          <div className="flex gap-3"></div>
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
