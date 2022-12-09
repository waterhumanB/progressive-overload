import { ChangeEvent, FormEvent, useState } from 'react'
import * as S from './styles'

const UserInfo = () => {
  const [values, setValues] = useState({
    nickName: '',
    age: '',
    gender: '',
    tall: '',
    weight: '',
  })

  const [nickNameValidator, setNickNameValidator] = useState(false)
  const [ageValidator, setAgeValidator] = useState(false)
  const [tallValidator, setTallValidator] = useState(false)
  const [weightValidator, setWeightValidator] = useState(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues((prev) => {
      return { ...prev, [e.target.name]: e.target.value }
    })
    e.target.name === 'nickName' && e.target.value.length > 10
      ? setNickNameValidator(true)
      : setNickNameValidator(false)
    e.target.name === 'age' && Number(e.target.value) > 100 ? setAgeValidator(true) : setAgeValidator(false)
    e.target.name === 'tall' && Number(e.target.value) > 230 ? setTallValidator(true) : setTallValidator(false)
    e.target.name === 'weight' && Number(e.target.value) > 150 ? setWeightValidator(true) : setWeightValidator(false)
  }
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    console.log(values)
    e.preventDefault()
  }
  return (
    <S.formContainer>
      <form onSubmit={handleSubmit}>
        <label htmlFor='nickName'>닉네임</label>
        <S.inputText type='text' name='nickName' placeholder='최대 10글자 입니다.' onChange={handleChange} />
        <S.vaildatorDiv vail={nickNameValidator}>10글자 이하로 입력해주세요!</S.vaildatorDiv>
        <label htmlFor='age'>나이</label>
        <S.inputText name='age' placeholder='나이를 입력해주세요!' onChange={handleChange} type='number' />
        <S.vaildatorDiv vail={ageValidator}>100세 이하로 입력해주세요!</S.vaildatorDiv>
        <S.radioBox>
          <label htmlFor='gender'>성별</label>
          <S.inputRadio type='radio' onChange={handleChange} name='gender' value='남자' checked />
          <div>남자</div>
          <S.inputRadio type='radio' onChange={handleChange} name='gender' value='여자' />
          <div>여자</div>
        </S.radioBox>
        <label htmlFor='tall'>키 cm</label>
        <S.inputText name='tall' placeholder='키를 입력해주세요!' onChange={handleChange} type='number' />
        <S.vaildatorDiv vail={tallValidator}>230cm 이하로 입력해주세요!</S.vaildatorDiv>
        <label htmlFor='weight'>몸무게 kg</label>
        <S.inputText name='weight' placeholder='몸무게를 입력해주세요!' onChange={handleChange} type='number' />
        <S.vaildatorDiv vail={weightValidator}>150kg 이하로 입력해주세요!</S.vaildatorDiv>
        <S.submitBtn type='submit' disabled={nickNameValidator || ageValidator || tallValidator || weightValidator}>
          운동하기
        </S.submitBtn>
      </form>
    </S.formContainer>
  )
}

export default UserInfo
