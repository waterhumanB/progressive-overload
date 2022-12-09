import { ChangeEvent, FormEvent, useState } from 'react'
import * as S from './styles'
import { setUser } from '../../states/user'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { useNavigate } from 'react-router-dom'

const UserInfo = () => {
  const dispatch = useAppDispatch()
  const [nameValue, setNameValue] = useState('')
  const [ageValue, setAgeValue] = useState(0)
  const [genderValue, setGenderValue] = useState('남자')
  const [tallValue, setTallValue] = useState(0)
  const [weightValue, setWeightValue] = useState(0)

  const [nickNameValidator, setNickNameValidator] = useState(true)
  const [ageValidator, setAgeValidator] = useState(true)
  const [genderValidator, setGenderValidator] = useState(true)
  const [tallValidator, setTallValidator] = useState(true)
  const [weightValidator, setWeightValidator] = useState(true)

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNameValue(e.target.value)
    e.target.value.length > 10 || e.target.value.length === 0 ? setNickNameValidator(true) : setNickNameValidator(false)
  }
  const handleAgeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAgeValue(Number(e.target.value))
    Number(e.target.value) > 100 || Number(e.target.value) < 8 ? setAgeValidator(true) : setAgeValidator(false)
  }
  const handleGenderChange = (e: ChangeEvent<HTMLInputElement>) => {
    setGenderValue(e.target.value)
    genderValue === '' ? setGenderValidator(true) : setGenderValidator(false)
  }
  const handleTallChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTallValue(Number(e.target.value))
    Number(e.target.value) > 230 || Number(e.target.value) < 130 ? setTallValidator(true) : setTallValidator(false)
  }
  const handleWeightChange = (e: ChangeEvent<HTMLInputElement>) => {
    setWeightValue(Number(e.target.value))
    Number(e.target.value) > 150 || Number(e.target.value) < 30 ? setWeightValidator(true) : setWeightValidator(false)
  }

  const navgate = useNavigate()

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    const user = {
      nickName: nameValue,
      age: ageValue,
      gender: genderValue,
      tall: tallValue,
      weight: weightValue,
    }
    localStorage.setItem('user', JSON.stringify(user))
    dispatch(setUser(user))
    navgate('/routine')
  }
  return (
    <S.formContainer>
      <form onSubmit={handleSubmit}>
        <label htmlFor='nickName'>닉네임</label>
        <S.inputText type='text' name='nickName' placeholder='최대 10글자 입니다.' onChange={handleNameChange} />
        <S.vaildatorDiv vail={nickNameValidator}>1글자 이상 10글자 이하로 입력해주세요!</S.vaildatorDiv>
        <label htmlFor='age'>나이</label>
        <S.inputText name='age' placeholder='나이를 입력해주세요!' onChange={handleAgeChange} type='number' />
        <S.vaildatorDiv vail={ageValidator}>7세 이상 100세 이하로 입력해주세요!</S.vaildatorDiv>
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
        <S.vaildatorDiv vail={tallValidator}>120cm 이상 230cm 이하로 입력해주세요!</S.vaildatorDiv>
        <label htmlFor='weight'>몸무게 kg</label>
        <S.inputText name='weight' placeholder='몸무게를 입력해주세요!' onChange={handleWeightChange} type='number' />
        <S.vaildatorDiv vail={weightValidator}>30kg 이상 150kg 이하로 입력해주세요!</S.vaildatorDiv>
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
