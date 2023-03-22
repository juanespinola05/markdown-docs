import { FC, PropsWithChildren, ReactElement } from 'react'

const Card: FC<PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>> = ({ children, className, ...props }): ReactElement => {
  return (
    <div
      className={`overflow-hidden rounded-lg shadow-md bg-white dark:bg-blue hover:shadow-xl transition-shadow duration-300 ease-in-out ${className !== undefined ? className : ''}`}
      {...props}
    >
      {children}
    </div>
  )
}

export default Card