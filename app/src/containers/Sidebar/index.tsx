import React from 'react'
import { Container } from './styles'
import NavLink from 'components/NavLink'

const Sidebar: React.FC = () => (
  <Container>
    <NavLink url={''} label={'ToDo App'} />
    <NavLink url={'calc'} label={'Calculator'} />
    <NavLink url={'blog'} label={'UseReducerBlog'} />
    <NavLink url={'usecallback'} label={'UseCallback'} />
    <NavLink url={'quiz'} label={'QuizApp'} />
    <NavLink url={'set-state-callback'} label={'setState as Callback'} />
  </Container>
)

export default Sidebar
