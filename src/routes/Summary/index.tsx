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
  const [toggleBarChartMenu, setToggleBarChartMenu] = useState(false)
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
    const workoutDays = `${data.startAt.split(' ')[0]} ${data.startAt.split(' ')[1]} ${data.startAt.split(' ')[2]} ${
      data.startAt.split(' ')[3]
    }`
    return workoutDays
  })

  const totalWorkoutDays = exerciseAllDates.filter((data, idx) => exerciseAllDates.indexOf(data) === idx)

  const totalExercisedVolume = Object.values(recordSelector.records.byId)
    .map((data) => {
      return data.set.map((item) => item.kg * item.rab)
    })
    .flat(1)
    .reduce((acc, el) => acc + el)

  const routineByDate = totalWorkoutDays.map((data) => {
    const sets = Object.values(recordSelector.records.byId)
      .map((item) => {
        return item.startAt.includes(data) ? item.set.map((set) => set.kg * set.rab) : []
      })
      .flat(1)
      .reduce((acc, el) => acc + el)

    const durtaions = Object.values(recordSelector.records.byId)
      .map((item) => {
        const durationHour =
          Number(item.endAt.split(' ')[4].split(':')[0]) - Number(item.startAt.split(' ')[4].split(':')[0])
        const durrationMinute =
          Number(item.endAt.split(' ')[4].split(':')[1]) - Number(item.startAt.split(' ')[4].split(':')[1])
        return item.startAt.includes(data) ? durationHour * 60 + durrationMinute : []
      })
      .flat(1)
      .reduce((acc, el) => acc + el)

    return { date: data, sets, durtaions }
  })

  console.log(routineByDate)
  const toggleBarChartMenuHandler = () => {
    setToggleBarChartMenu((prev) => !prev)
  }

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
          percentageValue={totalWorkoutDays.length}
          chartValueName='Days'
        />
      </S.dountChartContainer>
      <div>
        <button type='button'>일간</button>
        <button type='button'>주간</button>
        <button type='button'>월간</button>
      </div>
      <S.barChartContainer>
        {toggleBarChartMenu ? (
          <S.yAxis>
            <div>25000</div>
            <div>20000</div>
            <div>15000</div>
            <div>10000</div>
            <div>5000</div>
            <div>0</div>
          </S.yAxis>
        ) : (
          <S.yAxis>
            <div>150</div>
            <div>120</div>
            <div>90</div>
            <div>60</div>
            <div>30</div>
            <div>0</div>
          </S.yAxis>
        )}
        <svg viewBox='0 0 400 250'>
          {toggleBarChartMenu
            ? routineByDate.map((data, idx) => (
                <g key={data.date}>
                  <rect x={idx * 50 + 10} y={`${200 - 190}`} width='10' height='190' stroke='black' strokeWidth='3px' />
                  <text y='220' x={idx * 50}>
                    volume
                  </text>
                </g>
              ))
            : routineByDate.map((data, idx) => (
                <g key={data.date}>
                  <rect x={idx * 50 + 10} y={`${200 - 190}`} width='10' height='190' stroke='black' strokeWidth='3px' />
                  <text y='220' x={idx * 50}>
                    time
                  </text>
                </g>
              ))}
        </svg>
      </S.barChartContainer>
      <div>
        <button onClick={toggleBarChartMenuHandler} type='button'>
          총 볼륨
        </button>
        <button onClick={toggleBarChartMenuHandler} type='button'>
          운동 시간
        </button>
      </div>
      <Footer />
    </section>
  )
}

export default Summary
