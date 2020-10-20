import React from 'react'
import Store from './store'
import PageContainer from '../../containers/PageContainer'
import PostList from './PostList'
import AddNewPost from './AddNewPost'
import { Container } from './styles'

const UseReducerBlog: React.FC = (): JSX.Element => (
  <PageContainer title={'UseReducerBlog'}>
    <Store>
      <Container>
        <AddNewPost />
        <PostList />
      </Container>
    </Store>
  </PageContainer>
)

export default UseReducerBlog
