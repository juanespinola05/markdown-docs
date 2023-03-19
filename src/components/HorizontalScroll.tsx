import { FC, PropsWithChildren, ReactElement } from 'react'

const HorizontalScroll: FC<PropsWithChildren> = ({ children }): ReactElement => {
  return (
    <div
      className='flex overflow-x-scroll py-4 hide-scroll-bar'
    >
      <div
        className='flex flex-nowrap gap-4'
      >
        {children}
      </div>
    </div>
  )
}

export default HorizontalScroll
