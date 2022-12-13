import { initialData } from '../../data/initialData'
import * as S from './styles'
import { ReactComponent as Arm } from '../../assets/imgs/arm.svg'
import { ReactComponent as ArmHeart } from '../../assets/imgs/arm_heart.svg'
import { useSelector } from 'react-redux'
import { MouseEvent } from 'react'
import { getExerciseData, setFavoriteExercise } from '../../states/exercise'
import { useAppDispatch } from '../../hooks/useAppDispatch'

const ExerciseCard = () => {
  const selector = useSelector(getExerciseData)
  const dispatch = useAppDispatch()
  const findCategory = (value: string) => {
    const result = Object.entries(initialData.category.byId).filter((data) => data[0] === value)[0][1].name
    return result
  }

  const findTarget = (value: string) => {
    const result = Object.entries(initialData.targets.byId).filter((data) => data[0] === value)[0][1].name
    return result
  }

  const findType = (type: string) => {
    const result = Object.entries(initialData.types.byId).filter((data) => data[0] === type)[0][1].name
    return result
  }

  const favoriteHandler = (e: MouseEvent<HTMLButtonElement>) => {
    const boolean = e.currentTarget.value === 'true'
    const favoriteData = {
      id: e.currentTarget.name,
      favorite: !boolean,
    }
    dispatch(setFavoriteExercise(favoriteData))
  }

  return (
    <S.exerciseContainer>
      {selector.exercise.map((data) => (
        <S.exerciseBox key={data.id}>
          <S.mainTaget>{findTarget(data.mainTarget)}</S.mainTaget>
          <S.exerciseInfo type='button'>
            <S.exerciseTitle>
              <div>{findCategory(data.categoryId)}</div>
              <div>{findType(data.typeId)}</div>
            </S.exerciseTitle>
            <S.exerciseTarget>
              <div>{findTarget(data.mainTarget)}</div>
              <div>{data.secondaryTarget !== '' && findTarget(data.secondaryTarget)}</div>
            </S.exerciseTarget>
          </S.exerciseInfo>
          <button name={data.id} value={String(data.favortite)} onClick={favoriteHandler} type='button'>
            {data.favortite === true ? <ArmHeart /> : <Arm />}
          </button>
        </S.exerciseBox>
      ))}
    </S.exerciseContainer>
  )
}

export default ExerciseCard
