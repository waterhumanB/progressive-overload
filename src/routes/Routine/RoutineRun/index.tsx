import { useState } from 'react'
import * as S from './styles'
import { useLocation } from 'react-router-dom'
import { useAppSelector } from '../../../hooks/useAppSelector'
import { getRoutineData } from '../../../states/routines'
import { getExerciseData } from '../../../states/exercises'
import { findCategory, findTarget, findType } from '../../../utils/findmenu'
import { getTypesData } from '../../../states/types'
import { RoutineTimer, RoutineRecordSet, RoutineRunRecordBtn } from '../../../components/Routine'
import { IRoutineSetData } from '../../../types/allProps.d'

import Modal from '../../../components/Modal'
import CurrentExerciseRecordCard from '../../../components/Routine/CurrentExerciseRecordCard'

const INIT_DATA = [
  {
    order: 1,
    kg: 0,
    rab: 0,
    finish: false,
  },
  {
    order: 2,
    kg: 0,
    rab: 0,
    finish: false,
  },
  {
    order: 3,
    kg: 0,
    rab: 0,
    finish: false,
  },
]

const RoutineRun = () => {
  const [runExerciseOrder, setRunExerciseOrder] = useState(0)
  const [seconds, setSeconds] = useState(30)
  const [toggleModal, setToggleModal] = useState(false)
  const [recordSet, setRecordSet] = useState<IRoutineSetData[]>(INIT_DATA)
  const location = useLocation()
  const routineSelector = useAppSelector(getRoutineData)
  const exerciseSelector = useAppSelector(getExerciseData)
  const typeSelector = useAppSelector(getTypesData)

  const nowExercise = routineSelector.routines.byId[location.state].workout
  const currentExerciseData = exerciseSelector.exercises.byId[nowExercise[runExerciseOrder]]

  const exerciseremainder = nowExercise.length - runExerciseOrder - 1

  const toggleModalHandler = () => {
    setToggleModal(!toggleModal)
  }
  return (
    <S.routineRunContainer>
      <S.routineRunBox>
        <S.routineRunTitleBox>
          <div className='category'>{`${findCategory(currentExerciseData.categoryId)} ${findType(
            typeSelector.types.byId,
            currentExerciseData.typeId
          )}`}</div>
          <div className='target'>{`${findTarget(currentExerciseData.mainTarget)} ${findTarget(
            currentExerciseData.secondaryTarget
          )}`}</div>
        </S.routineRunTitleBox>
        <S.routineRunWorkout>
          <div>기록</div>
          <div>남은 운동 : {exerciseremainder}</div>
        </S.routineRunWorkout>
        <S.routineRunRecord>
          <div>세트</div>
          <div>Kg</div>
          <div>랩</div>
          <div>완료</div>
        </S.routineRunRecord>
        <RoutineRecordSet
          seconds={seconds}
          toggleModalHandler={toggleModalHandler}
          recordSet={recordSet}
          setRecordSet={setRecordSet}
        />
        <RoutineRunRecordBtn
          currentRoutine={location.state}
          currentExerciseData={currentExerciseData}
          recordSet={recordSet}
          setRecordSet={setRecordSet}
          nowExercise={nowExercise}
          runExerciseOrder={runExerciseOrder}
          setRunExerciseOrder={setRunExerciseOrder}
          exerciseremainder={exerciseremainder}
        />
        <CurrentExerciseRecordCard currentExerciseData={currentExerciseData} />
        <div>
          <div>유튜브 자세 영상</div>
          <div>유튜브 영상</div>
          <div>유튜브 자세 영상</div>
          <div>유튜브 영상</div>
          <div>유튜브 자세 영상</div>
          <div>유튜브 영상</div>
          <div>유튜브 자세 영상</div>
          <div>유튜브 영상</div>
          <div>유튜브 자세 영상</div>
          <div>유튜브 영상</div>
        </div>
      </S.routineRunBox>
      <RoutineTimer seconds={seconds} setSeconds={setSeconds} />
      {toggleModal && (
        <Modal
          toggleModalHandler={toggleModalHandler}
          modalName='timer'
          stateTypeName=''
          stateData={seconds}
          setStateData={setSeconds}
        />
      )}
    </S.routineRunContainer>
  )
}

export default RoutineRun
