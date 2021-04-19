import styled, { createGlobalStyle } from 'styled-components'

export const Container = styled('main')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100vh;
  font: 16px/1.5 sans-serif, verdana;
  background-color: whitesmoke;
`

export const Content = styled('section')`
  width: 35rem;
  margin: auto;
`

export default createGlobalStyle`
  :root {
    --primary-color: salmon;
    --black: #16161D;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`
