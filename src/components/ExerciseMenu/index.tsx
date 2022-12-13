import React from 'react'

import { makeRoutineData } from '../../data/makeRoutineData'
import * as S from './styles'

const ExerciseMenu = () => {
  return (
    <S.exerciseMenuBox>
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
    </S.exerciseMenuBox>
  )
}

export default ExerciseMenu
