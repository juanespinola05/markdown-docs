import { User } from 'firebase/auth'

export interface UserData {
  displayName: string | null
  photoURL: string | null
  email: string | null
}

export type UserState = UserData | null

export interface MarkdownDocData {
  title: string
  createdAt: Date
  content: string
  userId: string
  lastEdition: Date
}

type MarkdownDocCreationAttributes = Pick<MarkdownDocData, 'title' | 'content' | 'userId'>

export interface MarkdownDocFromCollection extends MarkdownDocData {
  docId: string
  lastEdition: string
}

export interface UserContextState {
  user: UserState
  firebaseUser: User | null
}
