import { FC, PropsWithChildren, ReactElement } from 'react'

const Button: FC<PropsWithChildren> = ({ children }): ReactElement => {
  return (
    <button className='h-9 px-4 rounded-md inline-flex flex-shrink-0 whitespace-nowrap items-center gap-2 transition-colors duration-150 ease-in-out leading-none border-1 cursor-pointer border-gray-200/60 bg-gray-200/60 text-gray-900 hover:bg-gray-200 hover:text-gray-900' type='button'>
      {children}
    </button>
  )
}

export default Button
