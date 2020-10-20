import { TQuestion } from './types'

export function createQuestions(): TQuestion[] {
  let questions: TQuestion[] = [
    {
      id: 1,
      question: 'Primeira questão',
      answers: [
        { answer_id: '1', answer_text: 'resposta 1' },
        { answer_id: '2', answer_text: 'resposta 2' },
      ],
      correctAnswer: 2,
    },

    {
      id: 2,
      question: 'Segunda questão',
      answers: [
        { answer_id: '1', answer_text: 'resposta 1' },
        { answer_id: '2', answer_text: 'resposta 2' },
      ],
      correctAnswer: 1,
    },

    {
      id: 3,
      question: 'Terceira questão',
      answers: [
        { answer_id: '1', answer_text: 'resposta 1' },
        { answer_id: '2', answer_text: 'resposta 2' },
      ],
      correctAnswer: 2,
    },
  ]

  return questions
}
