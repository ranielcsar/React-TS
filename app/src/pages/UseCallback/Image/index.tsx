import React from 'react'
import { TImage } from '../types'

import { Container, ImageContainer, Footer, Name } from './styles'

const Image = (image: TImage) => (
  <Container key={image.id}>
    <ImageContainer image={image.download_url} />
    <Footer>
      <Name>{`${image.author}`}</Name>
    </Footer>
  </Container>
)

export default Image
