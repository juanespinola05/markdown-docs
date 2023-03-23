import useUser from '@/context/user'
import Link from 'next/link'
import { FC } from 'react'
import Container from './Container'
import LoggedInDetails from './LoggedInDetails'
import LoginButton from './LoginButton'
import Logo from './Logo'

const Header: FC = () => {
  const { user } = useUser()
  return (
    <header className='h-16 bg-darkBlue'>
      <Container>
        <div className='flex justify-between items-center h-full'>
          <Link href='/'>
            <Logo />
          </Link>
          {
            user === null && (
              <div className='flex gap-2'>
                <LoginButton>Log In</LoginButton>
                <LoginButton variant='secondary'>Sign Up</LoginButton>
              </div>
            )
          }
          {
            user?.displayName !== undefined && (
              <LoggedInDetails
                avatar={user.photoURL as string}
                displayName={user.displayName as string}
              />
            )
          }
        </div>
      </Container>
    </header>
  )
}

export default Header
