import { IDropDownToggleProps } from '../../../types/allProps.d'
import { ReactComponent as PlusBtn } from '../../../assets/imgs/plus-btn.svg'
import * as S from './styles'

const RoutineAddBtn = ({ toggleDropDown }: IDropDownToggleProps) => {
  const dropDownHandler = () => {
    toggleDropDown()
  }
  return (
    <S.addBtnBox>
      <S.addBtn onClick={dropDownHandler}>
        <PlusBtn />
      </S.addBtn>
    </S.addBtnBox>
  )
}

export default RoutineAddBtn
