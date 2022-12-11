import { ChangeEvent, FormEvent, useState } from 'react'
import * as S from './styles'
import { setUser } from '../../states/user'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { useNavigate } from 'react-router-dom'
import UserInput from './UserInput'

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
    e.target.value.length > 11 || e.target.value.length === 0 ? setNickNameValidator(true) : setNickNameValidator(false)
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
    dispatch(setUser(user))
    navgate('/routine')
  }
  return (
    <S.formContainer>
      <form onSubmit={handleSubmit}>
        <UserInput
          label='닉네임'
          name='nickName'
          type='text'
          placeholder='최대 11글자 입니다.'
          onChange={handleNameChange}
          vail={nickNameValidator}
          warning='1글자 이상 11글자 이하로 입력해주세요'
        />
        <UserInput
          label='나이'
          name='age'
          type='text'
          placeholder='나이를 입력해주세요!'
          onChange={handleAgeChange}
          vail={ageValidator}
          warning='7세 이상 100세 이하로 입력해주세요!'
        />
        <UserInput
          label='성별'
          name='gender'
          type='radio'
          placeholder='나이를 입력해주세요!'
          onChange={handleGenderChange}
          vail={genderValidator}
          desc1='남자'
          desc2='여자'
          warning='성별을 입력해주세요!'
        />
        <UserInput
          label='키 cm'
          name='tall'
          type='text'
          placeholder='키를 입력해주세요!'
          onChange={handleTallChange}
          vail={tallValidator}
          warning='120cm 이상 230cm 이하로 입력해주세요!'
        />
        <UserInput
          label='몸무게 kg'
          name='weight'
          type='text'
          placeholder='몸무게를 입력해주세요!'
          onChange={handleWeightChange}
          vail={weightValidator}
          warning='30kg 이상 150kg 이하로 입력해주세요!'
        />
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
