import React, { ChangeEvent, forwardRef } from 'react'

import { Container } from './styles'

type Props = {
  placeholder?: string
  onChange?: (evt: ChangeEvent<HTMLInputElement>) => void
}

const Input: React.ForwardRefRenderFunction<HTMLInputElement, Props> = (
  { placeholder, onChange, ...rest },
  ref
) => (
  <Container
    ref={ref}
    placeholder={placeholder}
    type="text"
    onChange={onChange}
    {...rest}
  />
)

export default forwardRef(Input)
