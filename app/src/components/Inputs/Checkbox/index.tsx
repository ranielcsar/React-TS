import React, { forwardRef } from 'react'
import { Container, Text, StyledCheckbox } from './styles'

type TAnswer = {
  answer_id: string
  answer_text: string
}

type Props = {
  answer: TAnswer
  defaultChecked?: boolean
}

const Checkbox: React.ForwardRefRenderFunction<HTMLInputElement, Props> = (
  { answer, defaultChecked, ...rest },
  ref
) => (
  <Container htmlFor={answer.answer_id}>
    <Text>{answer.answer_text}</Text>
    <input
      defaultChecked={defaultChecked}
      ref={ref}
      value={answer.answer_id}
      type="checkbox"
      id={answer.answer_id}
      {...rest}
    />
    <StyledCheckbox className="check" />
  </Container>
)

export default forwardRef(Checkbox)
