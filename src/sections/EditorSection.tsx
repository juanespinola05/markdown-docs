'use client'
import { FC, ReactElement, useEffect, useState } from 'react'
import '@uiw/react-md-editor/markdown-editor.css'
import '@uiw/react-markdown-preview/markdown.css'
import dynamic from 'next/dynamic'
import useDebounce from '@/hooks/useDebounce'
import { MarkdownDocFromCollection } from '@/types'
import useStorage from '@/hooks/useStorage'

const MDEditor = dynamic(
  async () => await import('@uiw/react-md-editor'),
  { ssr: false }
)

interface IProps extends Pick<MarkdownDocFromCollection, 'content' | 'docId' > {}

const EditorSection: FC<IProps> = ({
  docId,
  content = ''
}): ReactElement => {
  const [value, setValue] = useState<string | undefined>(content)
  const debouncedValue = useDebounce(value, 5000)
  const { updateDocument } = useStorage()

  useEffect(() => {
    void updateDocument({ content: debouncedValue }, docId)
  }, [debouncedValue])

  return (
    <section className='h-screen'>
      <div data-color-mode='light' className='bg-pink-200 h-full'>
        <MDEditor
          height={'100%' as any}
          value={value}
          onChange={setValue}
        />
      </div>
    </section>
  )
}

export default EditorSection
