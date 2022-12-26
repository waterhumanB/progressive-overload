import React, { useState } from 'react'
import { useAppDispatch } from '../../../hooks/useAppDispatch'
import { useAppSelector } from '../../../hooks/useAppSelector'
import { getExerciseData } from '../../../states/exercise'
import { deleteExerciseInRoutine, getRoutineData } from '../../../states/routines'
import { IExerciseEditDeleteModalProps } from '../../../types/allProps.d'
import * as S from './styles'

const ExerciseEditDeleteModal = ({
  toggleModalHandler,
  nowExerciseIdData,
  setnowExerciseIdData,
}: IExerciseEditDeleteModalProps) => {
  const exerciseSelector = useAppSelector(getExerciseData)
  const routineSelector = useAppSelector(getRoutineData)
  const dispatch = useAppDispatch()
  const [changeExercise, setChangeExercise] = useState(false)
  // console.log(exerciseSelector.exercises.byId[nowExerciseIdData[1]])
  // console.log(routineSelector.routines.byId)
  console.log('arr', nowExerciseIdData)
  const changeExerciseHanlder = () => {
    setChangeExercise(true)
  }
  const deleteExerciseHanlder = () => {
    // toggleModalHandler()
    dispatch(
      deleteExerciseInRoutine({
        id: nowExerciseIdData[0],
        workoutId: nowExerciseIdData[1],
      })
    )
    toggleModalHandler()
  }
  return (
    <S.exerciseEditDeleteModalContainer>
      {!changeExercise ? (
        <S.exerciseEditDeleteTitle>운동을 루틴에서 삭제할까요?</S.exerciseEditDeleteTitle>
      ) : (
        <div>운동 바꿔용</div>
      )}
      <S.exerciseEditDeleteBtnBox>
        <button type='button' onClick={changeExerciseHanlder}>
          다른 운동 대체
        </button>
        <button type='button' onClick={deleteExerciseHanlder}>
          운동 삭제하기
        </button>
      </S.exerciseEditDeleteBtnBox>
    </S.exerciseEditDeleteModalContainer>
  )
}

export default ExerciseEditDeleteModal
