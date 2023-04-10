import {
  AuthAction,
  useAuthUser,
  withAuthUser,
  withAuthUserTokenSSR
} from 'next-firebase-auth'
import { ReactElement } from 'react'

const Demo = (): ReactElement => {
  const authUser = useAuthUser()
  return (
    <div>
      <p>Your email is {authUser.email !== null ? authUser.email : 'unknown'}.</p>
    </div>
  )
}

export const getServerSideProps = withAuthUserTokenSSR({
  whenUnauthed: AuthAction.REDIRECT_TO_LOGIN
})()

export default withAuthUser()(Demo)
