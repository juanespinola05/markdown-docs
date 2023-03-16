import Header from '@/components/Header'
import { useTheme } from 'next-themes'
import { FC, PropsWithChildren } from 'react'

const AppLayout: FC<PropsWithChildren> = ({ children }) => {
  const { systemTheme, theme, setTheme } = useTheme()
  // const currentTheme = theme === 'system' ? systemTheme : theme

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

export default AppLayout
