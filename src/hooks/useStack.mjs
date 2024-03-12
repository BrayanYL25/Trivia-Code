//  Hooks
import { useState, useEffect } from 'react'
//  Mocks
import Stacks from './mocks/data.json'

export default function useStack () {
  const [indexStack, setIndexStack] = useState(0)
  const [stack, setStack] = useState(Stacks.result[indexStack])
  const [asserts, setAsserts] = useState(Array(stack.length).fill(null))

  useEffect(() => {
    setAsserts(Array(stack.length).fill(null))
  }, [stack])

  return { stack, setStack, indexStack, setIndexStack, asserts, setAsserts }
}
