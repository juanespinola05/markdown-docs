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
          <h2 className='text-2xl font-bold'>Recent Documents</h2>
          <p className='text-slate-500 dark:text-slate-400'>
            <strong>{documents?.length ?? 0}</strong> documents
          </p>
        </div>
        <ListOfLatestDocuments documents={documents} />
      </div>
    </Section>
  )
}

export default LatestDocuments
