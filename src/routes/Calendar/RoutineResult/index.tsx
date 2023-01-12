import * as S from './styles'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../../hooks/useAppSelector'
import { getRoutineData } from '../../../states/routines'
import { ReactComponent as AfterExercise } from '../../../assets/imgs/after-exercise.svg'
import { getRecordsData } from '../../../states/records'
import { fetchedDate } from '../../../utils/fetchedDate'
import { useState } from 'react'
import { IRoutineItem } from '../../../types/routines.d'

import { ReactComponent as Arrow } from '../../../assets/imgs/arrow.svg'
import { RoutineResultItem } from '../../../components/Calendar'

const RoutineResult = () => {
  const [routineResultOrder, setRoutineResultOrder] = useState(0)
  const [recentOrder, setRecentOrder] = useState(0)
  const location = useLocation() as { state: IRoutineItem[] }
  const navigate = useNavigate()
  const routineSelector = useAppSelector(getRoutineData)
  const recordsSelector = useAppSelector(getRecordsData)
  const currentRoutineData = location.state[routineResultOrder]

  const currentExerciseRecordIds =
    currentRoutineData.recent.length > 0 && currentRoutineData.recent[recentOrder].recordIds

  const currentExeciseRecordData = Object.values(recordsSelector.records.byId)
    .filter((data) => currentExerciseRecordIds && currentExerciseRecordIds.includes(data.id))
    .map((data) => data.set)
  const totalSet = currentExeciseRecordData.map((data) => data.length).reduce((acc, el) => acc + el)
  const totalRab = currentExeciseRecordData
    .map((data) => data.map((item) => item.rab))
    .flat(1)
    .reduce((acc, el) => acc + el)
  const totalVolume = currentExeciseRecordData
    .map((data) => data.map((item) => item.kg * item.rab))
    .flat(1)
    .reduce((acc, el) => acc + el)

  const currentRoutineOrder = Object.values(routineSelector.routines.byId)
    .map((data) => data.recent.map((item) => item.endAt))
    .flat(1)
    .indexOf(currentRoutineData.recent?.[recentOrder].endAt)

  const durationExecise = () => {
    const startTime = currentRoutineData.recent?.[recentOrder].startAt.split(' ')[4].split(':')
    const endTime = currentRoutineData.recent?.[recentOrder].endAt.split(' ')[4].split(':')
    const hour = (Number(endTime[0]) - Number(startTime[0])) * 60
    const minute = Number(endTime[1]) - Number(startTime[1])
    return hour + minute
  }

  const homeNaviHandler = () => {
    navigate('../calendar')
  }

  const nextRoutineHandler = () => {
    if (recentOrder + 1 < currentRoutineData.recent.length) {
      setRecentOrder((prev) => prev + 1)
    }
    if (routineResultOrder + 1 < location.state.length) {
      setRoutineResultOrder((prev) => prev + 1)
    }
  }
  const lastRoutineHandler = () => {
    if (recentOrder !== 0) {
      setRecentOrder((prev) => prev - 1)
    }
    if (routineResultOrder !== 0) {
      setRoutineResultOrder((prev) => prev - 1)
    }
  }
  return (
    <S.routinefinishContainer>
      <S.routineTitleBox>
        <S.routineHandlerBtnBox>
          <S.leftBtn
            disabled={recentOrder === 0 && routineResultOrder === 0}
            onClick={lastRoutineHandler}
            type='button'
          >
            <Arrow />
          </S.leftBtn>
          <S.titleDiv>{currentRoutineData.title}</S.titleDiv>
          <S.rightBtn
            disabled={
              recentOrder + 1 === currentRoutineData.recent.length && routineResultOrder + 1 === location.state.length
            }
            onClick={nextRoutineHandler}
            type='button'
          >
            <Arrow />
          </S.rightBtn>
        </S.routineHandlerBtnBox>
        <S.dateDiv>{fetchedDate(currentRoutineData.recent?.[recentOrder].endAt)}</S.dateDiv>
      </S.routineTitleBox>
      <AfterExercise />
      <S.routineResultBox>
        <RoutineResultItem result={currentRoutineOrder + 1} unit='th' resultName='WORKOUT' />
        <RoutineResultItem result={durationExecise()} unit='분' resultName='DURATION' />
        <RoutineResultItem result={totalVolume} unit='KG' resultName='VOLUME' />
        <RoutineResultItem result={currentRoutineData.workout.length} unit='' resultName='EXERCISES' />
        <RoutineResultItem result={totalSet} unit='세트' resultName='SETS' />
        <RoutineResultItem result={totalRab} unit='회' resultName='RPES' />
      </S.routineResultBox>
      <S.homeRouterBtnBox>
        <button onClick={homeNaviHandler} type='button'>
          캘린더로 돌아가기
        </button>
      </S.homeRouterBtnBox>
    </S.routinefinishContainer>
  )
}

export default RoutineResult
