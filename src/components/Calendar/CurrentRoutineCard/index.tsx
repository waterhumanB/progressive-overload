import { ICalendarCardProps } from '../../../types/allProps.d'
import { IRoutineItem } from '../../../types/routines.d'

const CurrentRoutineCard = ({ currentMonthsRoutineData }: ICalendarCardProps) => {
  console.log(currentMonthsRoutineData)
  return (
    <div>
      {currentMonthsRoutineData.map((data: IRoutineItem) => {
        return data ? (
          <div key={data?.title}>
            {data?.recent.map((item) => (
              <div key={item.startAt}>
                <div>{data.title}</div>
                <div>{item.startAt}</div>
              </div>
            ))}
          </div>
        ) : null
      })}
    </div>
  )
}

export default CurrentRoutineCard
