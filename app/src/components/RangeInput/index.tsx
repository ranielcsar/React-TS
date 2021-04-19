import React, { BaseSyntheticEvent } from 'react'

import { Container, Label, Range } from './styles'

export type RangeInputProps = {
  label: string
  min?: string
  max?: string
  onChange: (event: BaseSyntheticEvent) => void
}

const RangeInput: React.FC<RangeInputProps> = ({ label, onChange, min, max, ...rest }) => (
  <Container>
    <Label>{label}</Label>
    <Range {...{ onChange }} {...{ min }} {...{ max }} {...rest} />
  </Container>
)

export default RangeInput
