import { FC, PropsWithChildren, ReactElement } from 'react'
import Card from './Card'

type IType = FC<PropsWithChildren & { className?: string }>

const TemplateCreator: IType = ({ children, className = '', ...props }): ReactElement => {
  return (
    <div className='inline-block' {...props}>
      <Card
        className={`w-48 h-60 max-w-xs ${className}`}
      >
        {children}
      </Card>
    </div>
  )
}

export default TemplateCreator
