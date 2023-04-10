import Header from '@/components/Header'
import { ComponentType, PropsWithChildren } from 'react'
import { withAuthUser } from 'next-firebase-auth'

const AppLayout: ComponentType<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
    </>
  )
}

export default withAuthUser<PropsWithChildren>()(AppLayout)
