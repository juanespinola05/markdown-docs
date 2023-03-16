import Section from '@/layout/Section'
import { FC, ReactElement } from 'react'
import HorizontalScroll from '../components/HorizontalScroll'

const TemplatesGallery: FC = (): ReactElement => {
  return (
    <Section className='h-80 p-4 dark:bg-blue dark:bg-opacity-10 bg-gray-200'>
      <h2 className='text-gray-800 dark:text-white'>Create a new document</h2>
      <HorizontalScroll />
    </Section>
  )
}

export default TemplatesGallery
