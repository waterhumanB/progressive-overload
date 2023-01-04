import * as S from './styles'
import { MouseEvent, useRef, useState } from 'react'
import { IExerciseItem } from '../../../types/exercises.d'
import { useAppSelector } from '../../../hooks/useAppSelector'
import { getRecordsData } from '../../../states/records'

interface ICurrentExerciseDataProp {
  currentExerciseData: IExerciseItem
}

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const CurrentExerciseRecordCard = ({ currentExerciseData }: ICurrentExerciseDataProp) => {
  const [startPageX, setStartPageX] = useState(0)
  const [translateX, setTranslateX] = useState(0)
  const [isMouseEvent, setIsMoseEvent] = useState(false)
  const mouseRef = useRef<HTMLDivElement>(null)
  const recordSelector = useAppSelector(getRecordsData)
  const currentExerciseRecords = Object.values(recordSelector.records.byId).filter((data) =>
    currentExerciseData.record.includes(data.id)
  )
  const fetchedDate = (date: string) => {
    const year = date.split(' ')[3]
    const month = months.indexOf(date.split(' ')[1]) + 1
    const day = date.split(' ')[2]
    const fetchedMonth = month < 10 ? `0${month}` : month
    return `${year}.${fetchedMonth}.${day}`
  }
  const mouseDownHandler = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsMoseEvent(true)
    setStartPageX(e.pageX - translateX)
  }
  const mouseMoveHandler = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    const deltaX = e.pageX - startPageX
    if (isMouseEvent) {
      setTranslateX(deltaX)
    }
    if (-e.currentTarget.offsetWidth * 1.3 >= translateX || e.currentTarget.offsetWidth / 2 <= translateX) {
      setIsMoseEvent(false)
      setTranslateX(0)
    }
  }
  const mouseUpHandler = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsMoseEvent(false)
  }
  const mouseLeaveHandler = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsMoseEvent(false)
  }
  console.log('transX', translateX)
  return (
    <S.recordCardContainer ref={mouseRef}>
      <div className='title'>이전 기록</div>
      <S.recordCardbox
        onMouseDown={mouseDownHandler}
        onMouseMove={mouseMoveHandler}
        onMouseUp={mouseUpHandler}
        onMouseLeave={mouseLeaveHandler}
      >
        {currentExerciseRecords.map((data) => (
          <S.cardItem translateX={translateX} key={data.startAt}>
            <S.cardDate>{fetchedDate(data.startAt)}</S.cardDate>
            {data.set.map((item) => (
              <S.setItem key={item.order}>
                <div className='order'>
                  {item.order}
                  <span className='dash'> -</span>
                </div>
                <div>
                  {item.kg}
                  <span className='kgAndRab'>KG</span>
                  {item.rab}
                  <span className='kgAndRab'>회</span>
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
