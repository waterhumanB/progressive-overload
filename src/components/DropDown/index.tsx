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
  twoMenuValue1,
  twoMenuValue2,
  twoMenu,
  deleteFuction,
}: IDropDownPropsProps) => {
  const navigate = useNavigate()
  const pageRouter = () => {
    navigate(naviRoute.to, naviRoute.state)
  }
  return (
    <S.DropDownCotainer dropdown={dropDown} onClick={toggleDropDown}>
      {twoMenu && (
        <S.DropDownBox dropdown={dropDown}>
          <S.DropDownItem dropdown={dropDown} onClick={pageRouter}>
            {twoMenuValue1}
          </S.DropDownItem>
          <S.DropDownItem dropdown={dropDown} onClick={toggleDropDown}>
            {twoMenuValue2}
          </S.DropDownItem>
        </S.DropDownBox>
      )}
      {threeMenu && (
        <S.DropDownBox dropdown={dropDown}>
          <S.DropDownItem dropdown={dropDown} onClick={pageRouter}>
            {threeMenuValue1}
          </S.DropDownItem>
          <S.DropDownItem dropdown={dropDown} onClick={deleteFuction}>
            {threeMenuValue2}
          </S.DropDownItem>
          <S.DropDownItem dropdown={dropDown} onClick={toggleDropDown}>
            {threeMenuValue3}
          </S.DropDownItem>
        </S.DropDownBox>
      )}
    </S.DropDownCotainer>
  )
}

export default DropDown
