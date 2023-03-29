import ListOfLatestDocuments from '@/components/ListOfLatestDocuments'
import Section from '@/layout/Section'
import { DocumentData } from 'firebase/firestore'
import { FC, ReactElement } from 'react'

interface IProps {
  documents: DocumentData[] | null
}

const LatestDocuments: FC<IProps> = ({ documents }): ReactElement => {
  return (
    <Section>
      <div className='py-4'>
        <div className='pb-4'>
          <h2 className='text-xl'>Recent Documents</h2>
        </div>
        <ListOfLatestDocuments documents={documents} />
      </div>
    </Section>
  )
}

export default LatestDocuments
