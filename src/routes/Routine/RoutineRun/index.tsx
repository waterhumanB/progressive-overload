import React, { useState } from 'react'
import * as S from './styles'
import { useLocation } from 'react-router-dom'
import { useAppSelector } from '../../../hooks/useAppSelector'
import { getRoutineData } from '../../../states/routines'
import { getExerciseData } from '../../../states/exercise'
import { findCategory, findTarget, findType } from '../../../utils/findmenu'
import { getTypesData } from '../../../states/types'

const RoutineRun = () => {
  const [runExerciseOrder, setRunExerciseOrder] = useState(0)
  const location = useLocation()
  const routineSelector = useAppSelector(getRoutineData)
  const exerciseSelector = useAppSelector(getExerciseData)
  const typeSelector = useAppSelector(getTypesData)
  const nowExercise = routineSelector.routines.byId[location.state].workout

  const runExerciseData = exerciseSelector.exercises.byId[nowExercise[runExerciseOrder]]
  console.log(nowExercise)
  console.log(runExerciseData)
  return (
    <S.routineRunContainer>
      <S.routineRunTitleBox>
        <div className='category'>{`${findCategory(runExerciseData.categoryId)} ${findType(
          typeSelector.types.byId,
          runExerciseData.typeId
        )}`}</div>
        <div className='target'>{`${findTarget(runExerciseData.mainTarget)} ${findTarget(
          runExerciseData.secondaryTarget
        )}`}</div>
      </S.routineRunTitleBox>
      <div>
        <S.routineRunWorkout>
          <div>기록</div>
          <div>남은 운동 : {nowExercise.length - runExerciseOrder - 1}</div>
        </S.routineRunWorkout>
        <S.routineRunRecord>
          <div>세트</div>
          <div>Kg</div>
          <div>랩</div>
          <div>완료</div>
        </S.routineRunRecord>
        <div>
          <div>1</div>
          <div>100</div>
          <div>12</div>
          <div>체크</div>
        </div>
        <div>
          <button type='button'>- 세트 삭제</button>
          <button type='button'>+ 세트 추가</button>
        </div>
        <div>
          <button type='button'>모든 세트 완료</button>
          <button type='button'>다음 운동 시작</button>
        </div>
      </div>
    </S.routineRunContainer>
  )
}

export default RoutineRun
