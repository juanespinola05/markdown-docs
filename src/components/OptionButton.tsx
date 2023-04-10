import { FC, HTMLAttributes, PropsWithChildren } from 'react'

const OptionButton: FC<PropsWithChildren<HTMLAttributes<HTMLButtonElement>>> = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className='flex items-center w-full h-full gap-2 pl-2 gray-button-hover focus:outline-none text-slate-500 dark:text-slate-200'
    >
      {children}
    </button>
  )
}

export default OptionButton
