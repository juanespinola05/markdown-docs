import ListOfLatestDocuments from '@/components/ListOfLatestDocuments'
import Section from '@/layout/Section'
import { FC, ReactElement } from 'react'

const LatestDocuments: FC = (): ReactElement => {
  return (
    <Section>
      <div className='py-4'>
        <div className='pb-4'>
          <h2 className='text-xl'>Recent Documents</h2>
        </div>
        <ListOfLatestDocuments />
      </div>
    </Section>
  )
}

export default LatestDocuments
