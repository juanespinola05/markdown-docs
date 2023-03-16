import Container from '@/components/Container'
import React, { FC, PropsWithChildren, ReactElement } from 'react'

const Section: FC<PropsWithChildren<React.HTMLAttributes<HTMLElement>>> = ({ children, ...props }): ReactElement => {
  return (
    <section {...props}>
      <Container>
        {children}
      </Container>
    </section>
  )
}

export default Section
