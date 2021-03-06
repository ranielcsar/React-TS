import React, { useReducer, createContext, Reducer } from 'react'
import { postReducer } from './reducers/postReducer'
import { State, Action, TStore } from '../types'

const initialState: State = {
  posts: [],
}

export const StoreContext = createContext<TStore>({} as TStore)

const Store: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer<Reducer<State, Action>>(postReducer, initialState)

  return <StoreContext.Provider value={{ state, dispatch }}>{children}</StoreContext.Provider>
}

export default Store
