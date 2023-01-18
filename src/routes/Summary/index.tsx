import { useState } from 'react'
import DountChart from '../../components/Chart/DountChart'
import Footer from '../../components/Footer'
import { useAppSelector } from '../../hooks/useAppSelector'
import { getRecordsData } from '../../states/records'
import { getRoutineData } from '../../states/routines'

import * as S from './styles'

const ONE_YEAR_AVERAGE_EXERCISE_DAY = 188
const ONE_YEAR_AVERAGE_EXERCISE_HOUR = 187 // 일주일 3.5 한달 15.5
const ONE_YEAR_AVERAGE_EXERCISE_VOLUME = 250 // 일주일 4.8 한달 20
const Summary = () => {
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

  const exerciseAllDates = Object.values(recordSelector.records.byId).map((data) => {
    const workoutDays = `${data.startAt.split(' ')[0]} ${data.startAt.split(' ')[1]} ${data.startAt.split(' ')[2]}`
    return workoutDays
  })

  const totalWorkoutDays = exerciseAllDates.filter((data, idx) => exerciseAllDates.indexOf(data) === idx).length

  const totalExercisedVolume = Object.values(recordSelector.records.byId)
    .map((data) => {
      return data.set.map((item) => item.kg * item.rab)
    })
    .flat(1)
    .reduce((acc, el) => acc + el)

  console.log(exerciseAllDates)
  console.log(Object.values(recordSelector.records.byId))
  return (
    <section>
      <div>나의 운동 기록들</div>
      <S.dountChartContainer>
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
      </S.dountChartContainer>
      <div>
        <button type='button'>일간</button>
        <button type='button'>주간</button>
        <button type='button'>월간</button>
      </div>
      <S.barChartContainer>
        <S.yAxis>
          <div>170</div>
          <div>130</div>
          <div>80</div>
          <div>40</div>
          <div>0</div>
        </S.yAxis>
        <svg viewBox='0 0 400 250'>
          <rect x='10' y={`${200 - 190}`} width='10' height='190' stroke='black' strokeWidth='3px' />
          <text x='0' y='240'>
            1/18
          </text>
          <text x='8' y='220'>
            수
          </text>
          <rect x='60' y={`${200 - 150}`} width='10' height='150' stroke='black' strokeWidth='3px' />
          <text x='52' y='220'>
            150
          </text>
          <rect x='110' y={`${200 - 110}`} width='10' height='110' stroke='black' strokeWidth='3px' />
          <rect x='160' y={`${200 - 80}`} width='10' height='80' stroke='black' strokeWidth='3px' />
          <rect x='210' y={`${200 - 50}`} width='10' height='50' stroke='black' strokeWidth='3px' />
          <rect x='260' y={`${200 - 90}`} width='10' height='90' stroke='black' strokeWidth='3px' />
          <rect x='310' y={`${200 - 150}`} width='10' height='150' stroke='black' strokeWidth='3px' />
          <rect x='360' y={`${200 - 70}`} width='10' height='70' stroke='black' strokeWidth='3px' />
          <rect x='410' y={`${200 - 50}`} width='10' height='50' stroke='black' strokeWidth='3px' />
          <rect x='460' y={`${200 - 140}`} width='10' height='140' stroke='black' strokeWidth='3px' />
          <rect x='510' y={`${200 - 120}`} width='10' height='120' stroke='black' strokeWidth='3px' />
        </svg>
      </S.barChartContainer>

      <div>
        <button type='button'>총 볼륨</button>
        <button type='button'>운동 시간</button>
      </div>
      <Footer />
    </section>
  )
}

export default Summary
