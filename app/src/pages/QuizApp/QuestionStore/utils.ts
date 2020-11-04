import { TQuestion } from "../types"

export function checkAnswers(answers: string[], questions: TQuestion[]) {
  let verifiedQuestions = questions.map(question => {
    let verify = answers.find(answer => question.correctAnswer === answer)

    return verify
  })

  console.log(verifiedQuestions)
}
