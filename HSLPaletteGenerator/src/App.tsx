import React, { BaseSyntheticEvent } from 'react'
import RangeInput from './components/RangeInput'
import Panel from './containers/Panel'
import RangeInputContainer from './containers/RangeInputContainer'
import { InputsContainer } from './styles'
import GlobalStyle, { Container, Content } from './global-style'
import { MODIFY_HUE, MODIFY_SATURATION, MODIFY_LIGHTNESS } from './store/reducers/colorReducer'
import { Color } from './store/types'
import useGlobalState from './custom_hooks/useGlobalState'
import useDispatch from './custom_hooks/useDispatch'

const App: React.FC = () => {
  const { color } = useGlobalState()
  const dispatch = useDispatch()

  const createDispatch = (type: string, color: Color) => {
    dispatch({
      type,
      payload: {
        color
      }
    })
  }

  const handleHue = ({ target: { value } }: BaseSyntheticEvent) => {
    createDispatch(MODIFY_HUE, {
      ...color,
      hue: parseInt(value)
    })
  }

  const handleSaturation = ({ target: { value } }: BaseSyntheticEvent) => {
    createDispatch(MODIFY_SATURATION, {
      ...color,
      saturation: parseInt(value)
    })
  }

  const handleLightness = ({ target: { value } }: BaseSyntheticEvent) => {
    createDispatch(MODIFY_LIGHTNESS, {
      ...color,
      lightness: parseInt(value)
    })
  }

  return (
    <Container>
      <GlobalStyle />

      <Content>
        <Panel />

        <InputsContainer>
          <RangeInputContainer label="Hue">
            <RangeInput onChange={handleHue} min="0" max="360" />
          </RangeInputContainer>

          <RangeInputContainer label="Saturation">
            <RangeInput onChange={handleSaturation} min="0" max="100" />
          </RangeInputContainer>

          <RangeInputContainer label="Lightness">
            <RangeInput onChange={handleLightness} min="0" max="100" />
          </RangeInputContainer>
        </InputsContainer>
      </Content>
    </Container>
  )
}

export default App
