import { ChangeEvent, FormEvent, useState } from 'react'

const UserInfo = () => {
  const [values, setValues] = useState({
    nickName: '',
    age: '',
    gender: '',
    tall: '',
    weight: '',
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues((prev) => {
      console.log(values)
      return { ...prev, [e.target.id]: e.target.value }
    })
  }
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>닉네임</div>
        <input id='nickName' placeholder='입력하세요!' onChange={handleChange} />
        <div>나이</div>
        <input id='age' placeholder='입력하세요!' onChange={handleChange} />
        <div>성별</div>
        <input id='gender' type='checkbox' />
        <div>키</div>
        <input id='tall' placeholder='입력하세요!' onChange={handleChange} />
        <div>몸무게</div>
        <input id='weight' placeholder='입력하세요!' onChange={handleChange} />
        <button type='submit'>시작하기</button>
      </form>
    </div>
  )
}

export default UserInfo
