import styled from 'styled-components'
import { CgTrash, CgCheckO } from 'react-icons/cg'

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 1.5rem;
`

type TextProps = {
  done?: boolean
}

export const Text = styled.p<TextProps>`
  text-decoration: ${({ done }) => (done ? `line-through` : `none`)};
  width: 100%;
  margin-right: 1rem;
`

export const IsDoneButton = styled(CgCheckO)`
  color: var(--success-color);
  font-size: 35px;
  margin-right: 1rem;
  cursor: pointer;

  &:hover {
    color: var(--dark-success-color);
  }
`

export const DeleteButton = styled(CgTrash)`
  color: var(--danger-color);
  font-size: 35px;
  cursor: pointer;

  &:hover {
    color: var(--dark-danger-color);
  }
`
