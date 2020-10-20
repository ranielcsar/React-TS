import React from 'react'
import Routes from '../../routes'
import { BrowserRouter } from 'react-router-dom'
import Sidebar from '../Sidebar'

import { Container, Content } from './styles'

const MainContainer: React.FC = () => (
  <Container>
    <BrowserRouter>
      <Sidebar />

      <Content>
        <Routes />
      </Content>
    </BrowserRouter>
  </Container>
)

export default MainContainer
