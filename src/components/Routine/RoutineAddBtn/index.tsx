import { IDropDownToggleProps } from '../../../types/allProps.d'
import * as S from './styles'

const RoutineAddBtn = ({ toggleDropDown }: IDropDownToggleProps) => {
  const dropDownHandler = () => {
    toggleDropDown()
  }
  return <S.addBtn onClick={dropDownHandler}>+</S.addBtn>
}

export default RoutineAddBtn
