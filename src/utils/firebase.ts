import { UserData } from '@/types'
import { User } from 'firebase/auth'

export const mapUserFromFirebaseAuth = (user: User | null): UserData | null => {
  if (user === null) return null
  const { displayName, photoURL, email } = user
  return {
    displayName,
    photoURL,
    email
  }
}
