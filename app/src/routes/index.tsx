import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ToDoApp from '../pages/ToDoApp'
import Calculator from '../pages/Calculator'
import UseReducerBlog from '../pages/UseReducerBlog'
import UseCallback from '../pages/UseCallback'
import QuizApp from '../pages/QuizApp'
import ColorVariations from '../pages/ColorVariations'

const Routes: React.FC = () => (
  <Switch>
    <Route path={'/'} exact component={ToDoApp} />
    <Route path={'/calc'} exact component={Calculator} />
    <Route path={'/blog'} exact component={UseReducerBlog} />
    <Route path={'/usecallback'} exact component={UseCallback} />
    <Route path={'/quiz'} exact component={QuizApp} />
    <Route path={'/colors'} exact component={ColorVariations} />
  </Switch>
)

export default Routes
