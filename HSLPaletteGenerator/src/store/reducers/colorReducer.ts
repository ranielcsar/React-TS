import { Reducer } from 'react'
import { State, Action } from '../types'

export const MODIFY_HUE = 'MODIFY_HUE'
export const MODIFY_SATURATION = 'MODIFY_SATURATION'
export const MODIFY_LIGHTNESS = 'MODIFY_LIGHTNESS'

export const colorReducer: Reducer<State, Action> = (state, action): State => {
  switch (action.type) {
    case MODIFY_HUE:
      return {
        ...state,
        color: action.payload.color
      }
    case MODIFY_SATURATION:
      return {
        ...state,
        color: action.payload.color
      }
    case MODIFY_LIGHTNESS:
      return {
        ...state,
        color: action.payload.color
      }
    default:
      return state
  }
}
