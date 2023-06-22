'use client'

import {
  HTMLAttributes,
  createContext,
  useContext,
  useId,
  useState,
} from 'react'
import { twMerge } from 'tailwind-merge'

export interface RootProps extends HTMLAttributes<HTMLDivElement> {
  multiple?: boolean
}

interface FileInputContextType {
  id: string
  files: File[]
  multiple: boolean
  onFilesSelected: (files: File[]) => void
}

const FileInputContext = createContext({} as FileInputContextType)

export function Root({ multiple = false, ...props }: RootProps) {
  const id = useId()
  const [files, setFiles] = useState<File[]>([])

  return (
    <FileInputContext.Provider
      value={{ id, files, multiple, onFilesSelected: setFiles }}
    >
      <div {...props} className={twMerge('group w-full', props.className)} />
    </FileInputContext.Provider>
  )
}

export const useFileInput = () => useContext(FileInputContext)
