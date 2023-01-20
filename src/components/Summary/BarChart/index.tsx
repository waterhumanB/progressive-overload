import { useAppSelector } from '../../../hooks/useAppSelector'
import { getRecordsData } from '../../../states/records'

interface IBarChartProps {
  toggleBarChartMenu: boolean
  totalWorkoutDays: string[]
}

const BarChart = ({ toggleBarChartMenu, totalWorkoutDays }: IBarChartProps) => {
  const recordSelector = useAppSelector(getRecordsData)

  const routineByDate = totalWorkoutDays.map((data) => {
    const sets = Object.values(recordSelector.records.byId)
      .map((item) => {
        return item.startAt.includes(data) ? item.set.map((set) => set.kg * set.rab) : []
      })
      .flat(1)
      .reduce((acc, el) => acc + el)

    const durtaions = Object.values(recordSelector.records.byId)
      .map((item) => {
        const durationHour =
          Number(item.endAt.split(' ')[4].split(':')[0]) - Number(item.startAt.split(' ')[4].split(':')[0])
        const durrationMinute =
          Number(item.endAt.split(' ')[4].split(':')[1]) - Number(item.startAt.split(' ')[4].split(':')[1])
        return item.startAt.includes(data) ? durationHour * 60 + durrationMinute : []
      })
      .flat(1)
      .reduce((acc, el) => acc + el)

    return { date: data, sets, durtaions }
  })

  const currentdate = new Date(2023, 11, 31)
  const oneJan = new Date(currentdate.getFullYear(), 0, 1)
  const numberOfDays = Math.floor((+currentdate - +oneJan) / (24 * 60 * 60 * 1000))
  const result = Math.ceil((currentdate.getDay() + 1 + numberOfDays) / 7)
  console.log(`(${currentdate}) 주차 ${result}.`)

  return (
    <svg viewBox='0 0 400 250'>
      {toggleBarChartMenu
        ? routineByDate.map((data, idx) => (
            <g key={data.date}>
              <rect x={idx * 50 + 10} y={`${200 - 190}`} width='10' height='190' stroke='black' strokeWidth='3px' />
              <text y='220' x={idx * 50}>
                volume
              </text>
            </g>
          ))
        : routineByDate.map((data, idx) => (
            <g key={data.date}>
              <rect x={idx * 50 + 10} y={`${200 - 190}`} width='10' height='190' stroke='black' strokeWidth='3px' />
              <text y='220' x={idx * 50}>
                time
              </text>
            </g>
          ))}
    </svg>
  )
}

export default BarChart
