import styled from 'styled-components'

export const Container = styled.label`
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  color: var(--black);

  & input[type='checkbox'] {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
    z-index: 1;
    cursor: pointer;
  }

  .check:after {
    content: '';
    position: absolute;
    top: 4.5px;
    left: 5.4px;
    width: 50%;
    height: 50%;
  }

  & input[type='checkbox']:checked ~ .check:after {
    background: var(--primary-color);
  }
`

export const Text = styled.p`
  margin-left: 1.575rem;
`

export const StyledCheckbox = styled.div`
  padding: 10px;
  margin-right: 0.625rem;
  border: 1px solid var(--black);
  background: none;
  cursor: pointer;

  position: absolute;
  left: 0;
`
