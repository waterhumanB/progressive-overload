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
  const [isMouseEvent, setIsMouseEvent] = useState(false)
  const recordSelector = useAppSelector(getRecordsData)
  const currentExerciseRecords = Object.values(recordSelector.records.byId)
    .filter((data) => currentExerciseData.record.includes(data.id))
    .reverse()

  const mouseDownHandler = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsMouseEvent(true)
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
      setIsMouseEvent(false)
      setTranslateX(0)
    }
  }

  const mouseUpHandler = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsMouseEvent(false)
  }

  const mouseLeaveHandler = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsMouseEvent(false)
  }
  return (
    <S.recordCardContainer>
      <S.recordCardTitle>이전 기록</S.recordCardTitle>
      <S.recordCardBox
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
                  <S.orderBox>
                    <S.order>{item.order}</S.order>
                    <S.dash>-</S.dash>
                  </S.orderBox>
                  <S.record>
                    <S.item>{item.kg}</S.item>
                    <S.kgAndRab>KG</S.kgAndRab>
                    <S.item>{item.rab}</S.item>
                    <S.kgAndRab>회</S.kgAndRab>
                  </S.record>
                </S.setItem>
              ))}
            </S.cardItem>
          ))
        ) : (
          <S.noRecord>현재 기록이 없습니다</S.noRecord>
        )}
      </S.recordCardBox>
    </S.recordCardContainer>
  )
}

export default CurrentExerciseRecordCard
