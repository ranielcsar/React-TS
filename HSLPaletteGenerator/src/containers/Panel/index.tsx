import React, { useEffect, useState } from 'react'
import Colors from '../Colors'
import Css from '../Css'
import useGlobalState from '../../custom_hooks/useGlobalState'
import { generateAlternativeColors } from '../../utils'

import { Container, ColorsContainer } from './styles'

export type PanelProps = {}

const Panel: React.FC<PanelProps> = () => {
  const { color } = useGlobalState()
  const [colors, setColors] = useState<string[]>([])

  useEffect(() => {
    const newColors = generateAlternativeColors(color)
    setColors(newColors)
  }, [color])

  return (
    <Container>
      <Css colors={colors} />

      <ColorsContainer>
        <Colors {...{ colors }} />
      </ColorsContainer>
    </Container>
  )
}

export default Panel
