import * as S from './styles'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../../hooks/useAppSelector'
import { getRoutineData } from '../../../states/routines'
import { ReactComponent as AfterExercise } from '../../../assets/imgs/after-exercise.svg'
import { getRecordsData } from '../../../states/records'
import { fetchedDate } from '../../../utils/fetchedDate'

const RoutineFinish = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const routineSelector = useAppSelector(getRoutineData)
  const recordsSelector = useAppSelector(getRecordsData)
  const currentRoutineData = routineSelector.routines.byId[location.state]

  const currentExerciseRecordIds = currentRoutineData.recent.length > 0 && currentRoutineData.recent[0].recordIds

  const currentExerciseRecordData = Object.values(recordsSelector.records.byId)
    .filter((data) => currentExerciseRecordIds && currentExerciseRecordIds.includes(data.id))
    .map((data) => data.set)
  const totalSet = currentExerciseRecordData.map((data) => data.length).reduce((acc, el) => acc + el)
  const totalRab = currentExerciseRecordData
    .map((data) => data.map((item) => item.rab).reduce((acc, el) => acc + el))
    .reduce((acc, el) => acc + el)
  const totalVolume = currentExerciseRecordData
    .map((data) => data.map((item) => item.kg * item.rab).reduce((acc, el) => acc + el))
    .reduce((acc, el) => acc + el)

  const routineOrder = Object.values(routineSelector.routines.byId)
    .map((data) => data.recent.length)
    .reduce((acc, el) => acc + el)

  const durationExercise = () => {
    const startTime = currentRoutineData.recent?.[currentRoutineData.recent.length - 1].startAt.split(' ')[4].split(':')
    const endTime = currentRoutineData.recent?.[currentRoutineData.recent.length - 1].endAt.split(' ')[4].split(':')
    const hour = (Number(endTime[0]) - Number(startTime[0])) * 60
    const minute = Number(endTime[1]) - Number(startTime[1])
    return hour + minute
  }

  const homeNaviHandler = () => {
    navigate('../../../routine')
  }

  return (
    <S.routinefinishContainer>
      <S.routineTitleBox>
        <S.routineTitle>{currentRoutineData.title}</S.routineTitle>
        <S.routineData>
          {fetchedDate(currentRoutineData.recent?.[currentRoutineData.recent.length - 1].endAt)}
        </S.routineData>
      </S.routineTitleBox>
      <AfterExercise />
      <S.routineResultContainer>
        <S.routineResultBox>
          <S.routineResultItem>
            <S.routineResultValue>{routineOrder}</S.routineResultValue>
            <S.routineResultUnit>th</S.routineResultUnit>
          </S.routineResultItem>
          <div>WORKOUT</div>
        </S.routineResultBox>
        <S.routineResultBox>
          <S.routineResultItem>
            <S.routineResultValue>{durationExercise()}</S.routineResultValue>
            <S.routineResultUnit>분</S.routineResultUnit>
          </S.routineResultItem>
          <div>DURATION</div>
        </S.routineResultBox>
        <S.routineResultBox>
          <S.routineResultItem>
            <S.routineResultValue>{totalVolume}</S.routineResultValue>
            <S.routineResultUnit>KG</S.routineResultUnit>
          </S.routineResultItem>
          <div>VOLUME</div>
        </S.routineResultBox>
        <S.routineResultBox>
          <div>{currentRoutineData.workout.length}</div>
          <div>EXERCISES</div>
        </S.routineResultBox>
        <S.routineResultBox>
          <S.routineResultItem>
            <S.routineResultValue>{totalSet}</S.routineResultValue>
            <S.routineResultUnit>세트</S.routineResultUnit>
          </S.routineResultItem>
          <div>SETS</div>
        </S.routineResultBox>
        <S.routineResultBox>
          <S.routineResultItem>
            <S.routineResultValue>{totalRab}</S.routineResultValue>
            <S.routineResultUnit>회</S.routineResultUnit>
          </S.routineResultItem>
          <div>RPES</div>
        </S.routineResultBox>
      </S.routineResultContainer>
      <S.homeRouterBtnBox>
        <button onClick={homeNaviHandler} type='button'>
          홈으로 돌아가기
        </button>
      </S.homeRouterBtnBox>
    </S.routinefinishContainer>
  )
}

export default RoutineFinish
