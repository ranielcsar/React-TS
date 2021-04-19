import React, { useEffect, useState } from 'react'
import Color from '../../components/Color'

import { Container } from './styles'

type ColorsProp = {
  colors: string[]
}

const Colors: React.FC<ColorsProp> = ({ colors = [] }) => (
  <Container>
    {colors.map((color, index) => (
      <Color backgroundColor={color} key={index} />
    ))}
  </Container>
)

export default Colors
