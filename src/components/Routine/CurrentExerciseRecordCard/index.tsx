import * as S from './styles'
import { IExerciseItem } from '../../../types/exercises.d'
import { useAppSelector } from '../../../hooks/useAppSelector'
import { getRecordsData } from '../../../states/records'

interface ICurrentExerciseDataProp {
  currentExerciseData: IExerciseItem
}

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const CurrentExerciseRecordCard = ({ currentExerciseData }: ICurrentExerciseDataProp) => {
  const recordSelector = useAppSelector(getRecordsData)
  const currentExerciseRecords = Object.values(recordSelector.records.byId).filter((data) =>
    currentExerciseData.record.includes(data.id)
  )
  const fetchedDay = (date: string) => {
    const year = date.split(' ')[3]
    const month = months.indexOf(date.split(' ')[1]) + 1
    const day = date.split(' ')[2]
    const fetchedMonth = month < 10 ? `0${month}` : month
    return `${year}-${fetchedMonth}-${day}`
  }
  return (
    <S.recordCardContainer>
      <div>이전기록</div>
      <S.recordCardbox>
        {currentExerciseRecords.map((data) => (
          <S.cardItem key={data.startAt}>
            <div>{fetchedDay(data.startAt)}</div>
            {data.set.map((item) => (
              <S.setItem key={item.order}>
                <div>{item.order}-</div>
                <div>
                  {item.kg}: kg {item.rab}: rab
                </div>
              </S.setItem>
            ))}
          </S.cardItem>
        ))}
      </S.recordCardbox>
    </S.recordCardContainer>
  )
}

export default CurrentExerciseRecordCard
