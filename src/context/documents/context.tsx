import { DocumentContextState } from '@/types'
import { createContext, useReducer } from 'react'
import documentsReducer from './reducer'

const initialState: DocumentContextState = {
  documents: []
}

const DocumentsContext = createContext<{ state: DocumentContextState, dispatch: React.Dispatch<any> }>({
  state: initialState, dispatch: () => null
})

const DocumentsProvider = ({ children }: any): JSX.Element => {
  const [state, dispatch] = useReducer(documentsReducer, initialState)
  const value = { state, dispatch }

  return <DocumentsContext.Provider value={value}> {children} </DocumentsContext.Provider>
}

export { DocumentsProvider, DocumentsContext }
