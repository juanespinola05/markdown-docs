import { UserData, UserState } from '@/types'
import { useReducer, createContext, useContext } from 'react'

const SET_USER = 'SET_USER'
const REMOVE_USER = 'REMOVE_USER'

interface State {
  user: UserState
}

const initialState: State = {
  user: undefined
}

function userReducer (state: State, action: any): State {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload }
    case REMOVE_USER:
      return { ...state, user: null }
    default:
      return state
  }
}

const UserContext = createContext<{ state: State, dispatch: React.Dispatch<any> }>({
  state: initialState, dispatch: () => null
})

const UserProvider = ({ children }: any): JSX.Element => {
  const [state, dispatch] = useReducer(userReducer, initialState)
  const value = { state, dispatch }

  return <UserContext.Provider value={value}> {children} </UserContext.Provider>
}

export interface UseUserHook extends State {
  setUser: (user: UserData | null) => void
  removeUser: () => void
}

function useUser (): UseUserHook {
  const { dispatch, state } = useContext(UserContext)

  const setUser: UseUserHook['setUser'] = (user) => {
    const actionType = user === null ? REMOVE_USER : SET_USER
    dispatch({ type: actionType, payload: user })
  }

  const removeUser: UseUserHook['removeUser'] = () => {
    dispatch({ type: REMOVE_USER })
  }

  return {
    ...state,
    setUser,
    removeUser
  }
}

export { UserProvider, useUser }
