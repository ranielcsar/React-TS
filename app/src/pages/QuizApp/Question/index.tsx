import React from 'react'
import Radios from 'components/Inputs/Radios'
import { TQuestion } from '../types'
import { Container, Title } from './styles'

type Props = {
  question: TQuestion
}

const Question: React.FC<Props> = ({ question }) => (
  <Container>
    <Title>{question.question}</Title>
    <Radios name="answer" answers={question.answers} />
  </Container>
)

export default Question
