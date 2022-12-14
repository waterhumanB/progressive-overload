import { Dispatch, SetStateAction, MouseEvent } from 'react'

import { makeRoutineData } from '../../data/makeRoutineData'
import * as S from './styles'

interface Props {
  setFilterExercise: Dispatch<SetStateAction<object>>
  filterExercise: object
}

const ExerciseMenu = ({ setFilterExercise, filterExercise }: Props) => {
  const filterHandler = (e: MouseEvent<HTMLButtonElement>) => {
    const data = {
      [e.currentTarget.id]: e.currentTarget.name,
    }
    setFilterExercise({ ...filterExercise, ...data })
  }
  return (
    <S.exerciseMenuBox>
      <div>
        {makeRoutineData.more.map((data) => (
          <S.filterBtn
            id='more'
            name={data}
            onClick={filterHandler}
            className={data === '전체' ? 'more' : ''}
            key={data}
          >
            {data}
          </S.filterBtn>
        ))}
      </div>
      <div>
        {makeRoutineData.target.map((data) => (
          <S.filterBtn
            id='target'
            name={data}
            onClick={filterHandler}
            className={data === '전체' ? 'target' : ''}
            key={data}
          >
            {data}
          </S.filterBtn>
        ))}
      </div>
      <div>
        {makeRoutineData.category.map((data) => (
          <S.filterBtn
            id='category'
            name={data}
            onClick={filterHandler}
            className={data === '전체' ? 'category' : ''}
            key={data}
          >
            {data}
          </S.filterBtn>
        ))}
      </div>
    </S.exerciseMenuBox>
  )
}

export default ExerciseMenu
