import useTimeAgo from '@/hooks/useTimeAgo'
import { MarkdownDocData } from '@/types'
import { FC, ReactElement } from 'react'
import Card from './Card'
import DocumentCardOptions from './DocumentCardOptions'

interface IProps extends Pick<MarkdownDocData, 'title' | 'lastEdition'> {
  docId: string
}

const LatestDocument: FC<IProps> = ({
  lastEdition,
  title,
  docId
}): ReactElement => {
  const timeAgo = useTimeAgo(lastEdition ?? Date.now())
  return (
    <a href={`/compose/${docId}`} className='block' title={title}>
      <Card className='h-80 w-full md:w-52 border-[1px] border-gray-200'>
        <div className='h-60' />
        <div className='h-20 border-[1px] px-2 py-4'>
          <h4 className='text-slate-800'>{title}</h4>
          <div className='flex items-center justify-between'>
            <div className='flex gap-2'>
              <div className='w-4 h-4 rounded-sm bg-orange-600' />
              <p className='text-slate-600 text-xs'>Last edition {timeAgo}</p>
            </div>
            <DocumentCardOptions />
          </div>
        </div>
      </Card>
    </a>
  )
}

export default LatestDocument
