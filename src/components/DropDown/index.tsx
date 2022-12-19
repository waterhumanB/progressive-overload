import { useNavigate } from 'react-router-dom'
import { IDropDownPropsProps } from '../../types/allProps.d'
import * as S from './styles'

const DropDown = ({
  toggleDropDown,
  dropDown,
  naviRoute,
  threeMenu,
  threeMenuValue1,
  threeMenuValue2,
  threeMenuValue3,
  towMenuValue1,
  towMenuValue2,
  twoMenu,
  deleteFuction,
}: IDropDownPropsProps) => {
  const navigate = useNavigate()
  const pageRouter = () => {
    navigate(naviRoute)
  }
  return (
    <div>
      {twoMenu && (
        <S.DropBoxContainer dropdown={dropDown}>
          <S.DropBoxItem dropdown={dropDown} onClick={pageRouter}>
            {towMenuValue1}
          </S.DropBoxItem>
          <S.DropBoxItem dropdown={dropDown} onClick={toggleDropDown}>
            {towMenuValue2}
          </S.DropBoxItem>
        </S.DropBoxContainer>
      )}
      {threeMenu && (
        <S.DropBoxContainer dropdown={dropDown}>
          <S.DropBoxItem dropdown={dropDown} onClick={pageRouter}>
            {threeMenuValue1}
          </S.DropBoxItem>
          <S.DropBoxItem dropdown={dropDown} onClick={deleteFuction}>
            {threeMenuValue2}
          </S.DropBoxItem>
          <S.DropBoxItem dropdown={dropDown} onClick={toggleDropDown}>
            {threeMenuValue3}
          </S.DropBoxItem>
        </S.DropBoxContainer>
      )}
    </div>
  )
}

export default DropDown
