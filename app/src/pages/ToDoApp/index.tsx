import React, { useRef, FormEvent, useState } from 'react'
import { TodoList, FormContainer, AddButton } from './styles'
import TextInput from '../../components/Inputs/TextInput'
import { createNewTodo, deleteTodo, setTodoIsDone } from './utils'
import ToDo from './ToDo'
import PageContainer from '../../containers/PageContainer'
import { ToDoType } from './types'

const ToDoApp: React.FC = () => {
  const textInputRef: any = useRef<HTMLInputElement>(null)
  const [todos, setTodos] = useState<ToDoType[]>([])

  function handleNewTodo(evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault()
    let text = textInputRef.current.value

    if (text === '') return

    let newTodo = createNewTodo(todos, text)
    setTodos([...todos, newTodo])
    textInputRef.current.value = ''
  }

  function handleDelete(id: number) {
    let newTodos = deleteTodo(todos, id)
    setTodos(newTodos)
  }

  function handleIsDone(id: number) {
    let newTodos = setTodoIsDone(todos, id)
    setTodos(newTodos)
  }

  return (
    <PageContainer title={'ToDo'}>
      <>
        <FormContainer onSubmit={handleNewTodo}>
          <TextInput ref={textInputRef} />
          <AddButton type="submit">Add</AddButton>
        </FormContainer>

        <TodoList>
          {todos.length === 0
            ? 'Nenhuma tarefa adicionada.'
            : todos.map((todo) => ToDo({ todo, handleIsDone, handleDelete }))}
        </TodoList>
      </>
    </PageContainer>
  )
}

export default ToDoApp
