import Header from '@/components/Header'
import { useTheme } from 'next-themes'
import { ComponentType, PropsWithChildren } from 'react'
import { withAuthUser } from 'next-firebase-auth'

const AppLayout: ComponentType<PropsWithChildren> = ({ children }) => {
  const { theme, setTheme } = useTheme()

  const handleThemeChange = (): void => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
  }
  return (
    <>
      <button
        className='fixed top-0 left-0'
        onClick={handleThemeChange}
      >
        change
      </button>
      <Header />
      <main>
        {children}
      </main>
    </>
  )
}

export default withAuthUser<PropsWithChildren>()(AppLayout)
