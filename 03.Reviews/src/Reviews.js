import React, { useState } from 'react'
import people from './Data'
import { FaAngleRight, FaAngleLeft, FaQuoteRight } from 'react-icons/fa'

const Reviews = () => {
  const [index, setIndex] = useState(0)
  const { name, job, image, text } = people[index]
  const checkNum = (number) => {
    if (number > people.length - 1) {
      return 0
    }
    if (number < 0) {
      return people.length - 1
    }
    return number
  }

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1
      return checkNum(newIndex)
    })
  }
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1
      return checkNum(newIndex)
    })
  }
  const randomPerson = () => {
    let newIndex = Math.floor(Math.random() * people.length)
    if (newIndex === index) {
      newIndex = index + 1
    }
    setIndex(checkNum(newIndex))
    console.log(newIndex)
  }

  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={nextPerson}>
          <FaAngleLeft />
        </button>
        <button className='next-btn' onClick={prevPerson}>
          <FaAngleRight />
        </button>
        <button className='random-btn' onClick={randomPerson}>
          Suprise me
        </button>
      </div>
    </article>
  )
}
export default Reviews
