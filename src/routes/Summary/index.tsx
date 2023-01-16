import React from 'react'
import DountChart from '../../components/Chart/DountChart'
import Footer from '../../components/Footer'
import { useAppSelector } from '../../hooks/useAppSelector'
import { getRecordsData } from '../../states/records'
import { getRoutineData } from '../../states/routines'

import * as S from './styles'

const ONE_YEAR_AVERAGE_EXERCISE_DAY = 188
const ONE_YEAR_AVERAGE_EXERCISE_HOUR = 187
const ONE_YEAR_AVERAGE_EXERCISE_VOLUME = 250
const Summary = () => {
  const thisYear = new Date().getFullYear
  const routineSelector = useAppSelector(getRoutineData)
  const recordSelector = useAppSelector(getRecordsData)

  const totalTimeExercised = Object.values(recordSelector.records.byId)
    .map((data) => {
      const duratingHour =
        Number(data.endAt.split(' ')[4].split(':')[0]) - Number(data.startAt.split(' ')[4].split(':')[0])
      const duratingMinute =
        Number(data.endAt.split(' ')[4].split(':')[1]) - Number(data.startAt.split(' ')[4].split(':')[1])
      return duratingHour * 60 + duratingMinute
    })
    .reduce((acc, el) => acc + el)

  const execiseAllDates = Object.values(recordSelector.records.byId).map((data) => {
    const workoutDays = data.startAt.split(' ')[0] + data.startAt.split(' ')[1] + data.startAt.split(' ')[2]
    return workoutDays
  })

  const totalWorkoutDays = execiseAllDates.filter((data, idx) => execiseAllDates.indexOf(data) === idx).length
  const totalExercisedVolume = Object.values(recordSelector.records.byId)
    .map((data) => {
      return data.set.map((item) => item.kg * item.rab)
    })
    .flat(1)
    .reduce((acc, el) => acc + el)

  return (
    <section>
      <div>나의 운동 기록들</div>
      <S.chartConatiner>
        <DountChart
          percentage={ONE_YEAR_AVERAGE_EXERCISE_HOUR}
          percentageValue={totalTimeExercised}
          chartValueName='Min'
        />
        <DountChart
          percentage={ONE_YEAR_AVERAGE_EXERCISE_VOLUME}
          percentageValue={totalExercisedVolume}
          chartValueName='Kg'
        />
        <DountChart
          percentage={ONE_YEAR_AVERAGE_EXERCISE_DAY}
          percentageValue={totalWorkoutDays}
          chartValueName='Days'
        />
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
