import React, { useState, useContext, useCallback, useEffect } from 'react'
import { QStore, TQuestion } from '../types'
import { QStoreContext } from '../QuestionStore'
import Question from '../Question'

// import { Container } from './styles'

const QuestionList: React.FC = () => {
  const {
    state: { questions },
  } = useContext<QStore>(QStoreContext)

  const [currentQuestion, setCurrentQuestion] = useState<TQuestion>()
  const [question, setQuestion] = useState<number>(0)
  const checkCurrentQuestion = useCallback(() => {
    if (question === questions.length - 1 || question === 0) return
  }, [])

  const handleNextQuestion = useCallback(() => {
    checkCurrentQuestion()
    setQuestion(question + 1)

    let currentQuestion = questions[question]
    setCurrentQuestion(currentQuestion)
  }, [])

  const handlePreviewQuestion = useCallback(() => {
    checkCurrentQuestion()
    setQuestion(question - 1)

    let currentQuestion = questions[question]
    setCurrentQuestion(currentQuestion)
  }, [])

  useEffect(() => {
    setCurrentQuestion(questions[question])
  }, [])

  return <>{currentQuestion && <Question question={currentQuestion} />}</>
}

export default QuestionList
