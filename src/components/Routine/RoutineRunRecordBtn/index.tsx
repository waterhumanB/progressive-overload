import * as S from './styles'
import { IRoutineRunRecordBtnProps } from '../../../types/allProps.d'

import { ReactComponent as Minus } from '../../../assets/imgs/minus.svg'
import { ReactComponent as Plus } from '../../../assets/imgs/plus.svg'
import { ReactComponent as DoubleCheck } from '../../../assets/imgs/double-check.svg'
import { ReactComponent as ArrowRight } from '../../../assets/imgs/arrow-right.svg'
import { ReactComponent as Flag } from '../../../assets/imgs/flag.svg'
import { useAppDispatch } from '../../../hooks/useAppDispatch'
import { useAppSelector } from '../../../hooks/useAppSelector'
import { useEffect, useState } from 'react'

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

const INIT_TIME = {
  startAt: new Date(),
  endAt: new Date(),
}

const RoutineRunRecordBtn = ({
  recordSet,
  setRecordSet,
  nowExercise,
  runExerciseOrder,
  setRunExerciseOrder,
  exerciseremainder,
  currentExerciseData,
  currentRoutine,
}: IRoutineRunRecordBtnProps) => {
  const [currentTime, setCurrentTime] = useState(INIT_TIME)
  const dispatch = useAppDispatch()
  const allChecked = recordSet.filter((data) => data.finish === false)
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

  const nextExerciseStartHanlder = () => {
    const recordData = {
      id: 'record',
      exerciseId: currentExerciseData.id,
      startAt: '',
      endAt: '',
      set: recordSet,
    }
    if (nowExercise.length > runExerciseOrder + 1) {
      setRunExerciseOrder(runExerciseOrder + 1)
      setRecordSet(INIT_DATA)
    }
  }
  useEffect(() => {
    setCurrentTime({ ...currentTime, startAt: new Date() })
    console.log('첫', currentTime)
  }, [runExerciseOrder])
  const timeHandler = () => {
    setCurrentTime({ ...currentTime, endAt: new Date() })
    console.log('후', currentTime)
  }
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
        {exerciseremainder === 0 ? (
          <button onClick={nextExerciseStartHanlder} className='nextSet' disabled={allChecked.length > 0} type='button'>
            <Flag /> <span>운동 완료 하기</span>
          </button>
        ) : (
          <button onClick={nextExerciseStartHanlder} className='nextSet' disabled={allChecked.length > 0} type='button'>
            <ArrowRight /> <span>다음 운동 시작</span>
          </button>
        )}
      </S.routineRunRecordBtnBox>
      <button onClick={timeHandler} type='button'>
        시간!
      </button>
    </div>
  )
}

export default RoutineRunRecordBtn
