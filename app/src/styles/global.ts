import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    /* ------------------ COLORS ------------------ */
    --black: #292929;
    --white: ghostwhite;
    --gray: lightgray;
    --placeholder-color: silver;
    
    --primary-color: #5F4BB6;
    --dark-primary-color: #52419F;
    --primary-text-color: #E5E2F3;

    --success-color: #79C99E;
    --dark-success-color: #46AF77;

    --warning-color: #FFB100;
    --dark-warning-color: #E09D00;

    --danger-color: #F45B69;
    --dark-danger-color: #F02D3D;
    /* -------------------------------------------- */

    --padding: 0.625rem 1.25rem;
    --border-radius: 0.3125rem;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font: 1.25rem/1.5 verdana, sans-serif;
    border: none;
    outline: none;
  }

  input[type='text'], 
  input[type='number'],
  input[type='email'],
  input[type='password'] {
    &::placeholder {
      color: var(--placeholder-color);
    }
  }

  ul, li { list-style: none; }
  a { text-decoration: none; }
`

export const MainContainer = styled.main`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 15rem 1fr;
  grid-gap: 0 3rem;
  background: var(--white);
`

export const Button = styled.button`
  background: var(--primary-color);
  color: var(--primary-text-color);
  padding: var(--padding);
  border-radius: var(--border-radius);
  cursor: pointer;

  &:hover {
    background: var(--dark-primary-color);
  }
`
