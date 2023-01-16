import { useEffect, useState } from 'react'
import { ITimerModalProps } from '../../../types/allProps.d'
import finishMp3 from '../../../assets/audios/boxingRingSound.mp3'
import * as S from './style'
import { DountChart } from '../../Chart'

const TimerModal = ({ toggleModalHandler, seconds }: ITimerModalProps) => {
  const [secondsCount, setSecondsCount] = useState(seconds)
  const audio = new Audio(finishMp3)

  useEffect(() => {
    const counter = setInterval(() => {
      if (secondsCount !== 0) {
        setSecondsCount(secondsCount - 1)
      }
      if (secondsCount === 0) {
        audio.volume = 0.1
        audio.play()
      }
    }, 1000)
    return () => clearInterval(counter)
  }, [secondsCount])

  const timerSkipHandler = () => {
    toggleModalHandler()
    audio.pause()
  }

  return (
    <S.timerModalCounter>
      <S.timerTitle>휴식시간</S.timerTitle>
      <DountChart percentage={seconds} percentageValue={secondsCount} chartValueName='default' />
      <S.skipBtn onClick={timerSkipHandler} type='button'>
        {secondsCount === 0 ? '다음 세트 시작' : 'SKIP'}
      </S.skipBtn>
    </S.timerModalCounter>
  )
}

export default TimerModal
