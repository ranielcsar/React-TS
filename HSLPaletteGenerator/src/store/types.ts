import { Dispatch } from 'react'

export type Color = {
  hue: number
  saturation: number
  lightness: number
}

export type State = {
  color: Color
}

export type TStore = {
  state: State
  dispatch: Dispatch<Action>
}

export type Action = {
  type: string
  payload: {
    color: Color
  }
}
