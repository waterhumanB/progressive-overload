import * as S from './styles'
import { ReactComponent as Arm } from '../../assets/imgs/arm.svg'
import { ReactComponent as ArmHeart } from '../../assets/imgs/arm_heart.svg'
import { useSelector } from 'react-redux'
import { MouseEvent, useState } from 'react'
import { getExerciseData, setFavoriteExercise } from '../../states/exercise'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { findCategory, findTarget, findType } from '../../utils/findmenu'
import { IFiterDataProps } from '../../types/allProps.d'

const ExerciseCard = ({ searchExercise, filterExercise }: IFiterDataProps) => {
  const selector = useSelector(getExerciseData)
  const dispatch = useAppDispatch()
  const [addExercise, setAddExercise] = useState<string[]>([])

  const more = Object.values(filterExercise)[0]
  const target = Object.values(filterExercise)[1]
  const category = Object.values(filterExercise)[2]

  const fetechedData = selector.exercise
    .filter(
      (data) =>
        (more === '전체' && data) ||
        (more === 'favorite' && data.favorite) ||
        (more === 'recent' && !data.record) ||
        (more === 'custom' && data.costom)
    )
    .filter((data) => (target === '전체' ? data : data.mainTarget === target))
    .filter((data) => (category === '전체' ? data : data.categoryId === category))

  const favoriteHandler = (e: MouseEvent<HTMLButtonElement>) => {
    const boolean = e.currentTarget.value === 'true'
    const favoriteData = {
      id: e.currentTarget.name,
      favorite: !boolean,
    }
    dispatch(setFavoriteExercise(favoriteData))
  }

  const addExerciseHandler = (e: MouseEvent<HTMLButtonElement>) => {
    const { name } = e.currentTarget
    setAddExercise(
      [...addExercise, name].filter((ele, i) => {
        return [...addExercise, name].indexOf(ele) === i
      })
    )
    console.log(addExercise)
  }

  return (
    <S.exerciseContainer>
      {fetechedData.length !== 0 ? (
        fetechedData.map((data) => (
          <S.exerciseBox key={data.id} id={findCategory(data.categoryId) + findType(data.typeId)}>
            <S.mainTaget>{findTarget(data.mainTarget)}</S.mainTaget>
            <S.exerciseInfo type='button' name={data.id} onClick={addExerciseHandler}>
              <S.exerciseTitle>
                <div>{findCategory(data.categoryId)}</div>
                <div>{findType(data.typeId)}</div>
              </S.exerciseTitle>
              <S.exerciseTarget>
                <div>{findTarget(data.mainTarget)}</div>
                <div>{data.secondaryTarget !== '' && findTarget(data.secondaryTarget)}</div>
              </S.exerciseTarget>
            </S.exerciseInfo>
            <button name={data.id} value={String(data.favorite)} onClick={favoriteHandler} type='button'>
              {data.favorite === true ? <ArmHeart /> : <Arm />}
            </button>
          </S.exerciseBox>
        ))
      ) : (
        <S.errorFetchedData>해당 운동은 없습니다.</S.errorFetchedData>
      )}
    </S.exerciseContainer>
  )
}

export default ExerciseCard