import { ChangeEvent, MouseEvent, useEffect, useState } from 'react'
import * as S from './styles'
import { ReactComponent as Arrow } from '../../../../assets/imgs/arrow.svg'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../../../hooks/useAppSelector'
import { getExerciseData } from '../../../../states/exercise'
import { getTypesData } from '../../../../states/types'
import { findCategory, findTarget, findType } from '../../../../utils/findmenu'
import { useAppDispatch } from '../../../../hooks/useAppDispatch'
import { editRoutine, getRoutineData, setRoutine } from '../../../../states/routines'

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
  const exerciseSelector = useAppSelector(getExerciseData)
  const typeSelector = useAppSelector(getTypesData)
  const routineSelector = useAppSelector(getRoutineData)
  const navigate = useNavigate()

  const naviRouterAndRoutineDataHandler = (e: MouseEvent<HTMLButtonElement>) => {
    const { name } = e.currentTarget
    if (name === 'back') {
      navigate(-1)
    }
    if (name === 'add') {
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
    if (name === 'edit') {
      dispatch(
        editRoutine({
          ...location.state,
          title: routineName,
        })
      )
      navigate('/routine')
    }
    if (name === 'exerciseEdit') {
      navigate('/routine/routine-make', {
        state: {
          ...location.state,
          title: routineName,
        },
      })
    }
  }

  const routineNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setRoutineName(e.currentTarget.value)
  }

  useEffect(() => {
    setRoutineName(location.state.title)
  }, [])
  return (
    <S.routineEditPageConatiner>
      <S.routineEditTitleBox>
        <button onClick={naviRouterAndRoutineDataHandler} name='back' type='button'>
          <Arrow />
        </button>
        <div>나의 루틴 수정하기</div>
      </S.routineEditTitleBox>
      <S.routineEdtDataBox>
        <S.routineEdtInput inputValue={!routineName}>
          <input value={routineName} onChange={routineNameHandler} placeholder='루틴 이름 수정하기!' />
        </S.routineEdtInput>
        <S.exerciseBox>
          {location.state.workout.map((data) => (
            <S.exerciseCard key={data}>
              <S.mainTaget>{findTarget(exerciseSelector.exercises.byId[data].mainTarget)}</S.mainTaget>
              <S.exerciseInfo>
                <S.exerciseTitle>
                  <div>{findCategory(exerciseSelector.exercises.byId[data].categoryId)}</div>
                  <div>{findType(typeSelector.types.byId, exerciseSelector.exercises.byId[data].typeId)}</div>
                </S.exerciseTitle>
              </S.exerciseInfo>
            </S.exerciseCard>
          ))}
        </S.exerciseBox>
      </S.routineEdtDataBox>
      <S.editBtnBox>
        <S.exerciseEditBtn onClick={naviRouterAndRoutineDataHandler} name='exerciseEdit'>
          운동 변경하기
        </S.exerciseEditBtn>
        <S.routineEditBtn disabled={!routineName} onClick={naviRouterAndRoutineDataHandler} name='edit'>
          루틴 수정완료
        </S.routineEditBtn>
      </S.editBtnBox>
    </S.routineEditPageConatiner>
  )
}

export default RoutineEdit
