import React, { useRef } from 'react'
import Radios from '../../../components/Inputs/Radios'
import { TQuestion } from '../types'
import { Container } from './styles'
import { UnformContainer } from '../styles'
import { FormHandles } from '@unform/core'

type Props = {
  question: TQuestion
}

const Question: React.FC<Props> = ({ question }) => {
  const formRef = useRef<FormHandles>(null)

  function handleData(data: any) {
    console.log(data)
  }

  return (
    <Container>
      <UnformContainer ref={formRef} onSubmit={handleData}>
        <h1>{question.question}</h1>
        <Radios name="user_answer" answers={question.answers} />
        <button type="submit">Ver log</button>
      </UnformContainer>
    </Container>
  )
}

export default Question
