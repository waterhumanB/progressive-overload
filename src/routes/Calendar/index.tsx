import { useState, MouseEvent } from 'react'
import { CalendarItem, CurrentRoutineCard } from '../../components/Calendar'
import Footer from '../../components/Footer'
import { useAppSelector } from '../../hooks/useAppSelector'
import { getRoutineData } from '../../states/routines'
import * as S from './styles'

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const dates = ['일', '월', '화', '수', '목', '금', '토']

const Calendar = () => {
  const [monthOrder, setMothOrder] = useState(0)
  const [dataSelector, setDataSelector] = useState(true)
  const [yearOrder, setYearOrder] = useState(new Date().getFullYear())
  const routineSelector = useAppSelector(getRoutineData)

  const currentMonthsRoutineData = Object.values(routineSelector.routines.byId).map((data) => {
    const filtered = data.recent.filter(
      (item) => item.startAt.split(' ')[1] === months[monthOrder] && item.startAt.split(' ')[3] === String(yearOrder)
    )
    const result = filtered.length !== 0 ? { ...data, recent: filtered } : null
    return result
  })

  const fetchedWeeks = (weekOrder: number) => {
    const range = [...Array(31)].map((_, i) => i + 1)
    const weekRange = range.map((date) => {
      const filteredDay =
        new Date(yearOrder, months.indexOf(months[monthOrder]), date).getMonth() ===
          months.indexOf(months[monthOrder]) && date
      const filteredRoutine = currentMonthsRoutineData.map((data) => {
        const filteredRecent = data?.recent.filter((item) => Number(item.startAt.split(' ')[2]) === date)
        const routineResult = filteredRecent?.length !== 0 ? { ...data, recent: filteredRecent } : null
        return routineResult
      })
      const result = filteredDay ? { day: filteredDay, routine: filteredRoutine } : null
      return result
    })
    return weekRange.slice((weekOrder - 1) * 7, weekOrder * 7)
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
