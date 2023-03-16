import { TEMPLATES } from '@/constants/templates'
import { FC, ReactElement } from 'react'
import Template from './Template'

const HorizontalScroll: FC = (): ReactElement => {
  return (
    <div
      className='flex overflow-x-scroll py-4 hide-scroll-bar'
    >
      <div
        className='flex flex-nowrap gap-4'
      >
        <Template>
          <p className='text-7xl text-center flex items-center h-full justify-center dark:text-yellow text-blue '>+</p>
        </Template>
        {
          TEMPLATES.map(({ name, image }) => (
            <Template key={name}>
              <img className='w-full h-full' src={image} alt={name} title={name} />
            </Template>
          ))
        }
      </div>
    </div>
  )
}

export default HorizontalScroll
