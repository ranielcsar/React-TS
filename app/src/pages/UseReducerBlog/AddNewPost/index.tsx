import React, { FormEvent, useRef, useContext, useCallback } from 'react'
import { StoreContext } from '../store'
import { ADD_POST } from '../store/reducers/postReducer'
import { TStore } from '../types'

import { Container, Input, AddButton } from './styles'

const AddNewPost: React.FC = () => {
  const { dispatch } = useContext<TStore>(StoreContext)
  const titleRef: any = useRef<HTMLInputElement>(null)
  const subtitleRef: any = useRef<HTMLInputElement>(null)

  function resetValues() {
    subtitleRef.current.value = ''
    titleRef.current.value = ''
  }

  const handleNewPost = useCallback(
    (evt: FormEvent) => {
      evt.preventDefault()

      let title = titleRef.current.value
      let subtitle = subtitleRef.current.value

      if (title === '' || subtitle === '') return

      dispatch({
        type: ADD_POST,
        post: { title, subtitle },
      })

      resetValues()
    },
    [dispatch]
  )

  return (
    <Container onSubmit={handleNewPost}>
      <Input ref={titleRef} placeholder={'Título do post'} />
      <Input ref={subtitleRef} placeholder={'Subtítulo do post'} />
      <AddButton type="submit">Add</AddButton>
    </Container>
  )
}

export default AddNewPost
