import React, { useState } from 'react'
import data from './data'
import Question from './Questions'

function App() {
  const [questions, setQuestions] = useState(data)
  return (
    <main>
      <div className='container'>
        <section className='info'>
          {questions.map((question) => {
            return <Question key={question.id} {...question} />
          })}
        </section>
      </div>
    </main>
  )
}

export default App
