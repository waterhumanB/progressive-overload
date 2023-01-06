import * as S from './styles'
import { MouseEvent, useState } from 'react'
import { IExerciseItem } from '../../../types/exercises.d'
import { useAppSelector } from '../../../hooks/useAppSelector'
import { getRecordsData } from '../../../states/records'
import { fetchedDate } from '../../../utils/fetchedDate'

interface ICurrentExerciseDataProp {
  currentExerciseData: IExerciseItem
}

const CurrentExerciseRecordCard = ({ currentExerciseData }: ICurrentExerciseDataProp) => {
  const [startPageX, setStartPageX] = useState(0)
  const [translateX, setTranslateX] = useState(0)
  const [isMouseEvent, setIsMoseEvent] = useState(false)
  const recordSelector = useAppSelector(getRecordsData)
  const currentExerciseRecords = Object.values(recordSelector.records.byId)
    .filter((data) => currentExerciseData.record.includes(data.id))
    .reverse()
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
    if (
      -e.currentTarget.children[0].clientWidth * (e.currentTarget.children.length - 1) >= translateX ||
      e.currentTarget.children[0].clientWidth / 2 <= translateX
    ) {
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
  return (
    <S.recordCardContainer>
      <div className='title'>이전 기록</div>
      <S.recordCardbox
        onMouseDown={mouseDownHandler}
        onMouseMove={mouseMoveHandler}
        onMouseUp={mouseUpHandler}
        onMouseLeave={mouseLeaveHandler}
      >
        {currentExerciseRecords.length !== 0 ? (
          currentExerciseRecords.map((data) => (
            <S.cardItem translateX={translateX} key={data.startAt}>
              <S.cardDate>{fetchedDate(data.startAt)}</S.cardDate>
              {data.set.map((item) => (
                <S.setItem key={item.order}>
                  <div className='orderBox'>
                    <div className='order'>{item.order}</div>
                    <div className='dash'>-</div>
                  </div>
                  <div className='record'>
                    <div className='item'>{item.kg}</div>
                    <div className='kgAndRab'>KG</div>
                    <div className='item'>{item.rab}</div>
                    <div className='kgAndRab'>회</div>
                  </div>
                </S.setItem>
              ))}
            </S.cardItem>
          ))
        ) : (
          <S.noRecord>현재 기록이 없습니다</S.noRecord>
        )}
      </S.recordCardbox>
    </S.recordCardContainer>
  )
}

export default CurrentExerciseRecordCard
