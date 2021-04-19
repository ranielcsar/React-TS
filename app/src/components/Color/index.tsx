import React from 'react'

import { Container } from './styles'

export type ColorProps = {
  backgroundColor: string
}

const Color: React.FC<ColorProps> = ({ backgroundColor, ...rest }) => (
  <Container {...{ backgroundColor }} {...rest} />
)

export default Color
