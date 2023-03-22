import { FC, ReactElement } from 'react'

const Spinner: FC = (): ReactElement => {
  return (
    <div className='flex items-center justify-center w-full h-full'>
      <div className='w-10 h-10 rounded-full border-4 border-blue border-t-transparent animate-spin' />
    </div>
  )
}

export default Spinner
