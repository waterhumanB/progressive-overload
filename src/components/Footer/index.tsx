import React from 'react'
import { NavLink } from 'react-router-dom'
import * as S from './styles'
import { ReactComponent as Dumbbell } from '../../assets/imgs/dumbbell.svg'
import { ReactComponent as Calendar } from '../../assets/imgs/calendar.svg'
import { ReactComponent as Chart } from '../../assets/imgs/chart.svg'

const Footer = () => {
  return (
    <S.navFooter>
      <NavLink to='../summary'>
        <Chart />
        <div>요약</div>
      </NavLink>
      <NavLink to='../routine'>
        <Dumbbell />
        <div>루틴</div>
      </NavLink>
      <NavLink to='../calender'>
        <Calendar />
        <div>달력</div>
      </NavLink>
    </S.navFooter>
  )
}

export default Footer
