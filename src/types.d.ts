export interface UserData {
  displayName: string | null
  photoURL: string | null
  email: string | null
}

export type UserState = UserData | null | undefined
