import { FC, PropsWithChildren, ReactElement } from 'react'
import Card from './Card'

type IType = FC<PropsWithChildren>

const TemplateCreator: IType = ({ children, ...props }): ReactElement => {
  return (
    <div className='inline-block' {...props}>
      <Card
        className='w-48 h-60 max-w-xs'
      >
        {children}
      </Card>
    </div>
  )
}

export default TemplateCreator
