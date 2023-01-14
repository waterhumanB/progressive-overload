import { useEffect, useState } from 'react'
import { ITimerModalProps } from '../../../types/allProps.d'
import finishMp3 from '../../../assets/audios/boxingRingSound.mp3'
import * as S from './style'

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
      <S.chart>
        <S.aniSvg viewBox='0 0 200 200'>
          <S.backCircle cx='100' cy='100' r='90' />
          <S.animatedCircle
            cx='100'
            cy='100'
            r='90'
            strokeDasharray={`${2 * Math.PI * 90 * (1 - secondsCount / seconds)} ${
              2 * Math.PI * 90 * (secondsCount / seconds)
            }`}
            strokeDashoffset={2 * Math.PI * 90 * 0.25}
          />
        </S.aniSvg>
        <S.timerCount>{secondsCount}</S.timerCount>
      </S.chart>
      <S.skipBtn onClick={timerSkipHandler} type='button'>
        {secondsCount === 0 ? '다음 세트 시작' : 'SKIP'}
      </S.skipBtn>
    </S.timerModalCounter>
  )
}

export default TimerModal
