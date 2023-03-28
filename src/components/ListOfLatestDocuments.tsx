import { FC, ReactElement } from 'react'
import LatestDocument from './LatestDocument'

const docs = [
  {
    title: 'Lista del super',
    createdAt: new Date(),
    editedAt: new Date()
  },
  {
    title: 'Lista del super',
    createdAt: new Date(),
    editedAt: new Date()
  },
  {
    title: 'Lista del super',
    createdAt: new Date(),
    editedAt: new Date()
  },
  {
    title: 'Lista del super',
    createdAt: new Date(),
    editedAt: new Date()
  },
  {
    title: 'Lista del super',
    createdAt: new Date(),
    editedAt: new Date()
  }
]

const ListOfLatestDocuments: FC = (): ReactElement => {
  return (
    <div className='grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 xl:grid-cols-5 place-items-center'>
      {
        docs.map(doc => <LatestDocument key={doc.title} {...doc} />)
      }
    </div>
  )
}

export default ListOfLatestDocuments
