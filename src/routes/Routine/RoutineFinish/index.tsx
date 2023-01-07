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
  const currentRutineData = routineSelector.routines.byId[location.state]

  const currentExerciseRecordIds = currentRutineData.recent.length > 0 && currentRutineData.recent[0].recordIds

  const currentExeciseRecordData = Object.values(recordsSelector.records.byId)
    .filter((data) => currentExerciseRecordIds && currentExerciseRecordIds.includes(data.id))
    .map((data) => data.set)
  const totalSet = currentExeciseRecordData.map((data) => data.length).reduce((acc, el) => acc + el)
  const totalRab = currentExeciseRecordData
    .map((data) => data.map((item) => item.rab).reduce((acc, el) => acc + el))
    .reduce((acc, el) => acc + el)
  const totalVolume = currentExeciseRecordData
    .map((data) => data.map((item) => item.kg * item.rab).reduce((acc, el) => acc + el))
    .reduce((acc, el) => acc + el)

  const durationExecise = () => {
    const startTime = currentRutineData.recent.reverse()[0].startAt.split(' ')[4].split(':')
    const endTime = currentRutineData.recent.reverse()[0].endAt.split(' ')[4].split(':')
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
        <div className='title'>{currentRutineData.title}</div>
        <div className='date'>{fetchedDate(currentRutineData.recent.reverse()[0].endAt)}</div>
      </S.routineTitleBox>
      <AfterExercise />
      <S.routineResultBox>
        <S.routineResultItem>
          <div className='data'>
            <div className='result'>{routineSelector.routines.allIds.indexOf(location.state) + 1}</div>
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
          <div className='data result'>{currentRutineData.workout.length}</div>
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
