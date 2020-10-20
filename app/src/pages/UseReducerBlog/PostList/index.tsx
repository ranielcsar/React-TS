import React, { useContext } from 'react'
import { StoreContext } from '../store'
import Post from '../Post'
import { TStore } from '../types'
import { Container } from './styles'

const PostList: React.FC = () => {
  const {
    state: { posts },
  } = useContext<TStore>(StoreContext)

  return <Container>{posts.map(Post)}</Container>
}

export default PostList
