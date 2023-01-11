import { useState, MouseEvent, useEffect } from 'react'
import { CalendarItem, CurrentRoutineCard } from '../../components/Calendar'
import Footer from '../../components/Footer'
import { useAppSelector } from '../../hooks/useAppSelector'
import { getRoutineData } from '../../states/routines'
import * as S from './styles'

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const dates = ['일', '월', '화', '수', '목', '금', '토']

const Calendar = () => {
  const [monthOrder, setMothOrder] = useState(new Date().getMonth())
  const [dataSelector, setDataSelector] = useState(true)
  const [yearOrder, setYearOrder] = useState(new Date().getFullYear())
  const routineSelector = useAppSelector(getRoutineData)

  const currentMonthsRoutineData = Object.values(routineSelector.routines.byId).map((data) => {
    const filtered = data.recent.filter(
      (item) => item.startAt.split(' ')[1] === months[monthOrder] && item.startAt.split(' ')[3] === String(yearOrder)
    )
    const result = filtered.length !== 0 ? { ...data, recent: filtered } : undefined
    return result
  })

  const fetchedWeeks = (weekOrder: number) => {
    const currentCalendar = []
    const firstDayOfMonth = new Date(yearOrder, monthOrder, 1).getDay() // 이번달 첫 시작일
    const lastDateOfMonth = new Date(yearOrder, monthOrder + 1, 0).getDate() // 이번달 마지막 날짜
    const lastDayOfMonth = new Date(yearOrder, monthOrder, lastDateOfMonth).getDay() // 이번달 마지막 날수
    const lastDateOfLastMonth = new Date(yearOrder, monthOrder, 0).getDate() // 지난달 마지막 날짜
    for (let i = firstDayOfMonth; i > 0; i--) {
      currentCalendar.push({
        day: lastDateOfLastMonth - i + 1,
        currentMonthOfDate: false,
        routine: [{ recent: undefined }],
      })
    }
    for (let i = 1; i <= lastDateOfMonth; i++) {
      const filteredRoutine = currentMonthsRoutineData.map((data) => {
        const filteredRecent = data?.recent.filter((item) => Number(item.startAt.split(' ')[2]) === i)
        const routineResult = filteredRecent?.length !== 0 ? { ...data, recent: filteredRecent } : { recent: undefined }
        return routineResult
      })
      currentCalendar.push({ day: i, currentMonthOfDate: true, routine: filteredRoutine })
    }
    for (let i = lastDayOfMonth; i < 6; i++) {
      currentCalendar.push({ day: i - lastDayOfMonth + 1, currentMonthOfDate: false, routine: [{ recent: undefined }] })
    }
    currentCalendar.length = 35
    return currentCalendar.slice((weekOrder - 1) * 7, weekOrder * 7)
  }

  const mothsOrderHandler = (e: MouseEvent<HTMLButtonElement>) => {
    if (e.currentTarget.innerText === '뒤') {
      setMothOrder((prev) => prev - 1)
      if (monthOrder === 0) {
        setMothOrder(11)
        setYearOrder((prev) => prev - 1)
      }
    }

    if (e.currentTarget.innerText === '앞') {
      setMothOrder((prev) => prev + 1)
      if (monthOrder === 11) {
        setMothOrder(0)
        setYearOrder((prev) => prev + 1)
      }
    }
  }

  const filteredDataSelectorHandler = () => {
    setDataSelector((prev) => !prev)
  }

  return (
    <section>
      <div>달력 페이지</div>
      <div>
        <button onClick={mothsOrderHandler} type='button'>
          뒤
        </button>
        <div>
          {yearOrder}년 {months.indexOf(months[monthOrder]) + 1}월
        </div>
        <button onClick={mothsOrderHandler} type='button'>
          앞
        </button>
      </div>
      <div>
        <button onClick={filteredDataSelectorHandler} type='button'>{`<`}</button>
        <div>{dataSelector ? `총 볼륨` : '총 운동시간'}</div>
        <button onClick={filteredDataSelectorHandler} type='button'>{`>`}</button>
      </div>
      <S.calenderContainer>
        <thead>
          <tr>
            {dates.map((data) => (
              <th key={data}>{data}</th>
            ))}
          </tr>
        </thead>
        <CalendarItem dataSelector={dataSelector} fetchedWeeks={fetchedWeeks} />
      </S.calenderContainer>
      <CurrentRoutineCard currentMonthsRoutineData={currentMonthsRoutineData} />
      <Footer />
    </section>
  )
}

export default Calendar
