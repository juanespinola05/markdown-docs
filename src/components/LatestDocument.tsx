import { MarkdownDocData } from '@/types'
import { FC, ReactElement } from 'react'
import Card from './Card'
import DocumentCardOptions from './DocumentCardOptions'
import DocumentIcon from '@/assets/document.svg'
import DocumentTimeAgo from './DocumentTimeAgo'

interface IProps extends Pick<MarkdownDocData, 'title' | 'lastEdition'> {
  docId: string
}

const LatestDocument: FC<IProps> = ({
  lastEdition,
  title,
  docId
}): ReactElement => {
  return (
    <a href={`/compose/${docId}`} className='block' title={title}>
      <Card className='h-80 w-full md:w-52 border-[1px] border-gray-200'>
        <div className='h-60' />
        <div className='h-20 border-[1px] px-2 py-4'>
          <h4 className='text-slate-800 pl-1'>{title}</h4>
          <div className='flex items-center justify-between'>
            <div className='flex gap-2 items-center'>
              <DocumentIcon className='w-6 fill-blue' />
              <DocumentTimeAgo timestamp={lastEdition} />
            </div>
            <DocumentCardOptions />
          </div>
        </div>
      </Card>
    </a>
  )
}

export default LatestDocument
