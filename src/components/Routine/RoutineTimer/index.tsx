import { IRoutineSecondsProps } from '../../../types/allProps.d'
import * as S from './styles'

const RoutineTimer = ({ seconds, setSeconds }: IRoutineSecondsProps) => {
  const secondsMiusHanlder = () => {
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
        <div className='restTime'>휴식시간</div>
        <div className='seconds'>{seconds} 초</div>
      </S.setTimerBox>
      <button onClick={secondsMiusHanlder} className='minus' type='button'>
        - 10
      </button>
      <button onClick={secondsPlusHandler} className='plus' type='button'>
        + 10
      </button>
      <button onClick={secondsResetHandler} className='reset' type='button'>
        초기화
      </button>
    </S.routineTimerContainer>
  )
}

export default RoutineTimer
