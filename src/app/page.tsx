import { SettingsTabs } from '@/components/SettingsTabs'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>
      <SettingsTabs />
      <div className="mt-6 flex flex-col border-b border-zinc-200 pb-5">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <h2 className="text-lg font-medium text-zinc-900">Personal info</h2>
            <span className="text-sm text-zinc-500">
              Update your photo and personal details here.
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-50">
              Cancel
            </button>
            <button className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white hover:bg-violet-700">
              Save
            </button>
          </div>
        </div>
      </div>
      <form className="mt-6 flex flex-col gap-5">
        <div className="grid gap-3 border-b border-zinc-200 pb-5 lg:grid-cols-form">
          <span className="text-sm font-medium text-zinc-700">Name</span>
          <div className="flex gap-3">
            <input
              type="text"
              defaultValue="Diego"
              className="w-full rounded-lg border border-zinc-300 px-3 py-2 outline-none focus:ring-2 focus:ring-violet-500"
            />
            <input
              type="text"
              defaultValue="Fernandes"
              className="w-full rounded-lg border border-zinc-300 px-3 py-2 outline-none focus:ring-2 focus:ring-violet-500"
            />
          </div>
          <div />
        </div>

        <div className="grid gap-3 border-b border-zinc-200 pb-5 lg:grid-cols-form">
          <span className="text-sm font-medium text-zinc-700">
            Email address
          </span>
          <div className="flex gap-3">
            <input
              type="email"
              defaultValue="diego.schell.f@gmail.com"
              className="w-full rounded-lg border border-zinc-300 px-3 py-2 outline-none focus:ring-2 focus:ring-violet-500"
            />
          </div>
          <div />
        </div>
      </form>
    </>
  )
}
