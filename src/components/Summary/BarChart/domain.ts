interface IFetchedYearAndWeekData {
  year: number
  week: number
  volume: number
  duration: number
  month: string
}

interface IRoutineByDay {
  date: string
  volume: number
  duration: number
}

interface IRecordData {
  [records: string]: IRecordItem
}

interface IRecordItem {
  id: string
  exerciseId: string
  startAt: string
  endAt: string
  set: IRecordSet[]
}

interface IRecordSet {
  order: number
  kg: number
  rab: number
  finish: boolean
}

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

export const percentVolume = (date: string, value: number) => {
  let result = 0
  if (date === 'day') {
    const firstCalc = (value * 100) / 25000
    result = (250 * firstCalc) / 100
    return result
  }
  if (date === 'week') {
    const firstCalc = (value * 100) / 175000
    result = (250 * firstCalc) / 100
    return result
  }
  if (date === 'month') {
    const firstCalc = (value * 100) / 750000
    result = (250 * firstCalc) / 100
    return result
  }
  return result
}
export const percentDuration = (date: string, value: number) => {
  let result = 0
  if (date === 'day') {
    const firstCalc = (value * 100) / 150
    result = (250 * firstCalc) / 100
    return result
  }
  if (date === 'week') {
    const firstCalc = (value * 100) / 1000
    result = (250 * firstCalc) / 100
    return result
  }
  if (date === 'month') {
    const firstCalc = (value * 100) / 4500
    result = (250 * firstCalc) / 100
    return result
  }
  return result
}

export const routineDataByDate = (totalWorkoutDays: string[], recordSelector: IRecordData) => {
  const routineByDay = totalWorkoutDays
    .map((data) => {
      const volume = Object.values(recordSelector)
        .map((item) => {
          return item.startAt.includes(data)
            ? item.set.map((set) => set.kg * set.rab).reduce((acc, cur) => acc + cur)
            : 0
        })
        .reduce((acc, cur) => acc + cur)

      const duration = Object.values(recordSelector)
        .map((item) => {
          const durationHour =
            Number(item.endAt.split(' ')[4].split(':')[0]) - Number(item.startAt.split(' ')[4].split(':')[0])
          const durationMinute =
            Number(item.endAt.split(' ')[4].split(':')[1]) - Number(item.startAt.split(' ')[4].split(':')[1])
          return item.startAt.includes(data) ? durationHour * 60 + durationMinute : 0
        })
        .reduce((acc, cur) => acc + cur)

      return { date: data, volume, duration }
    })
    .reverse()

  const fetchedYearAndWeeksData = routineByDay.map((data) => {
    const { date, volume, duration } = data
    const currentDate = new Date(
      `${date.split(' ')[3]}-${MONTHS.indexOf(date.split(' ')[1]) + 1}-${date.split(' ')[2]}`
    )
    const firstDay = new Date(currentDate.setDate(1)).getDay()
    const week = Math.ceil((Number(date.split(' ')[2]) + firstDay) / 7)
    const month = date.split(' ')[1]
    return { year: Number(date.split(' ')[3]), week, month, volume, duration }
  })

  const routineByWeek = fetchedYearAndWeeksData.reduce((acc: IFetchedYearAndWeekData[], current) => {
    const targetIndex = acc.findIndex((data) => data.year === current.year && data.week === current.week)
    if (targetIndex >= 0) {
      acc[targetIndex].volume += current.volume
      acc[targetIndex].duration += current.duration
      return acc
    }
    return [...acc, current]
  }, [])

  const fetchedMonthAndYearData = routineByDay.reduce((acc: IRoutineByDay[], current) => {
    const targetIndex = acc.findIndex(
      (data) =>
        data.date.split(' ')[1] === current.date.split(' ')[1] && data.date.split(' ')[3] === current.date.split(' ')[3]
    )
    if (targetIndex >= 0) {
      return acc.map((data, i) => {
        if (i === targetIndex) {
          return {
            ...data,
            duration: data.duration + current.duration,
            volume: data.volume + current.volume,
          }
        }
        return data
      })
    }
    acc.push(current)
    return acc
  }, [])

  const routineByMonth = fetchedMonthAndYearData.map((data) => {
    const year = Number(data.date.split(' ')[3])
    const month = data.date.split(' ')[1]
    return { year, month, volume: data.volume, duration: data.duration }
  })

  return [routineByDay, routineByWeek, routineByMonth]
}
