import { UserContextState } from '@/types'

export const SET_USER = 'SET_USER'
export const REMOVE_USER = 'REMOVE_USER'
export const SET_FIREBASE_USER = 'SET_FIREBASE_USER'
export const REMOVE_FIREBASE_USER = 'REMOVE_FIREBASE_USER'

export default function userReducer (state: UserContextState, action: any): UserContextState {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload }
    case REMOVE_USER:
      return { ...state, user: null }
    case SET_FIREBASE_USER:
      return { ...state, firebaseUser: action.payload }
    case REMOVE_FIREBASE_USER:
      return { ...state, firebaseUser: null }
    default:
      return state
  }
}
