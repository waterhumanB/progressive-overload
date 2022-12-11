import React from 'react'
import { NavLink } from 'react-router-dom'
import * as S from './styles'

const Footer = () => {
  return (
    <S.navFooter>
      <NavLink to='../summary'>
        <div>요약</div>
      </NavLink>
      <NavLink to='../routine'>
        <div>루틴</div>
      </NavLink>
      <NavLink to='../calender'>
        <div>달력</div>
      </NavLink>
    </S.navFooter>
  )
}

export default Footer
