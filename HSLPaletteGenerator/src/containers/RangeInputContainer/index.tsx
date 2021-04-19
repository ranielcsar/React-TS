import React from 'react'

import { Container, Label } from './styles'

export type RangeInputContainerProps = {
  label: string
}

const RangeInputContainer: React.FC<RangeInputContainerProps> = ({ label, children, ...rest }) => (
  <Container>
    <Label>{label}</Label>
    {children}
  </Container>
)

export default RangeInputContainer
