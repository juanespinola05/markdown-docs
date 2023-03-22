import { FC, ReactElement } from 'react'
import { TEMPLATES } from '@/constants/templates'
import Section from '@/layout/Section'
import TemplateCreator from '@/components/TemplateCreator'
import HorizontalScroll from '@/components/HorizontalScroll'
import CreateBlankDocument from '@/components/CreateBlankDocument'

const TemplatesGallery: FC = (): ReactElement => {
  return (
    <Section className='h-80 p-4 bg-gray-200'>
      <h2 className='text-gray-800'>Create a new document</h2>
      <HorizontalScroll>
        <CreateBlankDocument />
        {
          TEMPLATES.map(({ name, image }) => (
            <TemplateCreator key={name}>
              <img className='w-full h-full' src={image} alt={name} title={name} />
            </TemplateCreator>
          ))
        }
      </HorizontalScroll>
    </Section>
  )
}

export default TemplatesGallery
