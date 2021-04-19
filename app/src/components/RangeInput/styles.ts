import styled from 'styled-components'
import { RangeInputProps } from './index'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 5px;
`

export const Range = styled.input.attrs<RangeInputProps>({
  type: 'range',
})`
  width: 100%;
  background-color: transparent;
  -webkit-appearance: none;
  flex: 1;

  &:focus {
    outline: none;
  }

  &::-webkit-slider-runnable-track {
    background: var(--black);
    border-radius: 20px;
    width: 100%;
    padding: 0.1575rem 0;
    cursor: pointer;
  }

  &::-webkit-slider-thumb {
    width: 15px;
    height: 15px;
    background: var(--primary-color);
    border-radius: 25px;
    cursor: pointer;
    -webkit-appearance: none;
  }

  &:focus::-webkit-slider-runnable-track {
    background: var(--secondary-color);
  }
`

export const Label = styled.span`
  flex: 0.2;
  letter-spacing: 0.5px;

  &::first-letter {
    color: var(--primary-color);
    font-weight: bold;
  }
`
