import styled from 'styled-components'
import { ColorProps } from './index'

export const Container = styled('div').attrs((props: ColorProps) => ({
  style: {
    backgroundColor: props.backgroundColor
  }
}))`
  width: 100%;
  min-height: 40px;

  &:first-child {
    border-radius: 0 5px 0 0;
  }

  &:last-child {
    border-radius: 0 0 5px 0;
  }
`
