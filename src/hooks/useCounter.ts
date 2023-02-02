import { useEffect, useState } from 'react'

export const useCounter = (end = 0, start = 0) => {
  const [count, setCount] = useState(start)

  useEffect(() => {
    let currentNumber = start
    const counter = setInterval(() => {
      const progress = (currentNumber - start) / 130
      ++currentNumber
      setCount(start + Math.round((end - start) * progress))
      if (progress === 1) {
        clearInterval(counter)
      }
    })
  }, [end, start])

  return count
}
