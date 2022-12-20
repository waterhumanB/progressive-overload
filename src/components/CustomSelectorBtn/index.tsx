import { ICustomSelectorBtnProps } from '../../types/allProps.d'
import * as S from './styles'

const CustomSelectorBtn = ({ value, name, setNameFilter, toggleModalHandler }: ICustomSelectorBtnProps) => {
  const nameFilterHandler = () => {
    setNameFilter(name)
    toggleModalHandler()
  }

  return (
    <S.customSelector selectorName={value} onClick={nameFilterHandler}>
      {value === '' ? <div>없음</div> : <div>{value}</div>}
    </S.customSelector>
  )
}

export default CustomSelectorBtn
