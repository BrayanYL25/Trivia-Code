//  Components
import Question from './Question'
import Answer from './Answer'
import StateBox from './StateBox'
//  Hooks
import { useState, useEffect } from 'react'
//  Mocks
import Stacks from './mocks/data.json'
// Style
import './styles/App.css'

export default function App () {
  const [indexStack, setIndexStack] = useState(0)
  const [stack, setStack] = useState(Stacks.result[indexStack])
  const [asserts, setAsserts] = useState(Array(stack.length).fill(null))
  const [indexQuestion, setIndexQuestion] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  useEffect(() => {
    setStack(Stacks.result[indexStack])
    setIndexQuestion(0)
  }, [indexStack])

  useEffect(() => {
    setAsserts(Array(stack.length).fill(null))
  }, [stack])

  const handleClick = (e) => {
    const newAnswer = e.target.innerHTML
    setAsserts(assertsArr => {
      assertsArr[indexQuestion] = newAnswer === stack[indexQuestion].answer
      return [...assertsArr]
    })

    if (indexQuestion <= stack.length - 1) {
      if (indexQuestion === stack.length - 1) {
        if (indexStack === 2) return
        setIndexStack(indexStack + 1)
        return
      }
      setIndexQuestion(indexQuestion + 1)
    }
  }
  return (
    <main className='m-3'>
      <section className='w-100 d-flex justify-content-between'>
        {
          asserts.map((ok, index) => <StateBox key={index} isOk={ok} />)
        }
      </section>
      <Question question={stack[indexQuestion].question} />
      <form onSubmit={handleSubmit}>
        {
          stack[indexQuestion].options.map(opt => <Answer key={opt.id} option={opt.opt} clickHandle={handleClick} />)
        }
      </form>
    </main>
  )
}
