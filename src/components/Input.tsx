import { HTMLAttributes, forwardRef } from 'react'

type Props = HTMLAttributes<HTMLInputElement>

const Input = forwardRef<HTMLInputElement, Props>(({ children, ...props }, ref) => {
  return (
    <div className='mt-1.5 px-4 w-full h-12 flex gap-2 items-center border border-gray-200 bg-white rounded-lg hover:border-gray-500 focus-within:border-gray-500 transition-colors'>
      <span className='flex w-full items-center'>
        {children}
        <input ref={ref} {...props} className='flex-1 inline-block outline-none' />
      </span>
    </div>
  )
})

export default Input
