import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { ReactElement } from 'react'
import { UserProvider } from '@/context/user/context'
import AppLayout from '@/layout/AppLayout'
import initAuth from '../../initAuth'

initAuth()

export default function App ({ Component, pageProps }: AppProps): ReactElement {
  return (
    <ThemeProvider attribute='class'>
      <UserProvider>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </UserProvider>
    </ThemeProvider>
  )
}
