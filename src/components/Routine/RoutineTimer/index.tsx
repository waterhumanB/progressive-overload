import { IRoutineSecondsProps } from '../../../types/allProps.d'
import * as S from './styles'

const RoutineTimer = ({ seconds, setSeconds }: IRoutineSecondsProps) => {
  const secondsMinusHandler = () => {
    if (seconds >= 10) {
      setSeconds(seconds - 10)
    }
  }

  const secondsPlusHandler = () => {
    if (seconds < 600) {
      setSeconds(seconds + 10)
    }
  }

  const secondsResetHandler = () => {
    setSeconds(0)
  }

  return (
    <S.routineTimerContainer>
      <S.setTimerBox>
        <S.restTime>휴식시간</S.restTime>
        <S.seconds>{seconds} 초</S.seconds>
      </S.setTimerBox>
      <S.timerBtn calculation='minus' onClick={secondsMinusHandler}>
        - 10
      </S.timerBtn>
      <S.timerBtn calculation='plus' onClick={secondsPlusHandler}>
        + 10
      </S.timerBtn>
      <S.timerBtn calculation='reset' onClick={secondsResetHandler}>
        초기화
      </S.timerBtn>
    </S.routineTimerContainer>
  )
}

export default RoutineTimer
