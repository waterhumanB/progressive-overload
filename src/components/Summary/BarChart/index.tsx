import { useAppSelector } from '../../../hooks/useAppSelector'
import { getRecordsData } from '../../../states/records'

interface IBarChartProps {
  volumeAndDurationSelect: string
  totalWorkoutDays: string[]
  dayWeekMonthSelect: string
}

interface IFetcehdYearAndWeekData {
  year: number
  weeks: number
  volume: number
  durations: number
}

interface IRoutineByDays {
  date: string
  volume: number
  durations: number
  year?: number
  month?: string
}

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const BarChart = ({ volumeAndDurationSelect, totalWorkoutDays, dayWeekMonthSelect }: IBarChartProps) => {
  const recordSelector = useAppSelector(getRecordsData)

  const routineByDays = totalWorkoutDays.map((data) => {
    const volume = Object.values(recordSelector.records.byId)
      .map((item) => {
        return item.startAt.includes(data) ? item.set.map((set) => set.kg * set.rab) : []
      })
      .flat(1)
      .reduce((acc, el) => acc + el)

    const durations = Object.values(recordSelector.records.byId)
      .map((item) => {
        const durationHour =
          Number(item.endAt.split(' ')[4].split(':')[0]) - Number(item.startAt.split(' ')[4].split(':')[0])
        const durrationMinute =
          Number(item.endAt.split(' ')[4].split(':')[1]) - Number(item.startAt.split(' ')[4].split(':')[1])
        return item.startAt.includes(data) ? durationHour * 60 + durrationMinute : []
      })
      .flat(1)
      .reduce((acc, el) => acc + el)

    return { date: data, volume, durations }
  })

  const fetcehdYearAndWeeksData = routineByDays.map((data) => {
    const { date, volume, durations } = data
    const currentdate = new Date(
      Number(date.split(' ')[3]),
      MONTHS.indexOf(date.split(' ')[1]),
      Number(date.split(' ')[2])
    )
    const currentYear = new Date(currentdate.getFullYear(), 0, 1)
    const numberOfDays = Math.floor((+currentdate - +currentYear) / (24 * 60 * 60 * 1000))
    const weeks = Math.ceil((currentdate.getDay() + 1 + numberOfDays) / 7)
    return { year: Number(date.split(' ')[3]), weeks, volume, durations }
  })

  const routineByWeeks = fetcehdYearAndWeeksData.reduce((acc: IFetcehdYearAndWeekData[], current) => {
    const targetIndex = acc.findIndex((data) => data.year === current.year && data.weeks === current.weeks)
    if (targetIndex >= 0) {
      acc[targetIndex].volume += current.volume
      acc[targetIndex].durations += current.durations
      return acc
    }
    return [...acc, current]
  }, [])

  const fetchedMonthAndYearData = routineByDays.reduce((acc: IRoutineByDays[], current) => {
    const targetIndex = acc.findIndex(
      (data) =>
        data.date.split(' ')[1] === current.date.split(' ')[1] && data.date.split(' ')[3] === current.date.split(' ')[3]
    )
    if (targetIndex >= 0) {
      acc[targetIndex].volume += current.volume
      acc[targetIndex].durations += current.durations
      return acc
    }
    return [...acc, current]
  }, [])

  const routineByMonths = fetchedMonthAndYearData.map((data) => {
    const year = Number(data.date.split(' ')[3])
    const month = data.date.split(' ')[1]
    return { year, month, ...data }
  })

  return (
    <svg viewBox='0 0 400 250'>
      {dayWeekMonthSelect === 'days' &&
        routineByDays.map((data, idx) => (
          <g key={data.date}>
            <rect x={idx * 50 + 10} y={`${200 - 190}`} width='10' height='190' stroke='black' strokeWidth='3px' />
            {volumeAndDurationSelect === 'volume' ? (
              <text y='220' x={idx * 50}>
                volume
              </text>
            ) : (
              <text y='220' x={idx * 50}>
                duration
              </text>
            )}
          </g>
        ))}
      {dayWeekMonthSelect === 'weeks' &&
        routineByWeeks.map((data, idx) => (
          <g key={data.weeks}>
            <rect x={idx * 50 + 10} y={`${200 - 190}`} width='10' height='190' stroke='black' strokeWidth='3px' />
            {volumeAndDurationSelect === 'volume' ? (
              <text y='220' x={idx * 50}>
                volume
              </text>
            ) : (
              <text y='220' x={idx * 50}>
                duration
              </text>
            )}
          </g>
        ))}
      {dayWeekMonthSelect === 'months' &&
        routineByMonths.map((data, idx) => (
          <g key={data.month}>
            <rect x={idx * 50 + 10} y={`${200 - 190}`} width='10' height='190' stroke='black' strokeWidth='3px' />
            {volumeAndDurationSelect === 'volume' ? (
              <text y='220' x={idx * 50}>
                volume
              </text>
            ) : (
              <text y='220' x={idx * 50}>
                duration
              </text>
            )}
          </g>
        ))}
    </svg>
  )
}

export default BarChart
