import { Reducer } from 'react'
import { State, Action } from '../../types'

export const ADD_POST = 'ADD_POST'

export const postReducer: Reducer<State, Action> = (state, action): State => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, action.post],
      }
    default:
      return state
  }
}
