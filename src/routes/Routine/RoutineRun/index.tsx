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
import { ReactComponent as Flag } from '../../../assets/imgs/flag.svg'
import RoutineTimer from '../../../components/RoutineTimer'
import Modal from '../../../components/Modal'

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
  const [seconds, setSeconds] = useState(30)
  const [toggleModal, setToggleModal] = useState(false)
  const [recordSet, setRecordSet] = useState<IRoutineSetData[]>(INIT_DATA)
  const location = useLocation()
  const routineSelector = useAppSelector(getRoutineData)
  const exerciseSelector = useAppSelector(getExerciseData)
  const typeSelector = useAppSelector(getTypesData)

  const nowExercise = routineSelector.routines.byId[location.state].workout
  const runExerciseData = exerciseSelector.exercises.byId[nowExercise[runExerciseOrder]]
  const allChecked = recordSet.filter((data) => data.finish === false)

  const exerciseremainder = nowExercise.length - runExerciseOrder - 1

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
    if (nowExercise.length > runExerciseOrder + 1) {
      setRunExerciseOrder(runExerciseOrder + 1)
      setRecordSet(INIT_DATA)
    }
  }

  const toggleModalHandler = () => {
    setToggleModal(!toggleModal)
  }

  return (
    <S.routineRunContainer>
      <S.routineRunBox>
        <S.routineRunTitleBox>
          <div className='category'>{`${findCategory(runExerciseData.categoryId)} ${findType(
            typeSelector.types.byId,
            runExerciseData.typeId
          )}`}</div>
          <div className='target'>{`${findTarget(runExerciseData.mainTarget)} ${findTarget(
            runExerciseData.secondaryTarget
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
            <button
              onClick={nextExerciseStartHanlder}
              className='nextSet'
              disabled={allChecked.length > 0}
              type='button'
            >
              <Flag /> <span>운동 완료 하기</span>
            </button>
          ) : (
            <button
              onClick={nextExerciseStartHanlder}
              className='nextSet'
              disabled={allChecked.length > 0}
              type='button'
            >
              <ArrowRight /> <span>다음 운동 시작</span>
            </button>
          )}
        </S.routineRunRecordBtnBox>
      </S.routineRunBox>
      <div>
        <div>이전 기록</div>
        <div>이전 기록들</div>
      </div>
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
