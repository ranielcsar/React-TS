import { ToDoType } from './types'

export function createNewTodo(todos: ToDoType[], text: string): ToDoType {
  let newTodo: ToDoType = {
    id: todos.length,
    text,
    isDone: false,
  }

  return newTodo
}

export function deleteTodo(todos: ToDoType[], id: number): ToDoType[] {
  let newTodos = todos.filter((todo) => todo.id !== id)

  return newTodos
}

export function setTodoIsDone(todos: ToDoType[], id: number): ToDoType[] {
  let newTodos = todos.map((todo) =>
    todo.id === id
      ? {
          id: todo.id,
          text: todo.text,
          isDone: !todo.isDone,
        }
      : todo
  )

  return newTodos
}
