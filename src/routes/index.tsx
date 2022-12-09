import React, { useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import * as S from './styles'
import Home from './Home'
import Routine from './Routine'
import Summary from './Summary'
import Calendar from './Calendar'

const App = () => {
  const userData = localStorage.getItem('user')
  const navigate = useNavigate()
  useEffect(() => {
    userData !== null && navigate('/routine')
  }, [navigate, userData])
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
