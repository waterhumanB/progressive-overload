import { ICalendarCardProps } from '../../../types/allProps.d'
import { IRoutineItem } from '../../../types/routines.d'
import { fetchedDate } from '../../../utils/fetchedDate'

import { ReactComponent as Report } from '../../../assets/imgs/report.svg'
import * as S from './styles'

const CurrentRoutineCard = ({ currentMonthsRoutineData }: ICalendarCardProps) => {
  return (
    <S.currentRoutineCardContainer>
      {currentMonthsRoutineData.map((data: IRoutineItem) => {
        return data ? (
          <S.routineCardBox key={data?.title}>
            {data?.recent.map((item) => (
              <S.cardData key={item?.startAt}>
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
