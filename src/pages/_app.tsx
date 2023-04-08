import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { ReactElement } from 'react'
import { UserProvider } from '@/context/user/context'
import initAuth from '../../initAuth'
import { NextComponentType } from 'next'

initAuth()

type Page = NextComponentType & {
  PageLayout: any
}

export default function App ({ Component, pageProps }: AppProps): ReactElement {
  const component = Component as Page
  return (
    <ThemeProvider attribute='class'>
      <UserProvider>
        {
          component.PageLayout !== undefined
            ? (
              <component.PageLayout>
                <Component {...pageProps} />
              </component.PageLayout>
              )
            : (
              <Component {...pageProps} />

              )
        }
      </UserProvider>
    </ThemeProvider>
  )
}
