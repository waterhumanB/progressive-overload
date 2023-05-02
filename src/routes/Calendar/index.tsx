import { useState } from 'react'
import { useAppSelector } from '../../hooks/useAppSelector'
import { getRoutineData } from '../../states/routines'

import Footer from '../../components/Footer'
import { CalendarItem, CurrentRoutineCard, CurrentRoutineRecentUnit } from '../../components/Calendar'
import { ReactComponent as Arrow } from '../../assets/imgs/arrow.svg'
import * as S from './styles'

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const DayOfTheWeek = ['일', '월', '화', '수', '목', '금', '토']

const Calendar = () => {
  const [monthOrder, setMothOrder] = useState(new Date().getMonth())
  const [dataSelector, setDataSelector] = useState(true)
  const [yearOrder, setYearOrder] = useState(new Date().getFullYear())
  const routineSelector = useAppSelector(getRoutineData)

  const currentMonthsRoutineData = Object.values(routineSelector.routines.byId).map((data) => {
    const filtered = data.recent.filter(
      (item) => item.startAt.split(' ')[1] === MONTHS[monthOrder] && item.startAt.split(' ')[3] === String(yearOrder)
    )
    const result = filtered.length !== 0 ? { ...data, recent: filtered } : null
    return result
  })

  const fetchedWeeks = (weekOrder: number) => {
    const currentCalendar = []
    const firstDayOfMonth = new Date(yearOrder, monthOrder, 1).getDay() // 이번달 첫 시작 요일
    const lastDateOfMonth = new Date(yearOrder, monthOrder + 1, 0).getDate() // 이번달 마지막 날짜
    const lastDayOfMonth = new Date(yearOrder, monthOrder, lastDateOfMonth).getDay() // 이번달 마지막 요일
    const lastDateOfLastMonth = new Date(yearOrder, monthOrder, 0).getDate() // 지난달 마지막 날짜

    for (let i = firstDayOfMonth; i > 0; i--) {
      currentCalendar.push({
        day: lastDateOfLastMonth - i + 1,
        currentMonthOfDate: false,
        routine: [{ recent: null }],
      })
    }

    for (let i = 1; i <= lastDateOfMonth; i++) {
      const filteredRoutine = currentMonthsRoutineData.map((data) => {
        const filteredRecent = data?.recent.filter((item) => Number(item.startAt.split(' ')[2]) === i)
        const routineResult = filteredRecent?.length !== 0 ? { ...data, recent: filteredRecent } : { recent: null }
        return routineResult
      })
      currentCalendar.push({ day: i, currentMonthOfDate: true, routine: filteredRoutine })
    }

    for (let i = lastDayOfMonth; i < 6; i++) {
      currentCalendar.push({ day: i - lastDayOfMonth + 1, currentMonthOfDate: false, routine: [{ recent: null }] })
    }
    return currentCalendar.slice((weekOrder - 1) * 7, weekOrder * 7)
  }

  const nextMonthOrderHandler = () => {
    setMothOrder((prev) => prev - 1)
    if (monthOrder === 0) {
      setMothOrder(11)
      setYearOrder((prev) => prev - 1)
    }
  }
  const lastMonthOrderHandler = () => {
    setMothOrder((prev) => prev + 1)
    if (monthOrder === 11) {
      setMothOrder(0)
      setYearOrder((prev) => prev + 1)
    }
  }

  const filteredDataSelectorHandler = () => {
    setDataSelector((prev) => !prev)
  }

  return (
    <S.calendarPageContainer>
      <S.calendarMenuBtnBox>
        <S.yearMenuBox>
          <S.arrowBtn direction='left' onClick={nextMonthOrderHandler}>
            <Arrow />
          </S.arrowBtn>
          <S.dataMenu>
            {yearOrder}년 {MONTHS.indexOf(MONTHS[monthOrder]) + 1}월
          </S.dataMenu>
          <S.arrowBtn direction='right' onClick={lastMonthOrderHandler}>
            <Arrow />
          </S.arrowBtn>
        </S.yearMenuBox>
        <S.dataMenuBox>
          <S.arrowBtn direction='left' onClick={filteredDataSelectorHandler}>
            <Arrow />
          </S.arrowBtn>
          <S.dataMenu>{dataSelector ? '총 볼륨' : `총 운동시간`}</S.dataMenu>
          <S.arrowBtn direction='right' onClick={filteredDataSelectorHandler}>
            <Arrow />
          </S.arrowBtn>
        </S.dataMenuBox>
      </S.calendarMenuBtnBox>
      <S.calendarBox>
        <S.tableHead>
          <tr>
            {DayOfTheWeek.map((data, i) => (
              <S.weekendTable weekend={i} key={data}>
                {data}
              </S.weekendTable>
            ))}
          </tr>
        </S.tableHead>
        <CalendarItem dataSelector={dataSelector} fetchedWeeks={fetchedWeeks} />
      </S.calendarBox>
      <CurrentRoutineRecentUnit dataSelector={dataSelector} />
      <CurrentRoutineCard currentMonthsRoutineData={currentMonthsRoutineData} />
      <Footer />
    </S.calendarPageContainer>
  )
}

export default Calendar
