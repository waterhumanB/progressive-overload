import { Routes, Route, useNavigate } from 'react-router-dom'
import * as S from './styles'
import Home from './Home'
import Routine from './Routine'
import Summary from './Summary'
import Calendar from './Calendar'
import Youtube from './Routine/Youtube'
import RoutineMake from './Routine/RoutineMake'
import CustomExercise from './Routine/CustomExercise'
import RoutineAdd from './Routine/RoutineMake/RoutineAdd'
import RoutineEdit from './Routine/RoutineMake/RoutineEdit'
import RoutineReady from './Routine/RoutineReady'
import RoutineRun from './Routine/RoutineRun'
import RoutineFinish from './Routine/RoutineFinish'
import RoutineResult from './Calendar/RoutineResult'
import { useEffect } from 'react'

const App = () => {
  const navigate = useNavigate()
  useEffect(() => {
    if (localStorage.getItem('user') === null) {
      navigate('/')
    }
  }, [])
  return (
    <S.Container>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/routine' element={<Routine />} />
        <Route path='/routine/youtube' element={<Youtube />} />
        <Route path='/routine/routine-ready' element={<RoutineReady />} />
        <Route path='/routine/routine-ready/routine-run' element={<RoutineRun />} />
        <Route path='/routine/routine-ready/routine-run/routine-finish' element={<RoutineFinish />} />
        <Route path='/routine/routine-make' element={<RoutineMake />} />
        <Route path='/routine/routine-make/add' element={<RoutineAdd />} />
        <Route path='/routine/routine-make/edit' element={<RoutineEdit />} />
        <Route path='/routine/routine-make/custom-exercise/add' element={<CustomExercise />} />
        <Route path='/routine/routine-make/custom-exercise/edit' element={<CustomExercise />} />
        <Route path='/summary' element={<Summary />} />
        <Route path='/calendar' element={<Calendar />} />
        <Route path='/calendar/routine-result' element={<RoutineResult />} />
      </Routes>
    </S.Container>
  )
}

export default App
