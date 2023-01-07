import * as S from './styles'
import { IRoutineRunRecordBtnProps } from '../../../types/allProps.d'

import { ReactComponent as Minus } from '../../../assets/imgs/minus.svg'
import { ReactComponent as Plus } from '../../../assets/imgs/plus.svg'
import { ReactComponent as DoubleCheck } from '../../../assets/imgs/double-check.svg'
import { ReactComponent as ArrowRight } from '../../../assets/imgs/arrow-right.svg'
import { ReactComponent as Flag } from '../../../assets/imgs/flag.svg'
import { useAppDispatch } from '../../../hooks/useAppDispatch'
import { useEffect, useState } from 'react'
import { getRecordsData, setRecord } from '../../../states/records'
import { useAppSelector } from '../../../hooks/useAppSelector'
import { setRecordInExercise } from '../../../states/exercises'
import { setEndAtTimeAndRecordsInRoutine } from '../../../states/routines'
import { useNavigate } from 'react-router-dom'

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
const startAt = new Date().toString().split(' G')[0]
const RoutineRunRecordBtn = ({
  recordSet,
  setRecordSet,
  nowExercise,
  runExerciseOrder,
  setRunExerciseOrder,
  exerciseRemainder,
  currentExerciseData,
  currentRoutine,
}: IRoutineRunRecordBtnProps) => {
  const [currentTime, setCurrentTime] = useState(startAt)
  const [currentRoutineRecordIds, setCurrentRoutineRecordIds] = useState<string[]>([])
  const recordSelector = useAppSelector(getRecordsData)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const allChecked = recordSet.filter((data) => data.finish === false)

  const recordData = {
    id: `record${recordSelector.records.allIds.length + 1}`,
    exerciseId: currentExerciseData.id,
    startAt: currentTime,
    endAt: new Date().toString().split(' G')[0],
    set: recordSet,
  }
  const setRecordInExerciseData = {
    id: currentExerciseData.id,
    recordId: `record${recordSelector.records.allIds.length + 1}`,
  }

  const setPlusHandler = () => {
    const newSet = {
      order: recordSet.length + 1,
      kg: 0,
      rab: 0,
      finish: false,
    }
    if (recordSet.length < 10) {
      setRecordSet([...recordSet, newSet])
    }
  }

  const setMiusHandler = () => {
    if (recordSet.length > 1) {
      setRecordSet(recordSet.slice(0, recordSet.length - 1))
    }
  }

  const setAllCheckHandler = () => {
    const allCheck = recordSet.map((data) => (!data.finish ? { ...data, finish: true } : data))
    setRecordSet(allCheck)
  }

  const nextExerciseStartHandler = () => {
    dispatch(setRecord(recordData))
    dispatch(setRecordInExercise(setRecordInExerciseData))
    if (nowExercise.length > runExerciseOrder + 1) {
      setRunExerciseOrder(runExerciseOrder + 1)
      setRecordSet(INIT_DATA)
    }
    setCurrentRoutineRecordIds((prev) => [...prev, recordData.id])
  }

  const routineFinishHandler = () => {
    setCurrentRoutineRecordIds((prev) => [...prev, recordData.id])
    dispatch(setRecord(recordData))
    dispatch(setRecordInExercise(setRecordInExerciseData))
    navigate('routine-finish', { state: currentRoutine })

    const routineEndData = {
      id: currentRoutine,
      endAt: new Date().toString().split(' G')[0],
      recordIds: [...currentRoutineRecordIds, recordData.id],
    }

    dispatch(setEndAtTimeAndRecordsInRoutine(routineEndData))
  }

  useEffect(() => {
    setCurrentTime(new Date().toString().split(' G')[0])
  }, [runExerciseOrder])

  return (
    <div>
      <S.routineRunRecordBtnBox>
        <button onClick={setMiusHandler} className='setMinus' type='button'>
          <Minus /> <span>세트 삭제</span>
        </button>
        <button onClick={setPlusHandler} className='setPlus' type='button'>
          <Plus /> <span>세트 추가</span>
        </button>
      </S.routineRunRecordBtnBox>
      <S.routineRunRecordBtnBox>
        <button onClick={setAllCheckHandler} className='doubeCheck' type='button'>
          <DoubleCheck /> <span>모든 세트 완료</span>
        </button>
        {exerciseRemainder === 0 ? (
          <button onClick={routineFinishHandler} className='nextSet' disabled={allChecked.length > 0} type='button'>
            <Flag /> <span>운동 완료 하기</span>
          </button>
        ) : (
          <button onClick={nextExerciseStartHandler} className='nextSet' disabled={allChecked.length > 0} type='button'>
            <ArrowRight /> <span>다음 운동 시작</span>
          </button>
        )}
      </S.routineRunRecordBtnBox>
    </div>
  )
}

export default RoutineRunRecordBtn
