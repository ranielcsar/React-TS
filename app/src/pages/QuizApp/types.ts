import { Dispatch } from 'react'

export type TQuestion = {
  id: number
  question: string
  answers: {
    answer_id: string
    answer_text: string
  }[]
  correctAnswer: number
}

export type State = {
  questions: TQuestion[]
}

export type Payload = {
  selectedAnswer: number
}

export type Action = {
  type: string
  payload: Payload
}

export type QStore = {
  state: State
  dispatch: Dispatch<Action>
}
