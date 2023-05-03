import { ChangeEvent, useEffect, useState } from 'react'
import * as S from './styles'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../../../hooks/useAppDispatch'
import { editRoutine } from '../../../../states/routines'
import { RoutinePage } from '../../../../components/Routine'
import { IRoutineItem } from '../../../../types/routines.d'

const RoutineEdit = () => {
  const [routineName, setRoutineName] = useState('')
  const location = useLocation() as { state: IRoutineItem }
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const backRouterHandler = () => {
    navigate(-1)
  }

  const dispatchEditRouterHandler = () => {
    dispatch(
      editRoutine({
        ...location.state,
        title: routineName,
      })
    )
    navigate('/routine')
  }

  const exerciseEditRouterHandler = () => {
    navigate('/routine/routine-make', {
      state: {
        ...location.state,
        title: routineName,
      },
    })
  }

  const routineNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setRoutineName(e.currentTarget.value)
  }

  useEffect(() => {
    setRoutineName(location.state.title)
  }, [])
  return (
    <S.routineEditPageContainer>
      <RoutinePage
        backPageHandler={backRouterHandler}
        title='나만의 루틴 수정하기'
        routineName={routineName}
        routineNameHandler={routineNameHandler}
        placeholder='루틴 이름을 입력해주세요!'
        locationState={location.state}
        bottomTwoBtn={false}
        disabled={routineName}
        editRoutineHandler={dispatchEditRouterHandler}
        editExerciseHandler={exerciseEditRouterHandler}
        twoBtnValue1='운동 수정하기'
        twoBtnValue2='루틴 수정완료'
      />
    </S.routineEditPageContainer>
  )
}

export default RoutineEdit
