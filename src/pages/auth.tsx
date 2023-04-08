
import { ReactElement, useEffect, useState } from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import { AuthAction, withAuthUser } from 'next-firebase-auth'
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth'
import { auth } from '@/lib/firebase/client'

const firebaseAuthConfig = {
  signInFlow: 'popup',
  // Auth providers
  // https://github.com/firebase/firebaseui-web#configure-oauth-providers
  signInOptions: [
    {
      provider: GoogleAuthProvider.PROVIDER_ID
    },
    {
      provider: GithubAuthProvider.PROVIDER_ID
    }
  ],
  signInSuccessUrl: '/',
  credentialHelper: 'none',
  callbacks: {
    // https://github.com/firebase/firebaseui-web#signinsuccesswithauthresultauthresult-redirecturl
    signInSuccessWithAuthResult: () =>
      // Don't automatically redirect. We handle redirecting based on
      // auth state in withAuthComponent.js.
      false
  }
}

function Auth (): ReactElement {
  const [renderAuth, setRenderAuth] = useState(false)
  useEffect(() => {
    setRenderAuth(true)
  }, [])

  return (
    <div>
      {renderAuth
        ? (
          <StyledFirebaseAuth
            uiConfig={firebaseAuthConfig}
            firebaseAuth={auth}
          />
          )
        : null}
    </div>
  )
}

export default withAuthUser({
  whenAuthed: AuthAction.REDIRECT_TO_APP
})(Auth)
