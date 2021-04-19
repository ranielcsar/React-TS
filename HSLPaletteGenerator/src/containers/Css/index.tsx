import React, { useEffect, useState } from 'react'

import {
  Container,
  RootText,
  VariableContainer,
  VariableName,
  VariableValue,
  Variables
} from './styles'

type VariableType = {
  index: number
  name: string
  value: string
}

const Variable = ({ index, name, value }: VariableType) => (
  <VariableContainer key={index}>
    <VariableName>{name}</VariableName>
    <VariableValue>{value};</VariableValue>
  </VariableContainer>
)

type CssProps = {
  colors: string[]
}

const Css: React.FC<CssProps> = ({ colors }) => {
  const [variables, setVariables] = useState<VariableType[]>([])

  const createVariables = () => {
    const newVariables = colors.map((color, index) => ({
      index,
      name: `--color-${index + 1}00:`,
      value: color
    }))

    setVariables(newVariables)
  }

  useEffect(() => {
    createVariables()
  }, [colors])

  return (
    <Container>
      <RootText>{`:root {`}</RootText>

      <Variables>{variables.map(Variable)}</Variables>
      <RootText>{`}`}</RootText>
    </Container>
  )
}

export default Css
