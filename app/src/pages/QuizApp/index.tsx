import React from 'react'
import { Container } from './styles'
import PageContainer from '../../containers/PageContainer'
import QuestionList from './QuestionList'
import QuestionStore from './QuestionStore'

const QuizApp: React.FC = () => (
  <PageContainer title={'QuizApp'}>
    <QuestionStore>
      <Container>
        <QuestionList />
      </Container>
    </QuestionStore>
  </PageContainer>
)

export default QuizApp
