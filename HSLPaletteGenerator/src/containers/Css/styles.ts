import styled from 'styled-components'

export const Container = styled('section')`
  grid-row: 1;
  grid-column: 1;
  height: inherit;
  padding: 25px 30px;
  font: 16px/1.5 sans-serif;
  font-weight: bold;
`

export const RootText = styled('p')`
  color: var(--primary-color);
  letter-spacing: 0.75px;
`

export const VariableContainer = styled('div')`
  display: flex;
  color: whitesmoke;
  width: max-content;
  padding-left: 30px;
  margin-top: 5.5px;
`

export const VariableName = styled('p')`
  color: #14ffd1;
`

export const VariableValue = styled('p')`
  margin-left: 10px;
`

export const Variables = styled('div')`
  display: flex;
  flex-direction: column;
`
