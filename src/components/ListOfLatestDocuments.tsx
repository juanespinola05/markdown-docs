import { MarkdownDocData } from '@/types'
import { DocumentData } from 'firebase/firestore'
import { FC, ReactElement } from 'react'
import LatestDocument from './LatestDocument'

interface IProps {
  documents: DocumentData[] | null
}

const ListOfLatestDocuments: FC<IProps> = ({ documents }): ReactElement => {
  if (documents === null) {
    return (
      <p className='p-2 rounded-md bg-orange-300 border-2 border-orange-500'>You must login to see your documents</p>
    )
  }
  if (documents.length === 0) {
    return (
      <p
        className='p-2 rounded-md bg-orange-300 border-2 border-orange-500'
      >
        No document created yet!
      </p>
    )
  }
  return (
    <div className='grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 xl:grid-cols-5 place-items-center'>
      {
        documents.map(doc => {
          return (
            <LatestDocument
              key={doc.title} {...doc as MarkdownDocData}
            />
          )
        })
      }
    </div>
  )
}

export default ListOfLatestDocuments
