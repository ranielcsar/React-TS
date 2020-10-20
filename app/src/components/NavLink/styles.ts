import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled(Link)`
  color: var(--white);
  margin: 2rem 0;

  &:hover {
    color: var(--primary-color);
  }
`
