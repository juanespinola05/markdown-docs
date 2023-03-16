import { FC, PropsWithChildren, ReactElement } from 'react'

const Template: FC<PropsWithChildren> = ({ children }): ReactElement => {
  return (
    <div className='inline-block'>
      <div
        className='w-48 h-60 max-w-xs overflow-hidden rounded-lg shadow-md bg-white dark:bg-blue hover:shadow-xl transition-shadow duration-300 ease-in-out'
      >
        {children}
      </div>
    </div>
  )
}

export default Template
