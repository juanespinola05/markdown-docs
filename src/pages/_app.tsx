import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { ReactElement } from 'react'
import { UserProvider } from '@/context/user/context'

export default function App ({ Component, pageProps }: AppProps): ReactElement {
  return (
    <ThemeProvider attribute='class'>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </ThemeProvider>
  )
}
