import React from 'react'
import * as S from './styles'

interface IRoutineResultItemProps {
  result: number
  unit: string
  resultName: string
}

const RoutineResultItem = ({ result, unit, resultName }: IRoutineResultItemProps) => {
  return (
    <S.routineResultItem>
      <S.dataBox>
        <S.resultDiv>{result}</S.resultDiv>
        <S.unitDiv>{unit}</S.unitDiv>
      </S.dataBox>
      <div>{resultName}</div>
    </S.routineResultItem>
  )
}

export default RoutineResultItem
