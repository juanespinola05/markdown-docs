import { isProduction, SERVICE_ACCOUNT } from '@/constants/environment'
import { init } from 'next-firebase-auth'

const initAuth = (): any => {
  init({
    authPageURL: '/auth',
    appPageURL: '/app',
    loginAPIEndpoint: '/api/login', // required
    logoutAPIEndpoint: '/api/logout', // required
    onLoginRequestError: (err) => {
      console.error(err)
    },
    onLogoutRequestError: (err) => {
      console.error(err)
    },
    firebaseAuthEmulatorHost: 'localhost:9099',
    firebaseAdminInitConfig: {
      credential: {
        projectId: SERVICE_ACCOUNT.project_id as string,
        clientEmail: SERVICE_ACCOUNT.client_email as string,
        // The private key must not be accessible on the client side.
        privateKey: SERVICE_ACCOUNT.private_key as string
      },
      databaseURL: 'https://my-example-app.firebaseio.com'
    },
    // Use application default credentials (takes precedence over firebaseAdminInitConfig if set)
    // useFirebaseAdminDefaultCredential: true,
    firebaseClientInitConfig: {
      apiKey: 'AIzaSyCR9VMoa3z7WSDNvfkeXNJh8MsM5dWQUME', // required
      authDomain: 'markdown-docs-20776.firebaseapp.com',
      databaseURL: 'https://my-example-app.firebaseio.com',
      projectId: 'markdown-docs-20776'
    },
    cookies: {
      name: 'cookies', // required
      // Keys are required unless you set `signed` to `false`.
      // The keys cannot be accessible on the client side.
      keys: [
        process.env.COOKIE_SECRET_CURRENT,
        process.env.COOKIE_SECRET_PREVIOUS
      ],
      httpOnly: true,
      maxAge: 12 * 60 * 60 * 24 * 1000, // twelve days
      overwrite: true,
      path: '/',
      sameSite: 'strict',
      secure: isProduction, // set this to false in local (non-HTTPS) development
      signed: true
    },
    onVerifyTokenError: (err) => {
      console.error(err)
    },
    onTokenRefreshError: (err) => {
      console.error(err)
    }
  })
}

export default initAuth
