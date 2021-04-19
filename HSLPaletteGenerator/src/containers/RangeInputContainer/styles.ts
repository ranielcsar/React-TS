import styled from 'styled-components'

export const Container = styled('div')`
  position: relative;
  width: 100%;
  margin: 0 0 15px;
  padding: 0 10px;

  display: flex;
`

export const Label = styled('span')`
  flex: 0.25;
  letter-spacing: 0.5px;

  &::first-letter {
    font-size: 20px;
    margin-right: 1px;
    font-weight: bold;
    color: var(--black);
  }
`
