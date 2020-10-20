import React, { useEffect, useRef } from 'react'
import { useField } from '@unform/core'
import { StyledGroup } from './styles'
import Radio from '../Radio'

type TAnswer = {
  answer_id: string
  answer_text: string
}

type Props = {
  name: string
  answers: TAnswer[]
}

const Radios: React.FC<Props> = ({ name, answers }) => {
  const inputRefs = useRef<HTMLInputElement[]>([])
  const { fieldName, registerField } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRefs.current,

      getValue: (refs: HTMLInputElement[]) => {
        return refs.find((ref) => ref.checked)?.value || ''
      },

      setValue: (refs: HTMLInputElement[], id: any) => {
        const inputRef = refs.find((ref) => ref.id === id)
        if (inputRef) inputRef.checked = true
      },

      clearValue: (refs: HTMLInputElement[]) => {
        const inputRef = refs.find((ref) => ref.checked === true)
        if (inputRef) inputRef.checked = false
      },
    })
  }, [fieldName, registerField])

  return (
    <StyledGroup>
      {answers?.map((answer, index) => (
        <Radio
          answer={answer}
          key={index}
          name={name}
          ref={(ref: any) => inputRefs.current.push(ref as HTMLInputElement)}
        />
      ))}
    </StyledGroup>
  )
}

export default Radios
