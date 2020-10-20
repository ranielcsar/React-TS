import React, { forwardRef } from 'react'
import { Container } from './styles'

type TAnswer = {
  answer_id: string
  answer_text: string
}

type Props = {
  name: string
  answer: TAnswer
  defaultChecked?: boolean
}

const Radio: React.ForwardRefRenderFunction<HTMLInputElement, Props> = ({ name, answer, ...rest }, ref) => (
  <Container htmlFor={answer.answer_id}>
    <input ref={ref} name={name} id={answer.answer_id} type="radio" value={answer.answer_id} {...rest} />
    <span className="radio-custom"></span>
    <p>{answer.answer_text}</p>
  </Container>
)

export default forwardRef(Radio)
