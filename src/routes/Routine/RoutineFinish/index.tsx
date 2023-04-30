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

  const durationExecise = () => {
    const startTime = currentRoutineData.recent?.[currentRoutineData.recent.length - 1].startAt.split(' ')[4].split(':')
    const endTime = currentRoutineData.recent?.[currentRoutineData.recent.length - 1].endAt.split(' ')[4].split(':')
    const hour = (Number(endTime[0]) - Number(startTime[0])) * 60
    const minute = Number(endTime[1]) - Number(startTime[1])
    return hour + minute
  }

  const homeNaviHadler = () => {
    navigate('../../../routine')
  }

  return (
    <S.routinefinishContainer>
      <S.routineTitleBox>
        <div className='title'>{currentRoutineData.title}</div>
        <div className='date'>
          {fetchedDate(currentRoutineData.recent?.[currentRoutineData.recent.length - 1].endAt)}
        </div>
      </S.routineTitleBox>
      <AfterExercise />
      <S.routineResultBox>
        <S.routineResultItem>
          <div className='data'>
            <div className='result'>{routineOrder}</div>
            <div className='unit'>th</div>
          </div>
          <div>WORKOUT</div>
        </S.routineResultItem>
        <S.routineResultItem>
          <div className='data'>
            <div className='result'>{durationExecise()}</div>
            <div className='unit'>분</div>
          </div>
          <div>DURATION</div>
        </S.routineResultItem>
        <S.routineResultItem>
          <div className='data'>
            <div className='result'>{totalVolume}</div>
            <div className='unit'>KG</div>
          </div>
          <div>VOLUME</div>
        </S.routineResultItem>
        <S.routineResultItem>
          <div className='data result'>{currentRoutineData.workout.length}</div>
          <div>EXERCISES</div>
        </S.routineResultItem>
        <S.routineResultItem>
          <div className='data'>
            <div className='result'>{totalSet}</div>
            <div className='unit'>세트</div>
          </div>
          <div>SETS</div>
        </S.routineResultItem>
        <S.routineResultItem>
          <div className='data'>
            <div className='result'>{totalRab}</div>
            <div className='unit'>회</div>
          </div>
          <div>RPES</div>
        </S.routineResultItem>
      </S.routineResultBox>
      <S.homeRouterBtnBox>
        <button onClick={homeNaviHadler} type='button'>
          홈으로 돌아가기
        </button>
      </S.homeRouterBtnBox>
    </S.routinefinishContainer>
  )
}

export default RoutineFinish
