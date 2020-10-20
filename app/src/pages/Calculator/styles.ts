import styled from 'styled-components'
import { Button } from '../../styles/global'

export const Container = styled.div`
  width: 100%;
`

export const CalcScreen = styled.div`
  background: var(--black);
  color: var(--white);
  width: 100%;
  height: 12.5rem;
  border-radius: var(--border-radius);

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 20px;
`

export const Keyboard = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 0.5rem;

  margin: 1rem 0;
`

export const Numbers = styled.section`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0.5rem;
`

export const Operations = styled.section`
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: 1fr;
  grid-gap: 0.5rem 0;
`

export const EqualButton = styled(Button)`
  grid-column: 2 / 4;
`

export const ResetButton = styled(Button)`
  background: silver;
  color: var(--white);

  &:hover {
    background: gray;
  }
`
