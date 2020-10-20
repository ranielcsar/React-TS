import { Reducer } from 'react'
import { State, Action } from '../types'
// import { checkAnswer } from './utils'

export enum Actions {
  CHECK_ANSWER = 'CHECK_ANSWER',
}

const questionReducer: Reducer<State, Action> = (state, action): State => {
  switch (action.type) {
    case Actions.CHECK_ANSWER:
      console.log('foi')
      return state
    default:
      return state
  }
}

export default questionReducer
