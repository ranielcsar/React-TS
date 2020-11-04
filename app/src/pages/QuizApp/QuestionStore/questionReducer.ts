import { Reducer } from 'react'
import { State, Action } from '../types'
import { checkAnswers } from './utils'

export enum Actions {
  CHECK_ANSWERS = 'CHECK_ANSWERS',
  ADD_USER_ANSWER = 'ADD_USER_ANSWER',
}

const questionReducer: Reducer<State, Action> = (state, action): State => {
  switch (action.type) {
    case Actions.ADD_USER_ANSWER:
      return {
        ...state,
        userSelectedAnswers: [...state.userSelectedAnswers, action.payload.selectedAnswer],
      }
    case Actions.CHECK_ANSWERS:
      checkAnswers(state.userSelectedAnswers, state.questions)
      return state
    default:
      return state
  }
}

export default questionReducer
