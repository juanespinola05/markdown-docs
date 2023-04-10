import Link from 'next/link'
import { FC } from 'react'
import Container from './Container'
import LoggedInDetails from './LoggedInDetails'
import Logo from './Logo'
import { useAuthUser } from 'next-firebase-auth'
import ThemeButton from './ThemeButton'
import LoginIcon from '@/assets/login.svg'

const Header: FC = () => {
  const authUser = useAuthUser()
  return (
    <header className='h-16 dark:bg-slate-900'>
      <Container>
        <div className='flex justify-between items-center h-full'>
          <Link href='/'>
            <Logo className='text-black dark:text-white' width='130' />
          </Link>
          <div className='flex gap-2 items-center'>
            <ThemeButton />
            {
              authUser.displayName !== null && (
                <LoggedInDetails
                  avatar={authUser.photoURL as string}
                  displayName={authUser.displayName}
                />
              )
              }
            {
                authUser.email === null && (
                  <div className='flex gap-2'>
                    <Link
                      href='/auth'
                      className='flex gap-2 h-10 items-center blue-button'
                    >
                      <LoginIcon className='w-6' />
                      Start Creating
                    </Link>
                  </div>
                )
              }
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header
