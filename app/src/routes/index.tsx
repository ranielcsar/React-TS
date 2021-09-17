import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ToDoApp from '../pages/ToDoApp'
import Calculator from '../pages/Calculator'
import UseReducerBlog from '../pages/UseReducerBlog'
import UseCallback from '../pages/UseCallback'
import QuizApp from '../pages/QuizApp'
import SetStateAsCallback from '../pages/SetStateAsCallback'

const Routes: React.FC = () => (
  <Switch>
    <Route path={'/'} exact component={ToDoApp} />
    <Route path={'/calc'} exact component={Calculator} />
    <Route path={'/blog'} exact component={UseReducerBlog} />
    <Route path={'/usecallback'} exact component={UseCallback} />
    <Route path={'/quiz'} exact component={QuizApp} />
    <Route path={'/set-state-callback'} exact component={SetStateAsCallback} />
  </Switch>
)

export default Routes
