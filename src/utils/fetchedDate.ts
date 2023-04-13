const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

export const fetchedDate = (date: string) => {
  const [_, stringMonth, day, year, time] = date.split(' ')

  const month = months.indexOf(stringMonth) + 1

  const fetchedMonth = month ? `0${month}` : month

  return `${year}.${fetchedMonth}.${day} ${time}`
}
