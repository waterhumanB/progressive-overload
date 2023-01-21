import { useState } from 'react'
import DountChart from '../../components/Chart/DountChart'
import Footer from '../../components/Footer'
import { BarChart } from '../../components/Summary'
import { useAppSelector } from '../../hooks/useAppSelector'
import { getRecordsData } from '../../states/records'

import * as S from './styles'

const ONE_YEAR_AVERAGE_EXERCISE_DAY = 188
const ONE_YEAR_AVERAGE_EXERCISE_HOUR = 187 // 일주일 3.5 한달 15.5
const ONE_YEAR_AVERAGE_EXERCISE_VOLUME = 250 // 일주일 4.8 한달 20

const VOLUME_RANGE = [25000, 20000, 15000, 10000, 5000]
const MINUTE_RANGE = [150, 120, 90, 60, 30]

const Summary = () => {
  const [volumeAndDurationSelect, setVolumeAndDurationSelect] = useState('volume')
  const [dayWeekMonthSelect, setDayWeekMonthSelect] = useState('days')
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

  const volumeSelectHandler = () => {
    setVolumeAndDurationSelect('volume')
  }
  const durationSelectMenuHandler = () => {
    setVolumeAndDurationSelect('duration')
  }

  const dayWeekMonthSelectHandler = () => {
    setDayWeekMonthSelect('days')
  }
  const weekSelectHandler = () => {
    setDayWeekMonthSelect('weeks')
  }
  const monthSelectHandler = () => {
    setDayWeekMonthSelect('months')
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
        <button onClick={dayWeekMonthSelectHandler} type='button'>
          일간
        </button>
        <button onClick={weekSelectHandler} type='button'>
          주간
        </button>
        <button onClick={monthSelectHandler} type='button'>
          월간
        </button>
      </div>
      <S.barChartContainer>
        {volumeAndDurationSelect === 'volume' ? (
          <S.yAxis>
            {VOLUME_RANGE.map((data) => (
              <div key={data}>
                {(dayWeekMonthSelect === 'days' && data) ||
                  (dayWeekMonthSelect === 'weeks' && data * 7) ||
                  (dayWeekMonthSelect === 'months' && data * 30)}
              </div>
            ))}
            <div>0</div>
          </S.yAxis>
        ) : (
          <S.yAxis>
            {MINUTE_RANGE.map((data) => (
              <div key={data}>
                {(dayWeekMonthSelect === 'days' && data) ||
                  (dayWeekMonthSelect === 'weeks' && data * 7) ||
                  (dayWeekMonthSelect === 'months' && data * 30)}
              </div>
            ))}
            <div>0</div>
          </S.yAxis>
        )}
        <BarChart
          dayWeekMonthSelect={dayWeekMonthSelect}
          volumeAndDurationSelect={volumeAndDurationSelect}
          totalWorkoutDays={totalWorkoutDays}
        />
      </S.barChartContainer>
      <div>
        <button onClick={volumeSelectHandler} type='button'>
          총 볼륨
        </button>
        <button onClick={durationSelectMenuHandler} type='button'>
          운동 시간
        </button>
      </div>
      <Footer />
    </section>
  )
}

export default Summary
