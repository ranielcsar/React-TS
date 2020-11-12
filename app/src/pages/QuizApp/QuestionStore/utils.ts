import { TQuestion } from "../types"

export function checkAnswers(answers: string[], questions: TQuestion[]) {

  let verifiedQuestions = questions.map(question => {
    let verify = answers.find(answer => question.correctAnswer === answer)

    return verify === question.correctAnswer
  })

  let count = 0;

  for (let question of verifiedQuestions) {
    if (question) count++
  }

  alert(`Você acertou ${count} de ${questions.length}!`);
}
