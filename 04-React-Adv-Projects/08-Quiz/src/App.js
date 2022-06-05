import React from 'react'
import { useGlobalContext } from './context'

import SetupForm from './SetupForm'
import Loading from './Loading'
import Modal from './Modal'


function App() {
  const { waiting, loading, error, questions, index, correct, nextQuestion, checkAnswer } = useGlobalContext()

  if (waiting) {
    return <SetupForm></SetupForm>
  }

  if (loading) {
    return <Loading></Loading>
  }

  // console.log(questions[0])
  const { question, incorrect_answers, correct_answer } = questions[index]
  // const answers = [...incorrect_answers, correct_answer]
  let answers = [...incorrect_answers]
  let tmpIndex = Math.floor(Math.random() * 4)
  if (tmpIndex === 3) {
    answers.push(correct_answer)
  }
  else {
    answers.push(answers[tmpIndex])
    answers[tmpIndex] = correct_answer
  }

  return <main>
    <Modal />
    <section className="quiz">
      <p className="correct-answers">
        correct answers: {correct} / {index}
      </p>
      <article className="container">
        <h2 dangerouslySetInnerHTML={{ __html: question }} />
        <div className="btn-container">
          {
            answers.map((answer, index) => {
              return <button
                className="answer-btn"
                key={index}
                dangerouslySetInnerHTML={{ __html: answer }}
                onClick={() => checkAnswer(correct_answer === answer)} />
            })
          }
        </div>
      </article>
      <button className="next-question" onClick={() => nextQuestion()}>next question</button>
    </section>
  </main>
}

export default App
