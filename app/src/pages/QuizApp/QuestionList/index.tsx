import React, { useState, useContext, useRef, useCallback, useEffect } from 'react'
import { QStore, TQuestion } from '../types'
import { QStoreContext } from '../QuestionStore'
import Question from '../Question'
import { Footer, ActionButton } from './styles'
import { FormHandles } from '@unform/core'
import { Actions } from '../QuestionStore/questionReducer'
import { UnformContainer } from '../styles'

type FormData = {
  answer: string
}

const QuestionList: React.FC = () => {
  const {
    state: { questions },
    dispatch,
  } = useContext<QStore>(QStoreContext)

  const formRef = useRef<FormHandles>(null)

  const handleData = useCallback(
    (data: FormData) => {
      dispatch({
        type: Actions.ADD_USER_ANSWER,
        payload: {
          selectedAnswer: data.answer,
        },
      })
    },
    [dispatch]
  )

  const [currentQuestion, setCurrentQuestion] = useState<TQuestion>()
  const [question, setQuestion] = useState<number>(0)

  const handleNextQuestion = useCallback(() => {
    if (question === questions.length - 1) return

    setQuestion(question + 1)

    let currentQuestion = questions[question]
    setCurrentQuestion(currentQuestion)
  }, [question, questions])

  const handlePreviewQuestion = useCallback(() => {
    if (question === 0) return

    setQuestion(question - 1)

    let currentQuestion = questions[question]
    setCurrentQuestion(currentQuestion)
  }, [question, questions])

  useEffect(() => {
    setCurrentQuestion(questions[question])
  }, [question, questions])

  return (
    <UnformContainer ref={formRef} onSubmit={handleData}>
      {currentQuestion && <Question question={currentQuestion} />}

      <Footer>
        {question === 0 ? (
          <ActionButton onClick={handleNextQuestion}>Próximo</ActionButton>
        ) : (
          <>
            <ActionButton onClick={handlePreviewQuestion}>Anterior</ActionButton>
            <ActionButton type="submit" onClick={handleNextQuestion}>
              Próximo
            </ActionButton>
          </>
        )}
      </Footer>
    </UnformContainer>
  )
}

export default QuestionList
