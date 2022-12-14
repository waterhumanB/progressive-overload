import { initialData } from '../data/initialData'

export const findCategory = (value: string) => {
  const result = Object.entries(initialData.category.byId).filter((data) => data[0] === value)[0][1].name
  return result
}
export const findTarget = (value: string) => {
  const result = Object.entries(initialData.targets.byId).filter((data) => data[0] === value)[0][1].name
  return result
}
export const findType = (type: string) => {
  const result = Object.entries(initialData.types.byId).filter((data) => data[0] === type)[0][1].name
  return result
}
