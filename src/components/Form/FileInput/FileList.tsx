'use client'

import { FileItem } from './FileItem'
import { useFileInput } from './Root'

export interface FileListProps {}

export function FileList(props: FileListProps) {
  const { files } = useFileInput()

  if (files.length === 0) {
    return null
  }

  return (
    <div className="mt-4 flex flex-col gap-3">
      {files.map((file) => {
        return (
          <FileItem
            key={file.name}
            name={file.name}
            size={file.size}
            type={file.type}
            state="error"
          />
        )
      })}
    </div>
  )
}
