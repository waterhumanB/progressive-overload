import React from 'react'
import { Routes, Route } from 'react-router-dom'
import * as S from './styles'
import Home from './Home'

const App = () => {
  return (
    <S.Container>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </S.Container>
  )
}

export default App
