import React, { FormEvent, useRef, useContext, useCallback } from 'react'
import { displayYupError } from 'utils/displayYupError'
import { StoreContext } from '../store'
import { ADD_POST } from '../store/reducers/postReducer'
import { TStore } from '../types'
import * as Yup from 'yup'

import { Container, Input, AddButton } from './styles'

const AddNewPost: React.FC = () => {
  const { dispatch } = useContext<TStore>(StoreContext)
  const titleRef: any = useRef<HTMLInputElement>(null)
  const subtitleRef: any = useRef<HTMLInputElement>(null)

  const resetValues = useCallback(() =>{
    subtitleRef.current.value = ''
    titleRef.current.value = ''
  }, [])

  const handleNewPost = useCallback(async (evt: FormEvent) => {
    evt.preventDefault()

    let post = {
      title: titleRef.current.value,
      subtitle: subtitleRef.current.value
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
