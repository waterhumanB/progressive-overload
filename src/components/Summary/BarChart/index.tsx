import { MouseEvent, useEffect, useState } from 'react'
import { useAppSelector } from '../../../hooks/useAppSelector'
import { getRecordsData } from '../../../states/records'
import { percentDuration, percentVolume } from './utils'

import * as S from './styles'

interface IBarChartProps {
  volumeAndDurationSelect: string
  totalWorkoutDays: string[]
  dayWeekMonthSelect: string
}

interface IFetcehdYearAndWeekData {
  year: number
  week: number
  volume: number
  duration: number
  month: string
}

interface IRoutineByDay {
  date: string
  volume: number
  duration: number
}

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const DAY_OF_THE_WEEK = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat']
const DAY_OF_THE_WEEK_KOR = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일']

const BarChart = ({ volumeAndDurationSelect, totalWorkoutDays, dayWeekMonthSelect }: IBarChartProps) => {
  const [startPageX, setStartPageX] = useState(0)
  const [translateX, setTranslateX] = useState(10)
  const [isMouseEvent, setIsMoseEvent] = useState(false)
  const recordSelector = useAppSelector(getRecordsData)

  const routineByDay = totalWorkoutDays
    .map((data) => {
      const volume = Object.values(recordSelector.records.byId)
        .map((item) => {
          return item.startAt.includes(data)
            ? item.set.map((set) => set.kg * set.rab).reduce((acc, cur) => acc + cur)
            : 0
        })
        .reduce((acc, cur) => acc + cur)

      const duration = Object.values(recordSelector.records.byId)
        .map((item) => {
          const durationHour =
            Number(item.endAt.split(' ')[4].split(':')[0]) - Number(item.startAt.split(' ')[4].split(':')[0])
          const durrationMinute =
            Number(item.endAt.split(' ')[4].split(':')[1]) - Number(item.startAt.split(' ')[4].split(':')[1])
          return item.startAt.includes(data) ? durationHour * 60 + durrationMinute : 0
        })
        .reduce((acc, cur) => acc + cur)

      return { date: data, volume, duration }
    })
    .reverse()

  const fetcehdYearAndWeeksData = routineByDay.map((data) => {
    const { date, volume, duration } = data
    const currentDate = new Date(
      `${date.split(' ')[3]}-${MONTHS.indexOf(date.split(' ')[1]) + 1}-${date.split(' ')[2]}`
    )
    const firstDay = new Date(currentDate.setDate(1)).getDay()
    const week = Math.ceil((Number(date.split(' ')[2]) + firstDay) / 7)
    const month = date.split(' ')[1]
    return { year: Number(date.split(' ')[3]), week, month, volume, duration }
  })

  const routineByWeek = fetcehdYearAndWeeksData.reduce((acc: IFetcehdYearAndWeekData[], current) => {
    const targetIndex = acc.findIndex((data) => data.year === current.year && data.week === current.week)
    if (targetIndex >= 0) {
      acc[targetIndex].volume += current.volume
      acc[targetIndex].duration += current.duration
      return acc
    }
    return [...acc, current]
  }, [])

  const fetchedMonthAndYearData = routineByDay.reduce((acc: IRoutineByDay[], current) => {
    const targetIndex = acc.findIndex(
      (data) =>
        data.date.split(' ')[1] === current.date.split(' ')[1] && data.date.split(' ')[3] === current.date.split(' ')[3]
    )
    if (targetIndex >= 0) {
      return acc.map((data, i) => {
        if (i === targetIndex) {
          return {
            ...data,
            duration: data.duration + current.duration,
            volume: data.volume + current.volume,
          }
        }
        return data
      })
    }
    acc.push(current)
    return acc
  }, [])

  const routineByMonth = fetchedMonthAndYearData.map((data) => {
    const year = Number(data.date.split(' ')[3])
    const month = data.date.split(' ')[1]
    return { year, month, volume: data.volume, duration: data.duration }
  })

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
        routineByDay.map((data, idx) => (
          <g
            key={data.date}
            data-select='day'
            onMouseDown={mouseDownHandler}
            onMouseMove={mouseMoveHandler}
            onMouseUp={mouseUpHandler}
            onMouseLeave={mouseLeaveHandler}
          >
            {volumeAndDurationSelect === 'volume' && (
              <S.bar heightValue={percentVolume('day', data.volume)} barValue='volume' x={idx * 68 + 10} />
            )}
            {volumeAndDurationSelect === 'duration' && (
              <S.bar barValue='duration' heightValue={percentDuration('day', data.duration)} x={idx * 68 + 10} />
            )}
            {volumeAndDurationSelect === 'volume' && (
              <S.animatedBar x={idx * 68 - 7} data-select='day' heightValue={percentVolume('day', data.volume) + 1} />
            )}
            {volumeAndDurationSelect === 'duration' && (
              <S.animatedBar x={idx * 68 - 7} heightValue={percentDuration('day', data.duration) + 1} />
            )}
            <S.barValue
              holiday={DAY_OF_THE_WEEK_KOR[DAY_OF_THE_WEEK.indexOf(data.date.split(' ')[0])]}
              y='270'
              x={idx * 68 - 1}
            >
              {data.date.split(' ')[3]}
            </S.barValue>
            <S.barValue
              holiday={DAY_OF_THE_WEEK_KOR[DAY_OF_THE_WEEK.indexOf(data.date.split(' ')[0])]}
              y='290'
              x={MONTHS.indexOf(data.date.split(' ')[1]) + 1 > 9 ? idx * 68 - 4 : idx * 68 - 1}
            >
              {`${MONTHS.indexOf(data.date.split(' ')[1]) + 1}/${data.date.split(' ')[2]}`}
            </S.barValue>
            <S.barValue
              holiday={DAY_OF_THE_WEEK_KOR[DAY_OF_THE_WEEK.indexOf(data.date.split(' ')[0])]}
              y='310'
              x={idx * 68 - 6}
            >
              {DAY_OF_THE_WEEK_KOR[DAY_OF_THE_WEEK.indexOf(data.date.split(' ')[0])]}
            </S.barValue>
          </g>
        ))}
      {dayWeekMonthSelect === 'week' &&
        routineByWeek.map((data, idx) => (
          <g
            key={`${data.year}-${data.month}-${data.week}`}
            data-select='week'
            onMouseDown={mouseDownHandler}
            onMouseMove={mouseMoveHandler}
            onMouseUp={mouseUpHandler}
            onMouseLeave={mouseLeaveHandler}
          >
            {volumeAndDurationSelect === 'volume' && (
              <S.bar barValue='volume' x={idx * 68 + 10} heightValue={percentVolume('week', data.volume)} />
            )}
            {volumeAndDurationSelect === 'duration' && (
              <S.bar barValue='duration' x={idx * 68 + 10} heightValue={percentDuration('week', data.duration)} />
            )}
            {volumeAndDurationSelect === 'volume' && (
              <S.animatedBar x={idx * 68 - 7} data-select='week' heightValue={percentVolume('week', data.volume) + 1} />
            )}
            {volumeAndDurationSelect === 'duration' && (
              <S.animatedBar x={idx * 68 - 7} heightValue={percentDuration('week', data.duration) + 1} />
            )}
            <S.barValue holiday='holiday' y='270' x={idx * 68 - 1}>
              {data.year}
            </S.barValue>
            <S.barValue holiday='holiday' y='290' x={MONTHS.indexOf(data.month) + 1 > 9 ? idx * 68 - 7 : idx * 68 - 3}>
              {`${MONTHS.indexOf(data.month) + 1}/${data.week}주`}
            </S.barValue>
          </g>
        ))}
      {dayWeekMonthSelect === 'month' &&
        routineByMonth.map((data, idx) => (
          <g
            key={data.month}
            data-select='month'
            onMouseDown={mouseDownHandler}
            onMouseMove={mouseMoveHandler}
            onMouseUp={mouseUpHandler}
            onMouseLeave={mouseLeaveHandler}
          >
            {volumeAndDurationSelect === 'volume' && (
              <S.bar barValue='volume' heightValue={percentVolume('month', data.volume)} x={idx * 68 + 10} />
            )}
            {volumeAndDurationSelect === 'duration' && (
              <S.bar barValue='duration' heightValue={percentDuration('month', data.duration)} x={idx * 68 + 10} />
            )}
            {volumeAndDurationSelect === 'volume' && (
              <S.animatedBar x={idx * 68 - 7} heightValue={percentVolume('month', data.volume) + 1} />
            )}
            {volumeAndDurationSelect === 'duration' && (
              <S.animatedBar x={idx * 68 - 7} heightValue={percentDuration('month', data.duration) + 1} />
            )}
            <S.barValue holiday='holiday' y='270' x={idx * 68 - 1}>
              {data.year}
            </S.barValue>
            <S.barValue holiday='holiday' y='290' x={MONTHS.indexOf(data.month) > 8 ? idx * 68 : idx * 68 + 3}>
              {`${MONTHS.indexOf(data.month) + 1}월`}
            </S.barValue>
          </g>
        ))}
    </S.barChartBox>
  )
}

export default BarChart
