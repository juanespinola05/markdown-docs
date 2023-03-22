import { UserContextState, UserData } from '@/types'
import { User } from 'firebase/auth'
import { useContext } from 'react'
import { UserContext } from './context'
import { REMOVE_USER, SET_FIREBASE_USER, SET_USER } from './reducer'

export interface UseUserHook extends UserContextState {
  setUser: (user: UserData | null) => void
  removeUser: () => void
  setFirebaseUser: (firebaseUser: User) => void
}

export default function useUser (): UseUserHook {
  const { dispatch, state } = useContext(UserContext)

  const setUser = (user: UserData | null): void => {
    const actionType = user === null ? REMOVE_USER : SET_USER
    dispatch({ type: actionType, payload: user })
  }

  const removeUser = (): void => {
    dispatch({ type: REMOVE_USER })
  }

  const setFirebaseUser = (firebaseUser: User): void => {
    dispatch({ type: SET_FIREBASE_USER, payload: firebaseUser })
  }

  return {
    ...state,
    setUser,
    removeUser,
    setFirebaseUser
  }
}
