import { Reducer } from 'react'
import { State, Action } from '../types'
// import { checkAnswer } from './utils'

export enum Actions {
  CHECK_ANSWER = 'CHECK_ANSWER',
  ADD_USER_ANSWER = 'ADD_USER_ANSWER',
}

const questionReducer: Reducer<State, Action> = (state, action): State => {
  switch (action.type) {
    case Actions.ADD_USER_ANSWER:
      return {
        ...state,
        userSelectedAnswers: [...state.userSelectedAnswers, action.payload.selectedAnswer],
      }
    default:
      return state
  }
}

export default questionReducer
