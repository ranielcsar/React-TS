import { Dispatch } from 'react'

export type TQuestion = {
  id: string
  question: string
  answers: {
    answer_id: string
    answer_text: string
  }[]
  correctAnswer: string
}

export type State = {
  questions: TQuestion[]
  userSelectedAnswers: string[]
}

export type Payload = {
  selectedAnswer: string
}

export type Action = {
  type: string
  payload: Payload
}

export type QStore = {
  state: State
  dispatch: Dispatch<Action>
}
