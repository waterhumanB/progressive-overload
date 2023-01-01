import React, { useEffect, useState } from 'react'
import { ITimerModalProps } from '../../../types/allProps.d'
import * as S from './style'

const TimerModal = ({ toggleModalHandler, secondsData }: ITimerModalProps) => {
  const [count, setCount] = useState(secondsData)

  useEffect(() => {
    const counter = setInterval(() => {
      if (count !== 0) {
        setCount(count - 1)
      }
      if (count === 0) {
        toggleModalHandler()
      }
    }, 1000)
    return () => clearInterval(counter)
  }, [count])

  const timerSkipHandler = () => {
    toggleModalHandler()
  }

  return (
    <S.timerModalCounter>
      <div>휴식시간</div>
      <S.Chart>
        <S.AniSvg viewBox='0 0 200 200'>
          <circle cx='100' cy='100' r='90' fill='none' stroke='#ebebeb' strokeWidth='20' />
          <S.AnimatedCircle
            cx='100'
            cy='100'
            r='90'
            fill='none'
            strokeWidth='20'
            strokeDasharray={`${2 * Math.PI * 90 * (1 - count / secondsData)} ${
              2 * Math.PI * 90 * (count / secondsData)
            }`}
            strokeDashoffset={2 * Math.PI * 90 * 0.25}
          />
        </S.AniSvg>
        <S.Percent>{count}</S.Percent>
      </S.Chart>

      <button onClick={timerSkipHandler} type='button'>
        SKIP
      </button>
    </S.timerModalCounter>
  )
}

export default TimerModal
