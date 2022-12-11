import { useState } from 'react'
import * as S from './styles'

interface Props {
  toggleDropDown: () => void
}

const AddRoutine = ({ toggleDropDown }: Props) => {
  const dropDownHandler = () => {
    toggleDropDown()
  }
  return <S.addBtn onClick={dropDownHandler}>+</S.addBtn>
}

export default AddRoutine
