import { ICalendarItem, ICalendarItemProps } from '../../../types/allProps.d'

const CalendarItem = ({ fetchedWeeks, dataSelector }: ICalendarItemProps) => {
  console.log(fetchedWeeks(5))
  return (
    <tbody>
      <tr>
        {fetchedWeeks(1).map((data: ICalendarItem) => (
          <td key={data?.day}>{data?.day}</td>
        ))}
      </tr>
      <tr>
        {fetchedWeeks(2).map((data: ICalendarItem) => (
          <td key={data?.day}>{data?.day}</td>
        ))}
      </tr>
      <tr>
        {fetchedWeeks(3).map((data: ICalendarItem) => (
          <td key={data?.day}>{data?.day}</td>
        ))}
      </tr>
      <tr>
        {fetchedWeeks(4).map((data: ICalendarItem) => (
          <td key={data?.day}>{data?.day}</td>
        ))}
      </tr>
      <tr>
        {fetchedWeeks(5).map((data: ICalendarItem) => {
          return data ? <td key={data?.day}>{data?.day}</td> : null
        })}
      </tr>
    </tbody>
  )
}

export default CalendarItem
