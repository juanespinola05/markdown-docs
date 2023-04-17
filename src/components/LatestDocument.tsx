import { MarkdownDocData } from '@/types'
import { FC, ReactElement } from 'react'
import Card from './Card'
import DocumentCardOptions from './DocumentCardOptions'
import DocumentIcon from '@/assets/document.svg'
import DocumentTimeAgo from './DocumentTimeAgo'
import Link from 'next/link'
interface IProps extends Pick<MarkdownDocData, 'title'> {
  docId: string
  lastEdition: string
}

const LatestDocument: FC<IProps> = ({
  lastEdition,
  title,
  docId
}): ReactElement => {
  return (
    <Card className='h-24 w-full bg-white dark:bg-slate-700 flex items-center'>
      <Link
        href={`/compose/${docId}`}
        title={title}
        className='h-full w-full text-slate-800 dark:text-gray-200 px-6 flex justify-center flex-col'
      >
        <h4 className='font-bold'>{title}</h4>
        <div className='flex gap-2 items-center'>
          <DocumentIcon className='w-6 fill-blue' />
          <DocumentTimeAgo timestamp={lastEdition} />
        </div>
      </Link>
      <div className='w-16 h-16 grid place-content-center'>
        <DocumentCardOptions />
      </div>
    </Card>
  )
}

export default LatestDocument
