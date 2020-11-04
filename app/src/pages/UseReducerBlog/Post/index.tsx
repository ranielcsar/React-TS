import React from 'react'
import { TPost } from '../types'

import { Container, Title, Subtitle } from './styles'

const Post: React.FC<TPost> = ({ title, subtitle }) => {
  return (
    <Container key={title}>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  )
}

export default Post
