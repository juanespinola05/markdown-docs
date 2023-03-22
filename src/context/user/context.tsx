import { UserContextState } from '@/types'
import { onIdTokenChanged } from 'firebase/auth'
import { createContext, useEffect, useReducer } from 'react'
import nookies from 'nookies'
import { auth } from '@/lib/firebase/client'
import userReducer, { REMOVE_FIREBASE_USER, SET_FIREBASE_USER } from './reducer'

const initialState: UserContextState = {
  user: null,
  firebaseUser: null
}

const UserContext = createContext<{ state: UserContextState, dispatch: React.Dispatch<any> }>({
  state: initialState, dispatch: () => null
})

const UserProvider = ({ children }: any): JSX.Element => {
  const [state, dispatch] = useReducer(userReducer, initialState)
  const value = { state, dispatch }

  useEffect(() => {
    return onIdTokenChanged(auth, (user) => {
      if (user === null) {
        dispatch({ type: REMOVE_FIREBASE_USER })
        nookies.set(undefined, 'token', '', { path: '/' })
        return
      }
      user.getIdToken()
        .then(token => {
          dispatch({ type: SET_FIREBASE_USER, payload: user })
          nookies.set(undefined, 'token', token, { path: '/' })
        })
        .catch(console.error)
    })
  }, [])

  useEffect(() => {
    const handle = setInterval(() => {
      const user = state.firebaseUser
      if (user != null) void user.getIdToken(true)
    }, 10 * 60 * 1000)

    return () => clearInterval(handle)
  }, [])

  return <UserContext.Provider value={value}> {children} </UserContext.Provider>
}

export { UserProvider, UserContext }
