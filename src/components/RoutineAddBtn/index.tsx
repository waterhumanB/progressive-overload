import * as S from './styles'

interface Props {
  toggleDropDown: () => void
}

const RoutineAddBtn = ({ toggleDropDown }: Props) => {
  const dropDownHandler = () => {
    toggleDropDown()
  }
  return <S.addBtn onClick={dropDownHandler}>+</S.addBtn>
}

export default RoutineAddBtn
