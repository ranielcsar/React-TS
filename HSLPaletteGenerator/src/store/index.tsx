import React, { useReducer, createContext, Reducer } from 'react'
import { State, Action, TStore } from './types'
import { colorReducer } from './reducers/colorReducer'

export const initialState: State = {
  color: {
    hue: 180,
    saturation: 50,
    lightness: 50
  }
}

export const StoreContext = createContext<TStore>({} as TStore)

const Store: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer<Reducer<State, Action>>(colorReducer, initialState)

  return <StoreContext.Provider value={{ state, dispatch }}>{children}</StoreContext.Provider>
}

export default Store
