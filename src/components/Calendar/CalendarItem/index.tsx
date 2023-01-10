import { useAppSelector } from '../../../hooks/useAppSelector'
import { getRecordsData } from '../../../states/records'
import { ICalendarItem, ICalendarItemProps } from '../../../types/allProps.d'
import { IRecentItem, IRoutineItem } from '../../../types/routines.d'

const CalendarItem = ({ fetchedWeeks, dataSelector }: ICalendarItemProps) => {
  const recordSeletor = useAppSelector(getRecordsData)

  const todayTotalVolume = (routine: IRoutineItem[]) => {
    const todayRoutineRecordIds =
      routine !== undefined
        ? routine.map((data: IRoutineItem) => data?.recent.map((item: IRecentItem) => item.recordIds)).flat(2)
        : ''
    const todayRoutineSets = Object.values(recordSeletor.records.byId)
      .filter((data) => todayRoutineRecordIds.includes(data.id))
      .map((item) => item.set)
      .flat(2)
    return todayRoutineSets.length !== 0
      ? todayRoutineSets.map((data) => data.kg * data.rab).reduce((acc, el) => acc + el)
      : ''
  }
  const todayDuration = (routine: IRoutineItem[]) => {
    const todayRoutineTime = routine.map((data: IRoutineItem) =>
      data?.recent
        .map((item: IRecentItem) => {
          const startTime = item.startAt.split(' ')[4].split(':')
          const endTime = item?.endAt?.split(' ')[4].split(':')
          const hour = (Number(endTime[0]) - Number(startTime[0])) * 60
          const minute = Number(endTime[1]) - Number(startTime[1])
          return hour + minute
        })
        .reduce((acc, el) => acc + el)
    )
    return todayRoutineTime
  }

  return (
    <tbody>
      <tr>
        {fetchedWeeks(1).map((data: ICalendarItem) => (
          <td key={data?.day}>
            {data?.day} {todayTotalVolume(data?.routine)} {todayDuration(data?.routine)}
          </td>
        ))}
      </tr>
      <tr>
        {fetchedWeeks(2).map((data: ICalendarItem) => (
          <td key={data?.day}>
            {data?.day} {todayTotalVolume(data?.routine)} {todayDuration(data?.routine)}
          </td>
        ))}
      </tr>
      <tr>
        {fetchedWeeks(3).map((data: ICalendarItem) => (
          <td key={data?.day}>
            {data?.day} {todayTotalVolume(data?.routine)}
            {todayDuration(data?.routine)}
          </td>
        ))}
      </tr>
      <tr>
        {fetchedWeeks(4).map((data: ICalendarItem) => (
          <td key={data?.day}>
            {data?.day} {todayTotalVolume(data?.routine)}
            {todayDuration(data?.routine)}
          </td>
        ))}
      </tr>
      <tr>
        {fetchedWeeks(5).map((data: ICalendarItem) => {
          return data ? (
            <td key={data?.day}>
              {data?.day} {todayTotalVolume(data?.routine)}
              {todayDuration(data?.routine)}
            </td>
          ) : null
        })}
      </tr>
    </tbody>
  )
}

export default CalendarItem
