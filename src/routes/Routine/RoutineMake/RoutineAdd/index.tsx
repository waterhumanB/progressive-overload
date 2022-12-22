import { ChangeEvent, useState } from 'react'
import * as S from './styles'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../../../hooks/useAppSelector'
import { useAppDispatch } from '../../../../hooks/useAppDispatch'
import { getRoutineData, setRoutine } from '../../../../states/routines'
import RoutinePage from '../../../../components/RoutinePage'

interface RoutineLocationState {
  id: string
  title: string
  workout: string[]
  recent: string[]
}

const RoutineEdit = () => {
  const [routineName, setRoutineName] = useState('')
  const location = useLocation() as { state: RoutineLocationState }
  const dispatch = useAppDispatch()
  const routineSelector = useAppSelector(getRoutineData)
  const navigate = useNavigate()

  const backPageRouterHanlder = () => {
    navigate(-1)
  }

  const dispatchAndLocationStateHandler = () => {
    const routineData = {
      [`routine${routineSelector.routines.allIds.length + 1}`]: {
        id: `routine${routineSelector.routines.allIds.length + 1}`,
        title: routineName,
        workout: location.state.workout,
        recent: [],
      },
    }
    dispatch(setRoutine(routineData))
    navigate('/routine')
  }

  const routineNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setRoutineName(e.currentTarget.value)
  }
  return (
    <S.routineAddPageConatiner>
      <RoutinePage
        backPageHandler={backPageRouterHanlder}
        title='나만의 루틴 추가하기'
        routineName={routineName}
        routineNameHandler={routineNameHandler}
        placeholder='루틴 이름을 입력해주세요!'
        locationState={location.state}
        bottomTwoBtn
        addRoutineHandler={dispatchAndLocationStateHandler}
        disabled={routineName}
        btnValue='루틴 생성'
      />
    </S.routineAddPageConatiner>
  )
}

export default RoutineEdit
