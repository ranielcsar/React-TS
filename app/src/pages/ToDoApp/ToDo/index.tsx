import React from 'react'
import { Container, Text, IsDoneButton, DeleteButton } from './styles'
import { ToDoType } from '../types'

type Props = {
  todo: ToDoType
  handleIsDone: (id: number) => void
  handleDelete: (id: number) => void
}

const ToDo: React.FC<Props> = ({ todo, handleIsDone, handleDelete }) => {
  let { id, text, isDone } = todo

  return (
    <Container key={id}>
      <Text done={isDone}>{text}</Text>
      <IsDoneButton onClick={() => handleIsDone(id)}>Done</IsDoneButton>
      <DeleteButton onClick={() => handleDelete(id)}>Delete</DeleteButton>
    </Container>
  )
}

export default ToDo
