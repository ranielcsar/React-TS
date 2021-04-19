import styled from 'styled-components'
import { RangeInputProps } from './index'

export const Input = styled('input').attrs({
  type: 'range'
})`
  width: 100%;
  flex: 1.1;
  background-color: transparent;
  -webkit-appearance: none;

  &:focus {
    outline: none;
  }

  &::-webkit-slider-runnable-track {
    border: 2px dashed var(--black);
    border-radius: 20px;
    width: 100%;
    padding: 0.1775rem 0;
    background-color: #f0f0f0;
    cursor: pointer;
  }

  &::-webkit-slider-thumb {
    width: 20px;
    height: 20px;
    padding: 6px 5px;
    background: ${(props: RangeInputProps) => props.thumbBgColor};
    border-radius: 50px;
    border: 1px solid var(--black);
    cursor: pointer;
    -webkit-appearance: none;
    position: relative;
  }
`
