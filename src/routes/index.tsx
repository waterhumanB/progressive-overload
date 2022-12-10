import { useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import * as S from './styles'
import Home from './Home'
import Routine from './Routine'
import Summary from './Summary'
import Calendar from './Calendar'
import { useAppSelector } from '../hooks/useAppSelector'
import { getUserInfo } from '../states/user'

const App = () => {
  const userInfo = useAppSelector(getUserInfo)
  const navigate = useNavigate()
  useEffect(() => {
    userInfo.user.nickName.length > 1 && navigate('/routine')
  }, [navigate, userInfo.user.nickName.length])
  return (
    <S.Container>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/routine' element={<Routine />} />
        <Route path='/summary' element={<Summary />} />
        <Route path='/calender' element={<Calendar />} />
      </Routes>
    </S.Container>
  )
}

export default App
