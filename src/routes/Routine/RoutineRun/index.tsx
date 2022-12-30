import { useState } from 'react'
import * as S from './styles'
import { useLocation } from 'react-router-dom'
import { useAppSelector } from '../../../hooks/useAppSelector'
import { getRoutineData } from '../../../states/routines'
import { getExerciseData } from '../../../states/exercise'
import { findCategory, findTarget, findType } from '../../../utils/findmenu'
import { getTypesData } from '../../../states/types'
import RoutineRecordSet from '../../../components/RoutineRecordSet'
import { IRoutineSetData } from '../../../types/allProps.d'

import { ReactComponent as Minus } from '../../../assets/imgs/minus.svg'
import { ReactComponent as Plus } from '../../../assets/imgs/plus.svg'
import { ReactComponent as DoubleCheck } from '../../../assets/imgs/double-check.svg'
import { ReactComponent as ArrowRight } from '../../../assets/imgs/arrow-right.svg'

const INIT_DATA = [
  {
    order: 1,
    kg: 0,
    rab: 0,
    finish: false,
  },
]

const RoutineRun = () => {
  const [runExerciseOrder, setRunExerciseOrder] = useState(0)
  const [recordSet, setRecordSet] = useState<IRoutineSetData[]>(INIT_DATA)
  const location = useLocation()
  const routineSelector = useAppSelector(getRoutineData)
  const exerciseSelector = useAppSelector(getExerciseData)
  const typeSelector = useAppSelector(getTypesData)

  const nowExercise = routineSelector.routines.byId[location.state].workout
  const runExerciseData = exerciseSelector.exercises.byId[nowExercise[runExerciseOrder]]

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
        <RoutineRecordSet recordSet={recordSet} setRecordSet={setRecordSet} />
        <S.routineRunRecordBtnBox>
          <button className='setMinus' type='button'>
            <Minus /> <span>세트 삭제</span>
          </button>
          <button className='setPlus' type='button'>
            <Plus /> <span>세트 추가</span>
          </button>
        </S.routineRunRecordBtnBox>
        <S.routineRunRecordBtnBox>
          <button className='doubeCheck' type='button'>
            <DoubleCheck /> <span>모든 세트 완료</span>
          </button>
          <button className='nextSet' type='button'>
            <ArrowRight /> <span>다음 운동 시작</span>
          </button>
        </S.routineRunRecordBtnBox>
      </div>
    </S.routineRunContainer>
  )
}

export default RoutineRun
