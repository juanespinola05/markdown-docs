import { FC, ReactElement } from 'react'
import { MarkdownDocFromCollection } from '@/types'
import MDEditor from '@/components/MDeditor'

interface IProps extends Pick<MarkdownDocFromCollection, 'content' | 'docId' > {}

const EditorSection: FC<IProps> = ({
  docId,
  content
}): ReactElement => {
  return (
    <section className='h-screen'>
      <div data-color-mode='light' className='bg-gray-200 h-full'>
        <MDEditor docId={docId} content={content} />
      </div>
    </section>
  )
}

export default EditorSection
