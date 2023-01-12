const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

export const fetchedDate = (date: string) => {
  const year = date.split(' ')[3]
  const month = months.indexOf(date.split(' ')[1]) + 1
  const day = date.split(' ')[2]
  const time = date.split(' ')[4]
  const fetchedMonth = month < 10 ? `0${month}` : month
  return `${year}.${fetchedMonth}.${day} ${time}`
}
