import { TQuestion, Action } from '../types'

export function checkAnswer(question: TQuestion, action: Action) {
  if (question.correctAnswer === action.payload.selectedAnswer) {
    return true
  }

  return false
}
