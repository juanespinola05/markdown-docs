import { User } from '@/types'
import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCR9VMoa3z7WSDNvfkeXNJh8MsM5dWQUME',
  authDomain: 'markdown-docs-20776.firebaseapp.com',
  projectId: 'markdown-docs-20776',
  storageBucket: 'markdown-docs-20776.appspot.com',
  messagingSenderId: '435085101631',
  appId: '1:435085101631:web:3e475cc334b8a4e9b8c68a',
  measurementId: 'G-KRW4QJB350'
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export const loginWithGoogle = async (): Promise<User> => {
  const googleProvider = new GoogleAuthProvider()
  return await signInWithPopup(auth, googleProvider).then(credentials => {
    const { displayName, photoURL, email } = credentials.user
    return {
      displayName,
      photoURL,
      email
    }
  })
}
