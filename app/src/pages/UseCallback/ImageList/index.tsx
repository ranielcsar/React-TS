import React from 'react'
import { TImage } from '../types'
import { Container } from './styles'
import Image from '../Image'

type Props = {
  images: TImage[]
}

const ImageList: React.FC<Props> = ({ images }) => (
  <Container>{images.map(Image)}</Container>
)

export default ImageList
