import React from 'react'
import { Container } from './styles'

type Props = {
  url: string
  label: string
}

const NavLink: React.FC<Props> = ({ url, label }): JSX.Element => (
  <Container to={`/${url}`}>{label}</Container>
)

export default NavLink
