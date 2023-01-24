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
