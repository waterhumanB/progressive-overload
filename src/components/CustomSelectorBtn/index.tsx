import React from 'react'
import { ICustomSelectorBtnProps } from '../../types/allProps.d'
import * as S from './styles'

const CustomSelectorBtn = ({ value, name, toggleModalHandler }: ICustomSelectorBtnProps) => {
  return (
    <S.customSelector>
      <div>{value}</div>
    </S.customSelector>
  )
}

export default CustomSelectorBtn
