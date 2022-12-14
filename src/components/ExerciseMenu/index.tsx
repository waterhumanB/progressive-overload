import { MouseEvent } from 'react'
import { initialData } from '../../data/initialData'
import { ExerciseMeunProps } from '../../types/allProps.d'
import { findCategory, findTarget } from '../../utils/findmenu'
import FilterButton from './FilterButton'
import * as S from './styles'

const targetData = Object.entries(initialData.targets.byId).map((data) => data[0])
const categoryData = Object.entries(initialData.category.byId).map((data) => data[0])

const ExerciseMenu = ({ setFilterExercise, filterExercise }: ExerciseMeunProps) => {
  const filterHandler = (e: MouseEvent<HTMLButtonElement>) => {
    const data = {
      [e.currentTarget.id]: e.currentTarget.name,
    }
    setFilterExercise({ ...filterExercise, ...data })
  }
  return (
    <S.exerciseMenuBox>
      <div>
        <FilterButton id='more' value='전체' onClick={filterHandler} data='전체' className='more' />
        <FilterButton id='more' value='즐겨찾기' onClick={filterHandler} data='favorite' />
        <FilterButton id='more' value='최근운동' onClick={filterHandler} data='recent' />
        <FilterButton id='more' value='커스텀' onClick={filterHandler} data='custom' />
      </div>
      <div>
        <FilterButton value='전체' id='target' onClick={filterHandler} className='target' data='전체' />
        {targetData.map((data) => (
          <FilterButton onClick={filterHandler} id='target' key={data} data={data} value={findTarget(data)} />
        ))}
      </div>
      <div>
        <FilterButton value='전체' id='category' onClick={filterHandler} className='category' data='전체' />
        {categoryData.map((data) => (
          <FilterButton onClick={filterHandler} id='category' key={data} data={data} value={findCategory(data)} />
        ))}
      </div>
    </S.exerciseMenuBox>
  )
}

export default ExerciseMenu
