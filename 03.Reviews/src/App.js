import React from 'react'
import Reviews from './Reviews'
// import { FaGithubSquare } from 'react-icons/fa'

function App() {
  return (
    <main>
      {/* <FaGithubSquare /> */}
      <section className='container'>
        <div className='title'>
          <h2> Reviews</h2>
        </div>
        <div className='underline'></div>
        <Reviews />
      </section>
    </main>
  )
}

export default App
