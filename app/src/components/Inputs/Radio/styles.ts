import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1.2rem 1fr;
  grid-column-gap: 0.6rem;
  cursor: pointer;
  padding: 0.625rem 1.25rem;
  width: max-content;
  min-width: 11rem;
  margin-bottom: 0.5rem;
  position: relative;

  p {
    margin: 0;
  }
`

export const RadioCustom = styled.label`
  display: block;
  position: relative;
  cursor: pointer;
  margin: auto;

  & input[type='radio'] {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    z-index: 1;
  }

  .radio-custom {
    position: absolute;
    top: -0.6875rem;
    left: -0.75rem;
    height: 1.375rem;
    width: 1.375rem;
    background: transparent;
    border-radius: 50%;
    border: 2px solid var(--black);
    transition: all 0.1s ease-out;

    &:after {
      position: absolute;
      content: '';
      left: 0.3125rem;
      top: 0.625rem;
      height: 0px;
      width: 0px;
      border-radius: 50%;
      border: solid var(--white);
      border-width: 0 3px 3px 0;
      opacity: 1;
      transition: all 0.1s ease-out;
    }
  }

  & input:checked ~ .radio-custom {
    background-color: var(--primary-color);
    border-radius: 50%;
    transform: rotate(0deg) scale(1);
    opacity: 1;
    border: 0.125rem solid var(--primary-color);
  }

  & input:checked ~ .radio-custom::after {
    transform: rotate(45deg) scale(1);
    opacity: 1;
    left: 0.375rem;
    top: 1px;
    width: 0.375rem;
    height: 0.675rem;
    border: solid var(--white);
    border-width: 0px 2px 2px 0;
    background-color: transparent;
    border-radius: 0;
  }
`
