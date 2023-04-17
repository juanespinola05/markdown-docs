import { MarkdownDocFromCollection } from '@/types'
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
    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 place-items-center'>
      {
        documents.map(doc => {
          return (
            <LatestDocument
              key={doc.docId} {...doc as MarkdownDocFromCollection}
            />
          )
        })
      }
    </div>
  )
}

export default ListOfLatestDocuments
