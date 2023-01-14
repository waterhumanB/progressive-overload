import React from 'react'
import Footer from '../../components/Footer'
import { useAppSelector } from '../../hooks/useAppSelector'
import { getRecordsData } from '../../states/records'
import { getRoutineData } from '../../states/routines'

import * as S from './styles'

const ONE_YEAR_AVERAGE_EXERCISE_DAY = 188
const ONE_YEAR_AVERAGE_EXERCISE_MINUTE = 18720
const ONE_YEAR_AVERAGE_EXERCISE_VOLUME = 2820000
const Summary = () => {
  const routineSelector = useAppSelector(getRoutineData)
  const recordSelector = useAppSelector(getRecordsData)
  console.log(recordSelector.records.allIds.length)
  console.log(
    Object.values(recordSelector.records.byId)
      .map((data) => {
        const duratingHour =
          Number(data.endAt.split(' ')[4].split(':')[0]) - Number(data.startAt.split(' ')[4].split(':')[0])
        const duratingMinute =
          Number(data.endAt.split(' ')[4].split(':')[1]) - Number(data.startAt.split(' ')[4].split(':')[1])
        return duratingHour * 60 + duratingMinute
      })
      .reduce((acc, el) => acc + el)
  )

  console.log(Object.values(recordSelector.records.byId).map((data) => data.endAt.split(' ')[4]))
  return (
    <section>
      <div>나의 운동 기록들</div>
      <S.chartConatiner>
        <S.chart>
          <S.aniSvg viewBox='0 0 200 200'>
            <S.backCircle cx='100' cy='100' r='90' />
            <S.animatedCircle
              cx='100'
              cy='100'
              r='90'
              strokeDasharray={`${2 * Math.PI * 90 * (1 - 60 / ONE_YEAR_AVERAGE_EXERCISE_DAY)} ${
                2 * Math.PI * 90 * (60 / ONE_YEAR_AVERAGE_EXERCISE_DAY)
              }`}
              strokeDashoffset={2 * Math.PI * 90 * 0.25}
            />
          </S.aniSvg>
          <S.timerCount>Kg</S.timerCount>
        </S.chart>
        <S.chart>
          <S.aniSvg viewBox='0 0 200 200'>
            <S.backCircle cx='100' cy='100' r='90' />
            <S.animatedCircle
              cx='100'
              cy='100'
              r='90'
              strokeDasharray={`${2 * Math.PI * 90 * (1 - 60 / ONE_YEAR_AVERAGE_EXERCISE_MINUTE)} ${
                2 * Math.PI * 90 * (60 / ONE_YEAR_AVERAGE_EXERCISE_MINUTE)
              }`}
              strokeDashoffset={2 * Math.PI * 90 * 0.25}
            />
          </S.aniSvg>
          <S.timerCount> min</S.timerCount>
        </S.chart>
        <S.chart>
          <S.aniSvg viewBox='0 0 200 200'>
            <S.backCircle cx='100' cy='100' r='90' />
            <S.animatedCircle
              cx='100'
              cy='100'
              r='90'
              strokeDasharray={`${2 * Math.PI * 90 * (1 - 6555 / ONE_YEAR_AVERAGE_EXERCISE_VOLUME)} ${
                2 * Math.PI * 90 * (60 / ONE_YEAR_AVERAGE_EXERCISE_VOLUME)
              }`}
              strokeDashoffset={2 * Math.PI * 90 * 0.25}
            />
          </S.aniSvg>
          <S.timerCount>days</S.timerCount>
        </S.chart>
      </S.chartConatiner>
      <div>
        <div>일간</div>
        <div>주간</div>
        <div>월간</div>
      </div>
      <div>그래프</div>
      <div>
        <div>총 볼륨</div>
        <div>운동 시간</div>
      </div>
      <Footer />
    </section>
  )
}

export default Summary
