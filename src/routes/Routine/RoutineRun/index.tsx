import { useEffect, useState } from 'react'
import * as S from './styles'
import { useLocation } from 'react-router-dom'
import { useAppSelector } from '../../../hooks/useAppSelector'
import { getRoutineData } from '../../../states/routines'
import { getExerciseData } from '../../../states/exercises'
import { findCategory, findTarget, findType } from '../../../utils/findMenu'
import { getTypesData } from '../../../states/types'
import { RoutineTimer, RoutineRecordSet, RoutineRunRecordBtn } from '../../../components/Routine'
import { IRoutineSetData } from '../../../types/allProps.d'

import Modal from '../../../components/Modal'
import CurrentExerciseRecordCard from '../../../components/Routine/CurrentExerciseRecordCard'
import YoutubeCard from '../../../components/YoutubeCard'
import { useAppDispatch } from '../../../hooks/useAppDispatch'
import { getYoutubeExerciseData, getYoutubeExerciseDataList } from '../../../states/youtubeExercise'
import { getRecordsData } from '../../../states/records'

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

  const dispatch = useAppDispatch()
  const location = useLocation()
  const routineSelector = useAppSelector(getRoutineData)
  const exerciseSelector = useAppSelector(getExerciseData)
  const typeSelector = useAppSelector(getTypesData)
  const youtubeSelector = useAppSelector(getYoutubeExerciseDataList)
  const recordSelector = useAppSelector(getRecordsData)

  const nowExercise = routineSelector.routines.byId[location.state].workout
  const currentExerciseData = exerciseSelector.exercises.byId[nowExercise[runExerciseOrder]]

  const exerciseRemainder = nowExercise.length - runExerciseOrder - 1

  const exerciseListData = Object.values(exerciseSelector.exercises.byId).filter((data) =>
    nowExercise.includes(data.id)
  )

  const youtubeSerachExerciseListData = exerciseListData.map((data) => {
    return `${findCategory(data.categoryId)}${findType(typeSelector.types.byId, data.typeId)}`
  })

  const toggleModalHandler = () => {
    setToggleModal(!toggleModal)
  }

  useEffect(() => {
    dispatch(getYoutubeExerciseData(youtubeSerachExerciseListData))
  }, [])

  useEffect(() => {
    if (currentExerciseData.record.length > 0) {
      const currentExerciseRecords = Object.values(recordSelector.records.byId)
        .filter((data) => currentExerciseData.record.includes(data.id))
        .reverse()[0]
        ?.set.map((item) => ({ ...item, finish: false }))
      setRecordSet(currentExerciseRecords)
    }
  }, [runExerciseOrder])

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
          <div>남은 운동 : {exerciseRemainder}</div>
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
          exerciseRemainder={exerciseRemainder}
        />
        <CurrentExerciseRecordCard currentExerciseData={currentExerciseData} />
      </S.routineRunBox>
      <S.youtubeBox>
        <YoutubeCard categoryIndex={runExerciseOrder} youtubeData={youtubeSelector} />
      </S.youtubeBox>
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
