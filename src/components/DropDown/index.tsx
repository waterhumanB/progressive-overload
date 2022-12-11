import { useNavigate } from 'react-router-dom'
import * as S from './styles'

interface Props {
  toggleDropDown: () => void
  dropDown: boolean
}
const DropDown = ({ toggleDropDown, dropDown }: Props) => {
  const dropDownHandler = () => {
    toggleDropDown()
  }
  const navgate = useNavigate()
  const addRoutineRouter = () => {
    navgate('/routine/make-routine')
  }
  return (
    <S.DropBoxContainer dropdown={dropDown}>
      <S.DropBoxItem dropdown={dropDown} onClick={addRoutineRouter}>
        루틴 만들기
      </S.DropBoxItem>
      <S.DropBoxItem dropdown={dropDown} onClick={dropDownHandler}>
        취소
      </S.DropBoxItem>
    </S.DropBoxContainer>
  )
}

export default DropDown
