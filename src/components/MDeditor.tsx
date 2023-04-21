'use client'
import dynamic from 'next/dynamic'
import { FC, ReactElement, useEffect, useState } from 'react'
import '@uiw/react-md-editor/markdown-editor.css'
import '@uiw/react-markdown-preview/markdown.css'
import useDebounce from '@/hooks/useDebounce'
import useStorage from '@/hooks/useStorage'
import { MarkdownDocFromCollection } from '@/types'

const Editor = dynamic(
  async () => await import('@uiw/react-md-editor'),
  { ssr: false }
)

interface IProps extends Pick<MarkdownDocFromCollection, 'content' | 'docId' > {}

const MDEditor: FC<IProps> = ({ docId, content }): ReactElement => {
  const [value, setValue] = useState<string | undefined>(content)
  const debouncedValue = useDebounce(value, 5000)
  const { updateDocument } = useStorage()

  useEffect(() => {
    void updateDocument({ content: debouncedValue }, docId)
  }, [debouncedValue])
  return (
    <Editor
      height={'100%' as any}
      value={value}
      onChange={setValue}
    />
  )
}

export default MDEditor
