import { UserData } from '@/types'
import { User } from 'firebase/auth'
import { DocumentData, Timestamp } from 'firebase/firestore'

export const mapUserFromFirebaseAuth = (user: User | null): UserData | null => {
  if (user === null) return null
  const { displayName, photoURL, email } = user
  return {
    displayName,
    photoURL,
    email
  }
}

export const serializeDocumentData = (document: DocumentData): object => {
  const entries = Object.entries(document)
  const serialized = entries.map(([key, value]) => (
    value instanceof Timestamp
      ? [key, new Date(value.seconds * 1000).toISOString()]
      : [key, value]
  )
  )

  return Object.fromEntries(serialized)
}
