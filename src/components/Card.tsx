import { FC, PropsWithChildren, ReactElement } from 'react'

const Card: FC<PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>> = ({ children, className, ...props }): ReactElement => {
  return (
    <div
      className={`overflow-hidden rounded-lg bg-white border-style ${className !== undefined ? className : ''}`}
      {...props}
    >
      {children}
    </div>
  )
}

export default Card
