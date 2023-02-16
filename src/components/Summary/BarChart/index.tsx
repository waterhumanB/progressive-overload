import { MouseEvent, useEffect, useState } from 'react'
import { useAppSelector } from '../../../hooks/useAppSelector'
import { getRecordsData } from '../../../states/records'
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
            <rect
              width='50'
              height='50'
              fill='#3d87fb'
              x={idx * 68 - 9}
              y={250 - percentVolume('day', data.volume) < 0 ? -6 : 180 - percentVolume('day', data.volume)}
              rx='10'
              ry='10'
            />
            <text x={idx * 68 + 3} y={250 - percentVolume('day', data.volume)}>
              {data.duration}
            </text>
          </g>
        ))}
      {dayWeekMonthSelect === 'week' &&
        routineByWeek.map((data: any, idx) => (
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
        routineByMonth.map((data: any, idx) => (
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
