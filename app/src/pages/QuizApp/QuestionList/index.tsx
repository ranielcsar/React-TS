import React, { useState, useContext, useRef, useEffect, RefObject } from 'react'
import { QStore, TQuestion } from '../types'
import { QStoreContext } from '../QuestionStore'
import Question from '../Question'
import { Footer, ActionButton, Counter } from './styles'
import { FormHandles, SubmitHandler } from '@unform/core'
import { Actions } from '../QuestionStore/questionReducer'
import { UnformContainer } from '../styles'
import * as Yup from 'yup'
import { displayYupError } from 'utils/displayYupError'

type FormData = {
  answer: string
}

const QuestionList: React.FC = () => {
  const {
    state: { questions },
    dispatch,
  } = useContext<QStore>(QStoreContext)

  const formRef: RefObject<FormHandles> = useRef(null)

  const handleData: SubmitHandler<FormData> = async (data) => {
    try {
      const dataSchema = Yup.object({
        answer: Yup.string().required('Selecione uma resposta.')
      })

      await dataSchema.validate(data, {
        abortEarly: false,
      })

      dispatch({
        type: Actions.ADD_USER_ANSWER,
        payload: {
          selectedAnswer: data.answer,
        },
      })

      if (question === questions.length - 1) {        
        dispatch({
          type: Actions.CHECK_ANSWERS,
          payload: {
            selectedAnswer: '',
          },
        })
      }

      handleNextQuestion()
      formRef.current?.clearField('answer')
    } catch (err) {
      displayYupError(err)
    }
  }

  const [currentQuestion, setCurrentQuestion] = useState<TQuestion>()
  const [question, setQuestion] = useState<number>(0)

  function handleNextQuestion() {
    if (question === questions.length - 1) return

    setQuestion(question + 1)

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
          {question !== questions.length - 1 ? (
            <ActionButton type="submit">Próximo</ActionButton>
          ) : (
            <ActionButton type="submit">
              Finalizar
            </ActionButton>
          )}
        </Footer>
      </UnformContainer>
    </>
  )
}

export default QuestionList
