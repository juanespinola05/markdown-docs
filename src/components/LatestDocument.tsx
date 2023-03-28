import { MarkdownDocData } from '@/types'
import { FC, ReactElement } from 'react'
import Card from './Card'
import DocumentCardOptions from './DocumentCardOptions'

interface IProps extends Partial<MarkdownDocData> {}

const LatestDocument: FC<IProps> = ({
  createdAt,
  lastEdition,
  title
}): ReactElement => {
  return (
    <Card className='h-80 w-full md:w-52 border-[1px] border-gray-200'>
      <div className='h-60' />
      <div className='h-20 border-[1px] px-2 py-4'>
        <h4 className='text-slate-800'>{title}</h4>
        <div className='flex items-center justify-between'>
          <div className='flex gap-2'>
            <div className='w-4 h-4 rounded-sm bg-orange-600' />
            <p className='text-slate-600 text-xs'>Edited 30 minutes ago</p>
          </div>
          <DocumentCardOptions />
        </div>
      </div>
    </Card>
  )
}

export default LatestDocument
