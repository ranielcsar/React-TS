import React, { useState, useEffect, useCallback } from 'react'
import api from '../../services/api'
import PageContainer from '../../containers/PageContainer'
import { TImage } from './types'
import ImageList from './ImageList'

import { Container } from './styles'

const UseCallback: React.FC = () => {
  const [images, setImages] = useState<TImage[]>()

  const fetchImages = useCallback(async () => {
    let { data } = await api.get('?limit=10')

    setImages(data)
  }, [])

  useEffect(() => {
    fetchImages()
  }, [])

  return (
    <PageContainer title={'UseCallback'}>
      <Container>
        {!images ? <h1>Carregando...</h1> : <ImageList images={images} />}
      </Container>
    </PageContainer>
  )
}

export default UseCallback
