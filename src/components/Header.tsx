import { FC, PropsWithChildren } from 'react'
import Container from './Container'

const Header: FC<PropsWithChildren> = ({ children }) => {
  return (
    <header className='h-16 bg-blue-700'>
      <Container>
        {children}
      </Container>
    </header>
  )
}

export default Header
