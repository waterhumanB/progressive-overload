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
  const dispatch = useAppDispatch()
  const exerciseSelector = useAppSelector(getExerciseData)
  const routineSelector = useAppSelector(getRoutineData)
  const typeSelector = useAppSelector(getTypesData)
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
        <S.exerciseEditDeleteTitle>다른 운동으로 대체 및 삭제할 수 있습니다.</S.exerciseEditDeleteTitle>
      ) : (
        <S.selectExerciseContainer>
          {recommendExerciseList.length ? (
            <S.selectExerciseBox>
              <S.selectExerciseBtn
                hidden={recommendExerciseOrder === 0}
                direction='left'
                onClick={recommendExerciseOrderLeftHandler}
              >
                <Arrow />
              </S.selectExerciseBtn>
              {recommendExerciseList.slice(recommendExerciseOrder, recommendExerciseOrder + 1).map((data) => (
                <S.selectExerciseItem key={data.id}>
                  <S.selectExerciseTitle>
                    <div>{`${findCategory(data.categoryId)} ${findType(typeSelector.types.byId, data.typeId)}`}</div>
                  </S.selectExerciseTitle>
                  <S.selectExerciseTarget>
                    <div>{`${findTarget(data.mainTarget)} ${findTarget(data.secondaryTarget)}`}</div>
                  </S.selectExerciseTarget>
                </S.selectExerciseItem>
              ))}
              <S.selectExerciseBtn
                hidden={recommendExerciseOrder === recommendExerciseList.length - 1}
                direction=''
                onClick={recommendExerciseOrderRightHandler}
              >
                <Arrow />
              </S.selectExerciseBtn>
            </S.selectExerciseBox>
          ) : (
            <S.noExercise>대체할 운동이 없습니다.</S.noExercise>
          )}
        </S.selectExerciseContainer>
      )}
      {!changeExercise ? (
        <S.exerciseEditDeleteBtnBox>
          <button type='button' onClick={changeExerciseHandler}>
            대체하기
          </button>
          <button type='button' onClick={deleteExerciseHandler}>
            삭제하기
          </button>
          <button type='button' onClick={toggleModalHandler}>
            닫기
          </button>
        </S.exerciseEditDeleteBtnBox>
      ) : (
        <S.exerciseEditDeleteBtnBox>
          <button type='button' onClick={selectExerciseHandler}>
            운동 대체 하기
          </button>
          <button type='button' onClick={toggleModalHandler}>
            닫기
          </button>
        </S.exerciseEditDeleteBtnBox>
      )}
    </S.exerciseEditDeleteModalContainer>
  )
}

export default ExerciseEditDeleteModal
