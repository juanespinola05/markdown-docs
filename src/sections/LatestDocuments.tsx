import Template from '@/components/Template'
import Section from '@/layout/Section'
import { FC, ReactElement } from 'react'

const LatestDocuments: FC = (): ReactElement => {
  return (
    <Section>
      <div className='py-4'>
        <h2 className='text-xl'>Recent Documents</h2>
        <div>
          <Template>
            <p>HOla</p>
          </Template>
        </div>
      </div>
    </Section>
  )
}

export default LatestDocuments
