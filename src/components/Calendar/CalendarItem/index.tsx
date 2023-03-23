import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../../hooks/useAppSelector'
import { getRecordsData } from '../../../states/records'
import { ICalendarItem, ICalendarItemProps } from '../../../types/allProps.d'
import { IRecentItem, IRoutineItem } from '../../../types/routines.d'
import * as S from './styles'

const CalendarItem = ({ fetchedWeeks, dataSelector }: ICalendarItemProps) => {
  const navigate = useNavigate()
  const recordSelector = useAppSelector(getRecordsData)

  const todayTotalVolume = (routine: IRoutineItem[]) => {
    const todayRoutineRecordIds =
      routine !== undefined
        ? routine?.map((data: IRoutineItem) => data?.recent?.map((item: IRecentItem) => item?.recordIds)).flat(2)
        : ''
    const todayRoutineSets = Object.values(recordSelector.records.byId)
      .filter((data) => todayRoutineRecordIds.includes(data.id))
      .map((item) => item.set)
      .flat(2)
    return todayRoutineSets.length !== 0
      ? todayRoutineSets.map((data) => data.kg * data.rab).reduce((acc, el) => acc + el)
      : 0
  }

  const todayDuration = (routine: IRoutineItem[]) => {
    const todayRoutineTime = routine.map((data: IRoutineItem) =>
      data?.recent !== undefined
        ? data?.recent
            .map((item: IRecentItem) => {
              const startTime = item.startAt.split(' ')[4].split(':')
              const endTime = item?.endAt?.split(' ')[4].split(':')
              const hour = (Number(endTime[0]) - Number(startTime[0])) * 60
              const minute = Number(endTime[1]) - Number(startTime[1])
              return hour + minute
            })
            .reduce((acc, el) => acc + el)
        : 0
    )
    return todayRoutineTime.reduce((acc, el) => acc + el, 0)
  }

  const currentDateRoutineFinishPageMoveHandler = useCallback((routine: IRoutineItem[], routineResult: number) => {
    if (routineResult !== 0) {
      const currentRoutineData = routine
        .filter((data: IRoutineItem) => data.recent)
        .filter((item) => item !== undefined)
      navigate('/calendar/routine-result', { state: currentRoutineData })
    }
  }, [])

  return (
    <S.calendarTbody>
      <tr>
        {fetchedWeeks(1).map((data: ICalendarItem, i: number) => (
          <S.todayRoutine
            dataSelector={dataSelector}
            dataValue={dataSelector ? todayTotalVolume(data?.routine) : todayDuration(data?.routine)}
            key={data?.day}
          >
            <button type='button'>
              <S.currentMonthdate
                currentMonthOfDate={data?.currentMonthOfDate}
                onClick={() =>
                  currentDateRoutineFinishPageMoveHandler(
                    data.routine,
                    todayDuration(data?.routine) + todayTotalVolume(data?.routine)
                  )
                }
                className={(i === 0 ? 'sun' : '') || (i === 6 ? 'sat' : '')}
              >
                {data?.day}
              </S.currentMonthdate>
            </button>
          </S.todayRoutine>
        ))}
      </tr>
      <tr>
        {fetchedWeeks(2).map((data: ICalendarItem, i: number) => (
          <S.todayRoutine
            dataSelector={dataSelector}
            dataValue={dataSelector ? todayTotalVolume(data?.routine) : todayDuration(data?.routine)}
            key={data?.day}
          >
            <button type='button'>
              <S.currentMonthdate
                currentMonthOfDate={data?.currentMonthOfDate}
                onClick={() =>
                  currentDateRoutineFinishPageMoveHandler(
                    data.routine,
                    todayDuration(data?.routine) + todayTotalVolume(data?.routine)
                  )
                }
                className={(i === 0 ? 'sun' : '') || (i === 6 ? 'sat' : '')}
              >
                {data?.day}
              </S.currentMonthdate>
            </button>
          </S.todayRoutine>
        ))}
      </tr>
      <tr>
        {fetchedWeeks(3).map((data: ICalendarItem, i: number) => (
          <S.todayRoutine
            dataSelector={dataSelector}
            dataValue={dataSelector ? todayTotalVolume(data?.routine) : todayDuration(data?.routine)}
            key={data?.day}
          >
            <button type='button'>
              <S.currentMonthdate
                currentMonthOfDate={data?.currentMonthOfDate}
                onClick={() =>
                  currentDateRoutineFinishPageMoveHandler(
                    data.routine,
                    todayDuration(data?.routine) + todayTotalVolume(data?.routine)
                  )
                }
                className={(i === 0 ? 'sun' : '') || (i === 6 ? 'sat' : '')}
              >
                {data?.day}
              </S.currentMonthdate>
            </button>
          </S.todayRoutine>
        ))}
      </tr>
      <tr>
        {fetchedWeeks(4).map((data: ICalendarItem, i: number) => (
          <S.todayRoutine
            dataSelector={dataSelector}
            dataValue={dataSelector ? todayTotalVolume(data?.routine) : todayDuration(data?.routine)}
            onClick={() =>
              currentDateRoutineFinishPageMoveHandler(
                data.routine,
                todayDuration(data?.routine) + todayTotalVolume(data?.routine)
              )
            }
            key={data?.day}
          >
            <button type='button'>
              <S.currentMonthdate
                currentMonthOfDate={data?.currentMonthOfDate}
                className={(i === 0 ? 'sun' : '') || (i === 6 ? 'sat' : '')}
              >
                {data?.day}
              </S.currentMonthdate>
            </button>
          </S.todayRoutine>
        ))}
      </tr>
      <tr>
        {fetchedWeeks(5).map((data: ICalendarItem, i: number) => (
          <S.todayRoutine
            dataSelector={dataSelector}
            dataValue={dataSelector ? todayTotalVolume(data?.routine) : todayDuration(data?.routine)}
            onClick={() =>
              currentDateRoutineFinishPageMoveHandler(
                data.routine,
                todayDuration(data?.routine) + todayTotalVolume(data?.routine)
              )
            }
            key={data?.day}
          >
            <button type='button'>
              <S.currentMonthdate
                currentMonthOfDate={data?.currentMonthOfDate}
                className={(i === 0 ? 'sun' : '') || (i === 6 ? 'sat' : '')}
              >
                {data?.day}
              </S.currentMonthdate>
            </button>
          </S.todayRoutine>
        ))}
      </tr>
      <tr>
        {fetchedWeeks(6).map((data: ICalendarItem, i: number) => (
          <S.todayRoutine
            dataSelector={dataSelector}
            dataValue={dataSelector ? todayTotalVolume(data?.routine) : todayDuration(data?.routine)}
            onClick={() =>
              currentDateRoutineFinishPageMoveHandler(
                data.routine,
                todayDuration(data?.routine) + todayTotalVolume(data?.routine)
              )
            }
            key={data?.day}
          >
            <button type='button'>
              <S.currentMonthdate
                currentMonthOfDate={data?.currentMonthOfDate}
                className={(i === 0 ? 'sun' : '') || (i === 6 ? 'sat' : '')}
              >
                {data?.day}
              </S.currentMonthdate>
            </button>
          </S.todayRoutine>
        ))}
      </tr>
    </S.calendarTbody>
  )
}

export default CalendarItem
