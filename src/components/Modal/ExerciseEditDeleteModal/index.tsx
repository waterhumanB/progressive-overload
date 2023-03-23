import { useState } from 'react'
import { useAppDispatch } from '../../../hooks/useAppDispatch'
import { useAppSelector } from '../../../hooks/useAppSelector'
import { getExerciseData } from '../../../states/exercises'
import { changeExerciseInRoutine, deleteExerciseInRoutine, getRoutineData } from '../../../states/routines'
import { getTypesData } from '../../../states/types'
import { IExerciseEditDeleteModalProps } from '../../../types/allProps.d'
import { findCategory, findTarget, findType } from '../../../utils/findMenu'
import { ReactComponent as Arrow } from '../../../assets/imgs/arrow.svg'
import * as S from './styles'

const ExerciseEditDeleteModal = ({ toggleModalHandler, nowExerciseIdData }: IExerciseEditDeleteModalProps) => {
  const exerciseSelector = useAppSelector(getExerciseData)
  const routineSelector = useAppSelector(getRoutineData)
  const typeSelector = useAppSelector(getTypesData)
  const dispatch = useAppDispatch()
  const [changeExercise, setChangeExercise] = useState(false)
  const [recommendExerciseOrder, setRecommendExerciseOrder] = useState(0)

  const recommendExerciseList = Object.values(exerciseSelector.exercises.byId).filter(
    (data) =>
      data.mainTarget === exerciseSelector.exercises.byId[nowExerciseIdData[1]].mainTarget &&
      !routineSelector.routines.byId[nowExerciseIdData[0]].workout.includes(data.id)
  )

  const changeExerciseHandler = () => {
    setChangeExercise(true)
  }
  const deleteExerciseHandler = () => {
    dispatch(
      deleteExerciseInRoutine({
        id: nowExerciseIdData[0],
        exerciseId: nowExerciseIdData[1],
      })
    )
    toggleModalHandler()
  }

  const recommendExerciseOrderLeftHandler = () => {
    if (recommendExerciseOrder > 0) {
      setRecommendExerciseOrder(recommendExerciseOrder - 1)
    }
  }

  const recommendExerciseOrderRightHandler = () => {
    if (recommendExerciseOrder < recommendExerciseList.length - 1) {
      setRecommendExerciseOrder(recommendExerciseOrder + 1)
    }
  }

  const selectExerciseHandler = () => {
    const { id } = recommendExerciseList.slice(recommendExerciseOrder, recommendExerciseOrder + 1)[0]
    const exerciseDataToChange = {
      id: nowExerciseIdData[0],
      exerciseIdToChange: nowExerciseIdData[1],
      exerciseIdSelected: id,
    }
    dispatch(changeExerciseInRoutine(exerciseDataToChange))
    toggleModalHandler()
  }

  return (
    <S.exerciseEditDeleteModalContainer>
      {!changeExercise ? (
        <S.exerciseEditDeleteTitle>운동을 루틴에서 삭제할까요?</S.exerciseEditDeleteTitle>
      ) : (
        <S.selectExerciseContainer>
          {recommendExerciseList.length ? (
            <S.selectExerciseBox>
              <button
                type='button'
                className={recommendExerciseOrder === 0 ? 'left hidden' : 'left'}
                onClick={recommendExerciseOrderLeftHandler}
              >
                <Arrow />
              </button>
              {recommendExerciseList.slice(recommendExerciseOrder, recommendExerciseOrder + 1).map((data) => (
                <S.selectExerciseItem key={data.id}>
                  <div className='title'>
                    <div>{`${findCategory(data.categoryId)} ${findType(typeSelector.types.byId, data.typeId)}`}</div>
                  </div>
                  <div className='target'>
                    <div>{`${findTarget(data.mainTarget)} ${findTarget(data.secondaryTarget)}`}</div>
                  </div>
                </S.selectExerciseItem>
              ))}
              <button
                type='button'
                className={recommendExerciseOrder === recommendExerciseList.length - 1 ? ' hidden' : ''}
                onClick={recommendExerciseOrderRightHandler}
              >
                <Arrow />
              </button>
            </S.selectExerciseBox>
          ) : (
            <div className='noExercise'>대체할 운동이 없습니다.</div>
          )}
        </S.selectExerciseContainer>
      )}
      {!changeExercise ? (
        <S.exerciseEditDeleteBtnBox>
          <button type='button' onClick={changeExerciseHandler}>
            다른 운동 대체
          </button>
          <button type='button' onClick={deleteExerciseHandler}>
            운동 삭제하기
          </button>
        </S.exerciseEditDeleteBtnBox>
      ) : (
        <S.exerciseEditDeleteBtnBox>
          {recommendExerciseList.length ? (
            <button type='button' onClick={selectExerciseHandler}>
              운동 대체 하기
            </button>
          ) : (
            <button type='button' onClick={toggleModalHandler}>
              닫기
            </button>
          )}
        </S.exerciseEditDeleteBtnBox>
      )}
    </S.exerciseEditDeleteModalContainer>
  )
}

export default ExerciseEditDeleteModal
