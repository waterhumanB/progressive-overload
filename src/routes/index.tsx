import { useLayoutEffect } from 'react'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import * as S from './styles'
import Home from './Home'
import Routine from './Routine'
import Summary from './Summary'
import Calendar from './Calendar'
import { useAppSelector } from '../hooks/useAppSelector'
import { getUserInfo } from '../states/user'
import Youtube from './Routine/Youtube'
import MakeRoutine from './Routine/RoutineMake'
import CustomExercise from './Routine/CustomExercise'

const App = () => {
  const userInfo = useAppSelector(getUserInfo)
  const navigate = useNavigate()
  const location = useLocation()
  useLayoutEffect(() => {
    if (location.pathname === '/') {
      userInfo.user.nickName.length > 1 && navigate('/routine')
    }
  }, [])
  return (
    <S.Container>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/routine' element={<Routine />} />
        <Route path='/routine/youtube' element={<Youtube />} />
        <Route path='/routine/routine-make' element={<MakeRoutine />} />
        <Route path='/routine/routine-make/custom-exercise' element={<CustomExercise />} />
        <Route path='/routine/routine-make/custom-exercise/edit' element={<CustomExercise />} />
        <Route path='/summary' element={<Summary />} />
        <Route path='/calender' element={<Calendar />} />
      </Routes>
    </S.Container>
  )
}

export default App
