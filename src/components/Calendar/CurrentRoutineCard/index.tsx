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
  return (
    <S.currentRoutineCardContainer>
      {currentMonthsRoutineData.map((data: IRoutineItem) => {
        return data ? (
          <S.routineCardBox key={data?.title}>
            {data?.recent.map((item) => (
              <S.cardData onClick={() => routineFinishPageRouter(data, item)} key={item?.startAt}>
                <Report />
                <S.routineDataBox>
                  <S.routineTitle>{data?.title}</S.routineTitle>
                  <S.routineDate>{fetchedDate(item?.startAt)}</S.routineDate>
                </S.routineDataBox>
              </S.cardData>
            ))}
          </S.routineCardBox>
        ) : null
      })}
    </S.currentRoutineCardContainer>
  )
}

export default CurrentRoutineCard
