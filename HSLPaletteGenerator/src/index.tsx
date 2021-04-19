import React from 'react'
import { render } from 'react-dom'

import App from './App'
import Store from './store'

const rootElement = document.getElementById('root')

render(
  <Store>
    <App />
  </Store>,
  rootElement
)
