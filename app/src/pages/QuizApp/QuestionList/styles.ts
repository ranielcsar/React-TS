import styled from 'styled-components'
import { Button } from '../../../styles/global'

export const Counter = styled.h1`
  margin-bottom: 2rem;
`

export const Footer = styled.footer`
  display: flex;
  margin-top: 2rem;
`

export const ActionButton = styled(Button)`
  color: var(--black);
  background: none;
  position: relative;

  &:hover {
    background: none;
    color: var(--primary-color);
  }
`
