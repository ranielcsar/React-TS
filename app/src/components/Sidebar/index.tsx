import React from 'react'
import { Container } from './styles'
import NavLink from '../NavLink'

const Sidebar: React.FC = (): JSX.Element => (
  <Container>
    <NavLink url={''} label={'ToDo App'} />
    <NavLink url={'calc'} label={'Calculator'} />
    <NavLink url={'blog'} label={'UseReducerBlog'} />
    <NavLink url={'usecallback'} label={'UseCallback'} />
    <NavLink url={'quiz'} label={'QuizApp'} />
  </Container>
)

export default Sidebar
