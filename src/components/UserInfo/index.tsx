import { ChangeEvent, FormEvent, useState } from 'react'
import * as S from './styles'

const UserInfo = () => {
  const [nameValue, setNameValue] = useState('')
  const [ageValue, setAgeValue] = useState('')
  const [genderValue, setGenderValue] = useState('')
  const [tallValue, setTallValue] = useState('')
  const [weightValue, setWeightValue] = useState('')

  const [nickNameValidator, setNickNameValidator] = useState(false)
  const [ageValidator, setAgeValidator] = useState(false)
  const [genderValidator, setGenderValidator] = useState(true)
  const [tallValidator, setTallValidator] = useState(false)
  const [weightValidator, setWeightValidator] = useState(false)

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNameValue(e.target.value)
    e.target.value.length > 10 ? setNickNameValidator(true) : setNickNameValidator(false)
  }
  const handleAgeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAgeValue(e.target.value)
    Number(e.target.value) > 100 ? setAgeValidator(true) : setAgeValidator(false)
  }
  const handleGenderChange = (e: ChangeEvent<HTMLInputElement>) => {
    setGenderValue(e.target.value)
    genderValue === '' ? setGenderValidator(true) : setGenderValidator(false)
  }
  const handleTallChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTallValue(e.target.value)
    Number(e.target.value) > 230 ? setTallValidator(true) : setTallValidator(false)
  }
  const handleWeightChange = (e: ChangeEvent<HTMLInputElement>) => {
    setWeightValue(e.target.value)
    Number(e.target.value) > 150 ? setWeightValidator(true) : setWeightValidator(false)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    const user = {
      nickName: nameValue,
      age: ageValue,
      gender: genderValue,
      tall: tallValue,
      weight: weightValue,
    }

    console.log(user)
  }
  return (
    <S.formContainer>
      <form onSubmit={handleSubmit}>
        <label htmlFor='nickName'>닉네임</label>
        <S.inputText type='text' name='nickName' placeholder='최대 10글자 입니다.' onChange={handleNameChange} />
        <S.vaildatorDiv vail={nickNameValidator}>10글자 이하로 입력해주세요!</S.vaildatorDiv>
        <label htmlFor='age'>나이</label>
        <S.inputText name='age' placeholder='나이를 입력해주세요!' onChange={handleAgeChange} type='number' />
        <S.vaildatorDiv vail={ageValidator}>100세 이하로 입력해주세요!</S.vaildatorDiv>
        <S.radioBox>
          <label htmlFor='gender'>성별</label>
          <S.inputRadio type='radio' onChange={handleGenderChange} name='gender' value='남자' />
          <div>남자</div>
          <S.inputRadio type='radio' onChange={handleGenderChange} name='gender' value='여자' />
          <div>여자</div>
        </S.radioBox>
        <S.vaildatorDiv vail={genderValidator}>성별을 입력해주세요!</S.vaildatorDiv>
        <label htmlFor='tall'>키 cm</label>
        <S.inputText name='tall' placeholder='키를 입력해주세요!' onChange={handleTallChange} type='number' />
        <S.vaildatorDiv vail={tallValidator}>230cm 이하로 입력해주세요!</S.vaildatorDiv>
        <label htmlFor='weight'>몸무게 kg</label>
        <S.inputText name='weight' placeholder='몸무게를 입력해주세요!' onChange={handleWeightChange} type='number' />
        <S.vaildatorDiv vail={weightValidator}>150kg 이하로 입력해주세요!</S.vaildatorDiv>
        <S.submitBtn
          type='submit'
          disabled={nickNameValidator || ageValidator || genderValidator || tallValidator || weightValidator}
        >
          운동하기
        </S.submitBtn>
      </form>
    </S.formContainer>
  )
}

export default UserInfo
