import { useLayoutEffect } from 'react'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import * as S from './styles'
import Home from './Home'
import Routine from './Routine'
import Summary from './Summary'
import Calendar from './Calendar'
import { useAppSelector } from '../hooks/useAppSelector'
import { getUserInfoData } from '../states/user'
import Youtube from './Routine/Youtube'
import RoutineMake from './Routine/RoutineMake'
import CustomExercise from './Routine/CustomExercise'
import RoutineAdd from './Routine/RoutineMake/RoutineAdd'
import RoutineEdit from './Routine/RoutineMake/RoutineEdit'
import RoutineReady from './Routine/RoutineReady'

const App = () => {
  const userInfoSelector = useAppSelector(getUserInfoData)
  const navigate = useNavigate()
  const location = useLocation()
  useLayoutEffect(() => {
    if (location.pathname === '/') {
      userInfoSelector.user.nickName.length > 1 && navigate('/routine')
    }
  }, [])
  return (
    <S.Container>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/routine' element={<Routine />} />
        <Route path='/routine/youtube' element={<Youtube />} />
        <Route path='/routine/routine-ready' element={<RoutineReady />} />
        <Route path='/routine/routine-make' element={<RoutineMake />} />
        <Route path='/routine/routine-make/add' element={<RoutineAdd />} />
        <Route path='/routine/routine-make/edit' element={<RoutineEdit />} />
        <Route path='/routine/routine-make/custom-exercise/add' element={<CustomExercise />} />
        <Route path='/routine/routine-make/custom-exercise/edit' element={<CustomExercise />} />
        <Route path='/summary' element={<Summary />} />
        <Route path='/calender' element={<Calendar />} />
      </Routes>
    </S.Container>
  )
}

export default App
