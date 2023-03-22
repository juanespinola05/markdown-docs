import { UseUserHook } from '@/context/user'
import { mapUserFromFirebaseAuth } from '@/utils/firebase'
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, Unsubscribe, UserCredential } from 'firebase/auth'
import { auth } from '../client'

export const authStateChanged = (onChange: UseUserHook['setUser']): Unsubscribe => {
  return onAuthStateChanged(auth, (data) => {
    const user = data !== null ? mapUserFromFirebaseAuth(data) : data
    onChange(user)
  })
}

export const loginWithGoogle = async (): Promise<UserCredential> => {
  const googleProvider = new GoogleAuthProvider()
  return await signInWithPopup(auth, googleProvider)
}
