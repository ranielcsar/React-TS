import React, { useState, useContext, useRef, useCallback, useEffect } from 'react'
import { QStore, TQuestion } from '../types'
import { QStoreContext } from '../QuestionStore'
import Question from '../Question'
import { Footer, ActionButton, Counter } from './styles'
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
      if (data.answer === '') return

      dispatch({
        type: Actions.ADD_USER_ANSWER,
        payload: {
          selectedAnswer: data.answer,
        },
      })
      formRef.current?.reset()
    },
    [dispatch]
  )

  const [currentQuestion, setCurrentQuestion] = useState<TQuestion>()
  const [question, setQuestion] = useState<number>(0)

  function handleNextQuestion() {
    if (question === questions.length - 1) return

    setQuestion(question + 1)

    let currentQuestion = questions[question]
    setCurrentQuestion(currentQuestion)
  }

  function handlePreviewQuestion() {
    if (question === 0) return

    setQuestion(question - 1)

    let currentQuestion = questions[question]
    setCurrentQuestion(currentQuestion)
  }

  useEffect(() => {
    setCurrentQuestion(questions[question])
  }, [question, questions])

  return (
    <>
      <Counter>
        Questão: {question + 1} de {questions.length}
      </Counter>

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
    </>
  )
}

export default QuestionList
