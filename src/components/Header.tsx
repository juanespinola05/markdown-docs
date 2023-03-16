import { useUser } from '@/context/user'
import { FC } from 'react'
import Container from './Container'
import LoginButton from './LoginButton'

const Header: FC = () => {
  const { user } = useUser()
  return (
    <header className='h-16 bg-blue-700'>
      <Container>
        <div className='flex justify-between items-center h-full'>
          <p className='text-xl text-white'>Markdown docs</p>
          {
            user === null && <LoginButton />
          }
          {
            user?.displayName !== undefined && <p>{user.displayName}</p>
          }
        </div>
      </Container>
    </header>
  )
}

export default Header
