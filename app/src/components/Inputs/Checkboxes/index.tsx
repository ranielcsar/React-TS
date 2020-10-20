import React, { useEffect, useRef, InputHTMLAttributes } from 'react'
import { useField } from '@unform/core'
import { Container } from './styles'
import Checkbox from '../Checkbox'

type TAnswer = {
  answer_id: string
  answer_text: string
}

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  answers: TAnswer[]
}

const Checkboxes: React.FC<Props> = ({ name, answers, ...rest }) => {
  const inputRefs = useRef<HTMLInputElement[]>([])
  const { fieldName, registerField, defaultValue = [] } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRefs.current,

      getValue: (refs: HTMLInputElement[]) => {
        return refs.filter((ref) => ref.checked).map((ref) => ref.value)
      },

      clearValue: (refs: HTMLInputElement[]) => {
        refs.forEach((ref) => {
          ref.checked = false
        })
      },

      setValue: (refs: HTMLInputElement[], values: string[]) => {
        refs.forEach((ref) => {
          if (values.includes(ref.id)) {
            ref.checked = true
          }
        })
      },
    })
  }, [defaultValue, fieldName, registerField])

  return (
    <Container {...rest}>
      {answers.map((answer, index) => (
        <Checkbox
          answer={answer}
          defaultChecked={defaultValue.includes(answer.answer_id)}
          key={index}
          ref={(ref: any) => inputRefs.current.push(ref as HTMLInputElement)}
        />
      ))}
    </Container>
  )
}

export default Checkboxes
