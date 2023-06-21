import { VariantProps, cva } from 'cva'
import { CheckCircle2, Image as ImageIcon, Trash2 } from 'lucide-react'
import { useMemo } from 'react'
import { twMerge } from 'tailwind-merge'

const fileItem = cva(
  'group flex items-start gap-4 rounded-lg border border-zinc-200 p-4',
  {
    variants: {
      state: {
        progress: {},
        complete: 'border-violet-500',
        error: 'bg-error-25 border-error-300',
      },
    },
    defaultVariants: {
      state: 'progress',
    },
  },
)

export interface FileItemProps extends VariantProps<typeof fileItem> {
  name: string
  size: number
  type: string
}

export function FileItem({ state, name, size, type }: FileItemProps) {
  const uploadProgress = state === 'complete' ? '100%' : '25%'

  const fileSize = useMemo(() => {
    const fileSizeInKB = size / 1024

    if (fileSizeInKB > 1024) {
      const fileSizeInMB = fileSizeInKB / 1024

      return fileSizeInMB.toFixed(1).concat(' MB')
    }

    return fileSizeInKB.toFixed(1).concat(' KB')
  }, [size])

  return (
    <div data-state={state} className={fileItem({ state })}>
      <span
        className={twMerge(
          'relative rounded-full border-4 border-violet-100 bg-violet-200 p-2',
          'group-data-[state=error]:border-error-50 group-data-[state=error]:bg-error-100',
        )}
      >
        <ImageIcon className="h-4 w-4 text-violet-600 group-data-[state=error]:text-error-600" />
      </span>

      {state === 'error' ? (
        <div className="flex flex-1 flex-col items-start gap-1">
          <div className="flex flex-col leading-relaxed">
            <span className="text-sm font-medium text-error-700">
              Upload failed, please try again
            </span>
            <span className="text-sm text-error-600">{name}</span>
          </div>

          <button
            type="button"
            className="text-sm font-semibold text-error-700 hover:text-error-900"
          >
            Try again
          </button>
        </div>
      ) : (
        <div className="flex flex-1 flex-col items-start gap-1">
          <div className="flex flex-col leading-relaxed">
            <span className="text-sm font-medium text-zinc-700">{name}</span>
            <span className="text-sm text-zinc-500">{fileSize}</span>
          </div>

          <div className="flex w-full items-center gap-3">
            <div className="h-2 flex-1 rounded-full bg-zinc-100">
              <div
                className="h-2 rounded-full bg-violet-600"
                style={{ width: uploadProgress }}
              />
            </div>
            <span className="text-sm font-medium text-zinc-700">
              {uploadProgress}
            </span>
          </div>
        </div>
      )}

      {state === 'complete' ? (
        <CheckCircle2 className="h-5 w-5 fill-violet-600 text-white" />
      ) : (
        <button
          type="button"
          className={twMerge(
            'text-zinc-500  hover:text-violet-500 ',
            'group-data-[state=error]:text-error-700 group-data-[state=error]:hover:text-error-900',
          )}
        >
          <Trash2 className="h-5 w-5" />
        </button>
      )}
    </div>
  )
}
