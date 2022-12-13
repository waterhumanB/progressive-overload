import { initialData } from '../../data/initialData'
import * as S from './styles'
import { ReactComponent as Arm } from '../../assets/imgs/arm.svg'
import { ReactComponent as ArmHeart } from '../../assets/imgs/arm_heart.svg'

const exercise = Object.values(initialData.exercise.byId)

const ExerciseCard = () => {
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
      {exercise.map((data) => (
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
