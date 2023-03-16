import { UseUserHook } from '@/context/user'
import { mapUserFromFirebaseAuth } from '@/utils/firebase'
import { onAuthStateChanged, Unsubscribe } from 'firebase/auth'
import { auth } from '../client'

export const authStateChanged = (onChange: UseUserHook['setUser']): Unsubscribe => {
  return onAuthStateChanged(auth, (data) => {
    const user = data !== null ? mapUserFromFirebaseAuth(data) : data
    onChange(user)
  })
}
