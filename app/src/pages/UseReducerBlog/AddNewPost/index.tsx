import React, { FormEvent, useRef, useContext, useCallback, RefObject } from 'react'
import { displayYupError } from 'utils/displayYupError'
import { StoreContext } from '../store'
import { ADD_POST } from '../store/reducers/postReducer'
import { TStore } from '../types'
import * as Yup from 'yup'

import { Container, Input, AddButton } from './styles'

interface RefInterface extends HTMLInputElement {
  value: string
}

const AddNewPost: React.FC = () => {
  const { dispatch } = useContext<TStore>(StoreContext)
  const titleRef: RefObject<RefInterface> = useRef(null)
  const subtitleRef: RefObject<RefInterface> = useRef(null)

  const resetValues = useCallback(() => {
    if (titleRef.current) titleRef.current.value = ''

    if (subtitleRef.current) subtitleRef.current.value = ''
  }, [])

  const handleNewPost = useCallback(async (evt: FormEvent) => {
    evt.preventDefault()

    let post = {
      title: titleRef.current?.value,
      subtitle: subtitleRef.current?.value
    }

    try {
      const postSchema = Yup.object({
        title: Yup.string().required('Adicione um título ao post.'),
        subtitle: Yup.string().required('Adicione um subtítulo ao post.'),
      })

      await postSchema.validate(post)

      dispatch({ type: ADD_POST, post })

      resetValues()
    } catch (err) {
      displayYupError(err)
    }
  }, [dispatch])

  return (
    <Container onSubmit={handleNewPost}>
      <Input ref={titleRef} placeholder={'Título do post'} />
      <Input ref={subtitleRef} placeholder={'Subtítulo do post'} />
      <AddButton type="submit">Add</AddButton>
    </Container>
  )
}

export default AddNewPost
