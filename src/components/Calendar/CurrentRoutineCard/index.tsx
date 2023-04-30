import { ICalendarCardProps } from '../../../types/allProps.d'
import { IRoutineItem } from '../../../types/routines.d'
import { fetchedDate } from '../../../utils/fetchedDate'

import * as S from './styles'
import { ReactComponent as Report } from '../../../assets/imgs/report.svg'
import { useNavigate } from 'react-router-dom'
import { useCallback } from 'react'

interface ICurrentRoutine {
  routineData: IRoutineItem
  startAt: string
  title: string
}

const CurrentRoutineCard = ({ currentMonthsRoutineData }: ICalendarCardProps) => {
  const navigate = useNavigate()

  const routineFinishPageRouter = useCallback((routine: ICurrentRoutine) => {
    navigate('/calendar/routine-result', { state: [routine.routineData] })
  }, [])

  const routineCardData =
    currentMonthsRoutineData
      ?.filter((data: IRoutineItem) => data !== null)
      .flatMap((data: IRoutineItem) =>
        data.recent.map((item) => ({ startAt: item.startAt, title: data.title, routineData: data }))
      )
      .sort((a: { startAt: string }, b: { startAt: string }) => Date.parse(a.startAt) - Date.parse(b.startAt)) ?? []

  return (
    <S.currentRoutineCardContainer>
      {routineCardData?.map((data: any) => (
        <S.routineCardBox key={data.startAt}>
          <S.cardData onClick={() => routineFinishPageRouter(data)} key={data?.startAt}>
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
