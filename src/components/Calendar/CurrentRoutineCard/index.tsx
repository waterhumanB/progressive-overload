import { ICalendarCardProps } from '../../../types/allProps.d'
import { IRecentItem, IRoutineItem } from '../../../types/routines.d'
import { fetchedDate } from '../../../utils/fetchedDate'

import { ReactComponent as Report } from '../../../assets/imgs/report.svg'
import * as S from './styles'
import { useNavigate } from 'react-router-dom'

const CurrentRoutineCard = ({ currentMonthsRoutineData }: ICalendarCardProps) => {
  const navigate = useNavigate()

  const routineFinishPageRouter = (routine: IRoutineItem, recent: IRecentItem) => {
    const currentRoutine = [{ ...routine, recent: [recent] }]
    navigate('/calendar/routine-result', { state: currentRoutine })
  }

  // const routineCardData = currentMonthsRoutineData
  //   ? currentMonthsRoutineData
  //       .filter((data: IRoutineItem) => data !== null)
  //       .map((data: IRoutineItem) => {
  //         const routineData = data?.recent.map((item) => {
  //           return { startAt: item.startAt, title: data.title, routineData: data }
  //         })
  //         return routineData
  //       })
  //       .flat(1)
  //       .sort((a: { startAt: string }, b: { startAt: string }) => {
  //         const dateA = Date.parse(a.startAt)
  //         const dateB = Date.parse(b.startAt)
  //         return dateA - dateB
  //       })
  //   : null

  const routineCardData =
    currentMonthsRoutineData
      ?.filter((data: IRoutineItem) => data !== null)
      .flatMap((data: IRoutineItem) =>
        data.recent.map((item) => ({ startAt: item.startAt, title: data.title, routineData: data }))
      )
      .sort((a: { startAt: string }, b: { startAt: string }) => Date.parse(a.startAt) - Date.parse(b.startAt)) ?? []

  return (
    <S.currentRoutineCardContainer>
      {routineCardData[0] !== null &&
        routineCardData.map((data: any) => (
          <S.routineCardBox key={data.startAt}>
            <S.cardData
              onClick={() => routineFinishPageRouter(data.routineData, data.routineData.recent)}
              key={data?.startAt}
            >
              <Report />
              <S.routineDataBox>
                <S.routineTitle>{data?.title}</S.routineTitle>
                <S.routineDate>{fetchedDate(data?.startAt)}</S.routineDate>
              </S.routineDataBox>
            </S.cardData>
          </S.routineCardBox>
        ))}
    </S.currentRoutineCardContainer>
  )
}

export default CurrentRoutineCard
