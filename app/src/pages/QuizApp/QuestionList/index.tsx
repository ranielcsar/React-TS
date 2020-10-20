import React, { useContext } from 'react'
import { QStore } from '../types'
import { QStoreContext } from '../QuestionStore'
import Question from '../Question'

// import { Container } from './styles'

const QuestionList: React.FC = () => {
  const {
    state: { questions },
  } = useContext<QStore>(QStoreContext)

  return (
    <>
      {questions.map((question) => (
        <Question question={question} key={question.id} />
      ))}
    </>
  )
}

export default QuestionList
