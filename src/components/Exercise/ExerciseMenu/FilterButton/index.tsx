import { IFilterBtnProps } from '../../../../types/allProps.d'
import * as S from './styles'

const FilterButton = ({ value, data, onClick, className, id }: IFilterBtnProps) => {
  return (
    <S.filterBtn id={id} className={className} name={data} onClick={onClick} key={data}>
      {value}
    </S.filterBtn>
  )
}

export default FilterButton
