import { initialData } from '../../data/initialData'
import * as S from './styles'
import { ReactComponent as Arm } from '../../assets/imgs/arm.svg'
import { ReactComponent as ArmHeart } from '../../assets/imgs/arm_heart.svg'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { getExerciseData } from '../../states/exercise'

const ExerciseCard = () => {
  const selector = useSelector(getExerciseData)
  const [checkedExercise, setCheckedExercise] = useState(false)
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
          {data.favortite === true ? <ArmHeart /> : <Arm />}
        </S.exerciseBox>
      ))}
    </S.exerciseContainer>
  )
}

export default ExerciseCard
