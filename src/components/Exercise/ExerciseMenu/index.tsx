import { MouseEvent } from 'react'
import { initialData } from '../../../data/initialData'
import { ExerciseMeunProps } from '../../../types/allProps.d'
import { findCategory, findTarget } from '../../../utils/findmenu'
import FilterButton from './FilterButton'
import * as S from './styles'

const targetData = Object.entries(initialData.targets.byId).map((data) => data[0])
const categoryData = Object.entries(initialData.categories.byId).map((data) => data[0])

const ExerciseMenu = ({ setFilterExercise, filterExercise }: ExerciseMeunProps) => {
  const { more, target, category } = filterExercise

  const filterHandler = (e: MouseEvent<HTMLButtonElement>) => {
    const data = {
      [e.currentTarget.id]: e.currentTarget.name,
    }
    setFilterExercise({ ...filterExercise, ...data })
  }
  return (
    <S.exerciseMenuBox>
      <div>
        <FilterButton
          className={more === '전체' ? 'margin more' : 'margin'}
          id='more'
          value='전체'
          onClick={filterHandler}
          data='전체'
        />
        <FilterButton
          className={more === 'favorite' ? ' more' : ''}
          id='more'
          value='즐겨찾기'
          onClick={filterHandler}
          data='favorite'
        />
        <FilterButton
          className={more === 'record' ? ' more' : ''}
          id='more'
          value='최근운동'
          onClick={filterHandler}
          data='record'
        />
        <FilterButton
          className={more === 'custom' ? ' more' : ''}
          id='more'
          value='커스텀'
          onClick={filterHandler}
          data='custom'
        />
      </div>
      <div>
        <FilterButton
          className={target === '전체' ? 'margin target' : 'margin'}
          value='전체'
          id='target'
          onClick={filterHandler}
          data='전체'
        />
        {targetData.map((data) => (
          <FilterButton
            className={data === target ? 'target' : ''}
            onClick={filterHandler}
            id='target'
            key={data}
            data={data}
            value={findTarget(data)}
          />
        ))}
      </div>
      <div>
        <FilterButton
          className={category === '전체' ? 'margin category' : 'margin'}
          value='전체'
          id='category'
          onClick={filterHandler}
          data='전체'
        />
        {categoryData.map((data) => (
          <FilterButton
            className={data === category ? 'category' : ''}
            onClick={filterHandler}
            id='category'
            key={data}
            data={data}
            value={findCategory(data)}
          />
        ))}
      </div>
    </S.exerciseMenuBox>
  )
}

export default ExerciseMenu
