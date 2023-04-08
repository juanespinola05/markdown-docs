import Link from 'next/link'
import { FC } from 'react'
import Container from './Container'
import LoggedInDetails from './LoggedInDetails'
import Logo from './Logo'
import { useAuthUser } from 'next-firebase-auth'

const Header: FC = () => {
  const authUser = useAuthUser()
  return (
    <header className='h-16 bg-darkBlue'>
      <Container>
        <div className='flex justify-between items-center h-full'>
          <Link href='/'>
            <Logo />
          </Link>
          {
            authUser.email === null && (
              <div className='flex gap-2'>
                <Link
                  href='/auth'
                  className='py-1 px-2 rounded-md font-bold text-darkBlue bg-white'
                >
                  Start Creating
                </Link>
              </div>
            )
          }
          {
            authUser.displayName !== null && (
              <LoggedInDetails
                avatar={authUser.photoURL as string}
                displayName={authUser.displayName}
              />
            )
          }
        </div>
      </Container>
    </header>
  )
}

export default Header
