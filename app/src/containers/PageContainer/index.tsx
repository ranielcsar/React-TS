import React from 'react'
import { Container, Title, Content } from './styles'

type Props = {
  title: string
  children: JSX.Element
}

const PageContainer: React.FC<Props> = ({ title, children }) => (
  <Container>
    <Title>{title}</Title>

    <Content>{children}</Content>
  </Container>
)

export default PageContainer
