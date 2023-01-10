import { ICalendarCardProps } from '../../../types/allProps.d'
import { IRoutineItem } from '../../../types/routines.d'
import { fetchedDate } from '../../../utils/fetchedDate'

const CurrentRoutineCard = ({ currentMonthsRoutineData }: ICalendarCardProps) => {
  return (
    <div>
      {currentMonthsRoutineData.map((data: IRoutineItem) => {
        return data ? (
          <div key={data?.title}>
            {data?.recent.map((item) => (
              <div key={item.startAt}>
                <div>{data.title}</div>
                <div>{fetchedDate(item.startAt)}</div>
              </div>
            ))}
          </div>
        ) : null
      })}
    </div>
  )
}

export default CurrentRoutineCard
