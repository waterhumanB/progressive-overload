import { ChangeEvent, useState } from 'react'
import * as S from './styles'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../../../hooks/useAppSelector'
import { useAppDispatch } from '../../../../hooks/useAppDispatch'
import { getRoutineData, setRoutine } from '../../../../states/routines'
import { RoutinePage } from '../../../../components/Routine'
import { IRoutineItem } from '../../../../types/routines.d'

const RoutineEdit = () => {
  const [routineName, setRoutineName] = useState('')
  const location = useLocation() as { state: IRoutineItem }
  const dispatch = useAppDispatch()
  const routineSelector = useAppSelector(getRoutineData)
  const navigate = useNavigate()

  const backPageRouterHandler = () => {
    navigate(-1)
  }

  const dispatchAndLocationStateHandler = () => {
    const routineDataToDispatch = {
      [`routine${routineSelector.routines.allIds.length + 1}`]: {
        id: `routine${routineSelector.routines.allIds.length + 1}`,
        title: routineName,
        workout: location.state.workout,
        recent: [],
      },
    }
    dispatch(setRoutine(routineDataToDispatch))
    navigate('/routine')
  }

  const routineNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setRoutineName(e.currentTarget.value)
  }
  return (
    <S.routineAddPageContainer>
      <RoutinePage
        backPageHandler={backPageRouterHandler}
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
    </S.routineAddPageContainer>
  )
}

export default RoutineEdit
