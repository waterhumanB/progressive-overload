import { IUserInputProps } from '../../../types/allProps.d'
import * as S from './styles'

const UserInput = ({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  vail,
  warning,
  desc1,
  desc2,
}: IUserInputProps) => {
  return (
    <div>
      {type === 'text' ? (
        <S.inputTextBox>
          <label htmlFor={name}>{label}</label>
          <S.inputText type={type} value={value} name={name} placeholder={placeholder} onChange={onChange} />
          <S.validatorDiv vail={vail}>{warning}</S.validatorDiv>
        </S.inputTextBox>
      ) : (
        <>
          <S.radioBox>
            <label htmlFor={name}>{label}</label>
            <S.inputRadio type={type} onChange={onChange} name={name} value={desc1} />
            <div>{desc1}</div>
            <S.inputRadio type={type} onChange={onChange} name={name} value={desc2} />
            <div>{desc2}</div>
          </S.radioBox>
          <S.validatorDiv vail={vail}>{warning}</S.validatorDiv>
        </>
      )}
    </div>
  )
}

export default UserInput
