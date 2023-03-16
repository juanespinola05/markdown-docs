import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { ReactElement } from 'react'
import AppLayout from '@/layout/AppLayout'
import { UserProvider } from '@/context/user'

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
