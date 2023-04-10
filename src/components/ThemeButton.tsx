import { useTheme } from 'next-themes'
import { FC, ReactElement } from 'react'

const ThemeButton: FC = (): ReactElement => {
  const { theme, setTheme } = useTheme()

  const handleThemeChange = (): void => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
  }
  return (
    <button
      className='w-16 h-8 rounded-full bg-gray-200 dark:bg-gray-700 relative'
      onClick={handleThemeChange}
    >
      <span className='rounded-full w-6 bg-white dark:bg-gray-900 block h-6 absolute top-1 left-1 dark:left-9 transition-all' />
    </button>
  )
}

export default ThemeButton
