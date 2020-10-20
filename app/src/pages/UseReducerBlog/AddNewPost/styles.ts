import styled from 'styled-components'
import { Button } from '../../../styles/global'
import TextInput from '../../../components/Inputs/TextInput'

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: auto;
  min-height: 100px;
  margin-bottom: 3rem;
`

export const Input = styled(TextInput)`
  margin: 0.5rem 0;
`

export const AddButton = styled(Button)``
