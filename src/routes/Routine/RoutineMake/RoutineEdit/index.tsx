import { ChangeEvent, useEffect, useState } from 'react'
import * as S from './styles'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../../../hooks/useAppDispatch'
import { editRoutine } from '../../../../states/routines'
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
  const navigate = useNavigate()

  const backRouterHanlder = () => {
    navigate(-1)
  }

  const dispatchEditRouterHanlder = () => {
    dispatch(
      editRoutine({
        ...location.state,
        title: routineName,
      })
    )
    navigate('/routine')
  }

  const exerciseEditRouterHanlder = () => {
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
    <S.routineEditPageConatiner>
      <RoutinePage
        backPageHandler={backRouterHanlder}
        title='나만의 루틴 수정하기'
        routineName={routineName}
        routineNameHandler={routineNameHandler}
        placeholder='루틴 이름을 입력해주세요!'
        locationState={location.state}
        bottomTwoBtn={false}
        disabled={routineName}
        editRoutineHandler={dispatchEditRouterHanlder}
        editExerciseHanlder={exerciseEditRouterHanlder}
        twoBtnValue1='운동 수정하기'
        twoBtnValue2='루틴 수정완료'
      />
    </S.routineEditPageConatiner>
  )
}

export default RoutineEdit
