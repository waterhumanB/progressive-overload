import * as S from './styles'
import { ReactComponent as Arm } from '../../assets/imgs/arm.svg'
import { ReactComponent as ArmHeart } from '../../assets/imgs/arm_heart.svg'
import { useSelector } from 'react-redux'
import { MouseEvent, useState } from 'react'
import { getExerciseData, setFavoriteExercise } from '../../states/exercise'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { findCategory, findTarget, findType } from '../../utils/findmenu'

interface Props {
  searchExercise: string
  filterExercise: object
}

const ExerciseCard = ({ searchExercise, filterExercise }: Props) => {
  const selector = useSelector(getExerciseData)
  const dispatch = useAppDispatch()
  const [addExercise, setAddExercise] = useState<string[]>([])

  console.log(filterExercise)
  const favorite = selector.exercise.filter((data) => data.favorite === true && data.mainTarget === 'target1')
  const recent = selector.exercise.filter((data) => data.record.length !== 0)
  const custom = selector.exercise.filter((data) => data.costom === true)
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
      {selector.exercise.map((data) => (
        <S.exerciseBox key={data.id}>
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
      ))}
    </S.exerciseContainer>
  )
}

export default ExerciseCard
