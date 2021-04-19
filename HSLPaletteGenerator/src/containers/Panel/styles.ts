import styled from 'styled-components'
import { PanelProps } from './index'

export const Container = styled('section')<PanelProps>`
  width: 100%;
  height: 360px;
  background: var(--black);
  border-radius: 5px;
  margin: auto;
  margin-bottom: 0;

  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 2fr 0.3fr;
`

export const ColorsContainer = styled('section')`
  grid-row: 1;
  grid-column: 2;
`
