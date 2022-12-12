import React from 'react'
import { makeRoutineData } from '../../data/makeRoutineData'
import * as S from './styles'

const WorkoutMenu = () => {
  return (
    <S.workoutMenuBox>
      <div>
        {makeRoutineData.more.map((data) => (
          <S.filterBtn className={data === '전체' ? 'more' : ''} key={data}>
            {data}
          </S.filterBtn>
        ))}
      </div>
      <div>
        {makeRoutineData.target.map((data) => (
          <S.filterBtn className={data === '전체' ? 'target' : ''} key={data}>
            {data}
          </S.filterBtn>
        ))}
      </div>
      <div>
        {makeRoutineData.category.map((data) => (
          <S.filterBtn className={data === '전체' ? 'category' : ''} key={data}>
            {data}
          </S.filterBtn>
        ))}
      </div>
    </S.workoutMenuBox>
  )
}

export default WorkoutMenu
