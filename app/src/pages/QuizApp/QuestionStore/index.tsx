import React, { Reducer, useReducer } from 'react'
import { createContext } from 'react'
import { createQuestions } from '../utils'
import { State, Action, QStore } from '../types'
import questionReducer from './questionReducer'

const initialStoreState: QStore = {
  state: {
    questions: createQuestions(),
  },

  dispatch: () => ({
    type: '',
    payload: { selectedAnswer: '' },
  }),
}

export const QStoreContext = createContext<QStore>(initialStoreState)

const QuestionStore: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer<Reducer<State, Action>>(
    questionReducer,
    initialStoreState.state
  )

  return (
    <QStoreContext.Provider value={{ state, dispatch }}>
      {children}
    </QStoreContext.Provider>
  )
}

export default QuestionStore
