import React, { useReducer, createContext, Reducer } from 'react'
import { postReducer } from './reducers/postReducer'
import { State, Action, TStore } from '../types'

const initialStoreState: TStore = {
  state: {
    posts: [],
  },

  dispatch: () => ({
    type: '',
    post: { title: '', subtitle: '' },
  }),
}

export const StoreContext = createContext<TStore>(initialStoreState)

const Store: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer<Reducer<State, Action>>(
    postReducer,
    initialStoreState.state
  )

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  )
}

export default Store
