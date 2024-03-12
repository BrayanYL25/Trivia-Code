// Hooks
import { useState, useEffect } from 'react'
// Services
import { getQuestions } from '../services/getQuestions.mjs'

export default function useStack ({ indexStack }) {
  const [allStacks, setAllStacks] = useState([])
  const [stack, setStack] = useState([])

  useEffect(() => {
    getQuestions()
      .then(stacks => {
        setAllStacks(stacks)
        setStack(allStacks[indexStack])
      })
  }, [])

  return [stack, setStack]
}
