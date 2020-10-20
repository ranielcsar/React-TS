import React, { MouseEvent } from 'react'

import { Container } from './styles'

type Props = {
  label: number | string
  onClick: (evt: MouseEvent<HTMLButtonElement>) => void
}

const Button: React.FC<Props> = ({ label, onClick }) => (
  <Container onClick={onClick}>{label}</Container>
)

export default Button
