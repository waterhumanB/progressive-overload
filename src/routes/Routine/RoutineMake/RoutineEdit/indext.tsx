import { ChangeEvent, MouseEvent, useState } from 'react'
import * as S from './styles'
import { ReactComponent as Arrow } from '../../../../assets/imgs/arrow.svg'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../../../hooks/useAppSelector'
import { getExerciseData } from '../../../../states/exercise'
import { getTypesData } from '../../../../states/types'
import { findCategory, findTarget, findType } from '../../../../utils/findmenu'
import { useAppDispatch } from '../../../../hooks/useAppDispatch'
import { getRoutineData, setRoutine } from '../../../../states/routines'

const RoutineEdit = () => {
  const [routineName, setRoutineName] = useState('')
  const location = useLocation() as { state: { addExercise: string[] } }
  const dispatch = useAppDispatch()
  const exerciseSelector = useAppSelector(getExerciseData)
  const typeSelector = useAppSelector(getTypesData)
  const routineSelector = useAppSelector(getRoutineData)
  const navigate = useNavigate()

  const routineLength = routineSelector.routines.allIds.length

  const naviRouterAndRoutineDataHandler = (e: MouseEvent<HTMLButtonElement>) => {
    const routineData = {
      [`routine${routineLength + 1}`]: {
        id: `routine${routineLength + 1}`,
        title: routineName,
        workout: location.state.addExercise,
        recent: [],
      },
    }
    if (e.currentTarget.name === 'back') {
      navigate(-1)
    }
    if (e.currentTarget.name === 'add') {
      dispatch(setRoutine(routineData))
      navigate('/routine')
    }
    if (e.currentTarget.name === 'eidt') {
      console.log('edit')
    }
  }

  const routineNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setRoutineName(e.currentTarget.value)
  }
  return (
    <S.routineEditPageConatiner>
      <S.routineEditTitleBox>
        <button onClick={naviRouterAndRoutineDataHandler} name='back' type='button'>
          <Arrow />
        </button>
        <div>나만의 루틴 만들기</div>
      </S.routineEditTitleBox>
      <S.routineEdtDataBox>
        <S.routineEdtInput inputValue={!routineName}>
          <input onChange={routineNameHandler} placeholder='루틴 이름을 입력해주세요!' />
        </S.routineEdtInput>
        <S.exerciseBox>
          {location.state.addExercise.map((data) => (
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
      <S.routineAddBtn disabled={!routineName} onClick={naviRouterAndRoutineDataHandler} name='add'>
        루틴 생성
      </S.routineAddBtn>
    </S.routineEditPageConatiner>
  )
}

export default RoutineEdit
