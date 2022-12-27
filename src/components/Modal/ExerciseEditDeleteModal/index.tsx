import { useState, MouseEvent } from 'react'
import { useAppDispatch } from '../../../hooks/useAppDispatch'
import { useAppSelector } from '../../../hooks/useAppSelector'
import { getExerciseData } from '../../../states/exercise'
import { deleteExerciseInRoutine, getRoutineData } from '../../../states/routines'
import { getTypesData } from '../../../states/types'
import { IExerciseEditDeleteModalProps } from '../../../types/allProps.d'
import { findCategory, findTarget, findType } from '../../../utils/findmenu'
import { ReactComponent as Arrow } from '../../../assets/imgs/arrow.svg'
import * as S from './styles'

const ExerciseEditDeleteModal = ({
  toggleModalHandler,
  nowExerciseIdData,
  setnowExerciseIdData,
}: IExerciseEditDeleteModalProps) => {
  const exerciseSelector = useAppSelector(getExerciseData)
  const routineSelector = useAppSelector(getRoutineData)
  const typeSelector = useAppSelector(getTypesData)
  const dispatch = useAppDispatch()
  const [changeExercise, setChangeExercise] = useState(false)
  const [recommendExerciseOrder, setRecommendExerciseOrder] = useState(0)
  const recommendExerciseList = Object.values(exerciseSelector.exercises.byId).filter(
    (data) => data.mainTarget === exerciseSelector.exercises.byId[nowExerciseIdData[1]].mainTarget
  )

  const changeExerciseHanlder = () => {
    setChangeExercise(true)
  }
  const deleteExerciseHanlder = () => {
    dispatch(
      deleteExerciseInRoutine({
        id: nowExerciseIdData[0],
        workoutId: nowExerciseIdData[1],
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
  console.log(recommendExerciseOrder, recommendExerciseList.length)
  return (
    <S.exerciseEditDeleteModalContainer>
      {!changeExercise ? (
        <S.exerciseEditDeleteTitle>운동을 루틴에서 삭제할까요?</S.exerciseEditDeleteTitle>
      ) : (
        <S.selectExerciseBox>
          <button
            type='button'
            className={recommendExerciseOrder === 0 ? 'left hidden' : 'left'}
            onClick={recommendExerciseOrderLeftHandler}
          >
            <Arrow />
          </button>
          {recommendExerciseList.slice(recommendExerciseOrder, recommendExerciseOrder + 1).map((data) => (
            <S.selectExercise key={data.id}>
              <div className='title'>
                <div>{`${findCategory(data.categoryId)} ${findType(typeSelector.types.byId, data.typeId)}`}</div>
              </div>
              <div className='target'>
                <div>{`${findTarget(data.mainTarget)} ${findTarget(data.secondaryTarget)}`}</div>
              </div>
            </S.selectExercise>
          ))}

          <button
            type='button'
            className={recommendExerciseOrder === recommendExerciseList.length - 1 ? ' hidden' : ''}
            onClick={recommendExerciseOrderRightHandler}
          >
            <Arrow />
          </button>
        </S.selectExerciseBox>
      )}
      {!changeExercise ? (
        <S.exerciseEditDeleteBtnBox>
          <button type='button' onClick={changeExerciseHanlder}>
            다른 운동 대체
          </button>
          <button type='button' onClick={deleteExerciseHanlder}>
            운동 삭제하기
          </button>
        </S.exerciseEditDeleteBtnBox>
      ) : (
        <S.exerciseEditDeleteBtnBox>
          <button type='button'>운동 대체 하기</button>
        </S.exerciseEditDeleteBtnBox>
      )}
    </S.exerciseEditDeleteModalContainer>
  )
}

export default ExerciseEditDeleteModal
