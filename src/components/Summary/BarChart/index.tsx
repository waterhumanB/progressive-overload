import { MouseEvent, useEffect, useState } from 'react'
import { useAppSelector } from '../../../hooks/useAppSelector'
import { getRecordsData } from '../../../states/records'
import BarChartItem from './barChartItem'
import { percentDuration, percentVolume, routineDataByDate } from './domain'

import * as S from './styles'

interface IBarChartProps {
  volumeAndDurationSelect: string
  totalWorkoutDays: string[]
  dayWeekMonthSelect: string
}

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const DAY_OF_THE_WEEK = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat']
const DAY_OF_THE_WEEK_KOR = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일']

const BarChart = ({ volumeAndDurationSelect, totalWorkoutDays, dayWeekMonthSelect }: IBarChartProps) => {
  const [startPageX, setStartPageX] = useState(0)
  const [translateX, setTranslateX] = useState(10)
  const [isMouseEvent, setIsMoseEvent] = useState(false)
  const recordSelector = useAppSelector(getRecordsData).records.byId

  const [routineByDay, routineByWeek, routineByMonth] = routineDataByDate(totalWorkoutDays, recordSelector)

  const mouseDownHandler = (e: MouseEvent<HTMLOrSVGElement>) => {
    e.preventDefault()
    setIsMoseEvent(true)
    setStartPageX(e.pageX - translateX)
  }

  const mouseMoveHandler = (e: MouseEvent<HTMLOrSVGElement>) => {
    e.preventDefault()
    const deltaX = e.pageX - startPageX
    if (isMouseEvent === true) {
      setTranslateX(deltaX)
    }
    if (
      (e.currentTarget.dataset.select === 'day' && -50 * routineByDay.length >= deltaX) ||
      (e.currentTarget.dataset.select === 'week' && -50 * routineByWeek.length >= deltaX) ||
      (e.currentTarget.dataset.select === 'month' && -50 * routineByMonth.length >= deltaX)
    ) {
      setIsMoseEvent(false)
      e.currentTarget.dataset.select === 'day' && setTranslateX(-50 * routineByDay.length + 10)
      e.currentTarget.dataset.select === 'week' && setTranslateX(-50 * routineByWeek.length + 10)
      e.currentTarget.dataset.select === 'month' && setTranslateX(-50 * routineByMonth.length + 10)
    }
    if (translateX > 10) {
      setIsMoseEvent(false)
      setTranslateX(10)
    }
  }

  const mouseUpHandler = (e: MouseEvent<HTMLOrSVGElement>) => {
    e.preventDefault()
    setIsMoseEvent(false)
  }

  const mouseLeaveHandler = (e: MouseEvent<HTMLOrSVGElement>) => {
    e.preventDefault()
    setIsMoseEvent(false)
  }

  useEffect(() => {
    setTranslateX(10)
    setStartPageX(0)
  }, [dayWeekMonthSelect])

  return (
    <S.barChartBox viewBox={`${-translateX} 0 400 400`}>
      {dayWeekMonthSelect === 'day' &&
        routineByDay.map((data: any, idx) => (
          <g
            key={data.duration + Math.random()}
            data-select='day'
            onMouseDown={mouseDownHandler}
            onMouseMove={mouseMoveHandler}
            onMouseUp={mouseUpHandler}
            onMouseLeave={mouseLeaveHandler}
          >
            <BarChartItem
              dayWeekMonthSelect={dayWeekMonthSelect}
              data={data}
              idx={idx}
              volumeAndDurationSelect={volumeAndDurationSelect}
              heightValue={
                volumeAndDurationSelect === 'volume'
                  ? percentVolume('day', data.volume)
                  : percentDuration('day', data.duration)
              }
              hoilday={DAY_OF_THE_WEEK_KOR[DAY_OF_THE_WEEK.indexOf(data.date.split(' ')[0])]}
              monthByDayData={MONTHS.indexOf(data.date.split(' ')[1])}
              monthByWeekData={0}
              monthByMonthData={0}
            />
          </g>
        ))}
      {dayWeekMonthSelect === 'week' &&
        routineByWeek.map((data: any, idx) => (
          <BarChartItem
            key={data.duration + Math.random()}
            dayWeekMonthSelect={dayWeekMonthSelect}
            data={data}
            idx={idx}
            volumeAndDurationSelect={volumeAndDurationSelect}
            heightValue={
              volumeAndDurationSelect === 'volume'
                ? percentVolume('week', data.volume)
                : percentDuration('week', data.duration)
            }
            hoilday='hoilday'
            monthByDayData={0}
            monthByWeekData={MONTHS.indexOf(data.month)}
            monthByMonthData={0}
          />
        ))}
      {dayWeekMonthSelect === 'month' &&
        routineByMonth.map((data: any, idx) => (
          <BarChartItem
            key={data.duration + Math.random()}
            dayWeekMonthSelect={dayWeekMonthSelect}
            data={data}
            idx={idx}
            volumeAndDurationSelect={volumeAndDurationSelect}
            heightValue={
              volumeAndDurationSelect === 'volume'
                ? percentVolume('month', data.volume)
                : percentDuration('month', data.duration)
            }
            hoilday='hoilday'
            monthByDayData={0}
            monthByWeekData={0}
            monthByMonthData={MONTHS.indexOf(data.month)}
          />
        ))}
    </S.barChartBox>
  )
}

export default BarChart
