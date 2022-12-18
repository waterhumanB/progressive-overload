import { initialData } from '../data/initialData'
import { ITypesItem } from '../types/type.d'

export const findCategory = (value: string) => {
  const result = Object.entries(initialData.categories.byId).filter((data) => data[0] === value)[0][1].name
  return result
}
export const findTarget = (value: string) => {
  if (value === '') {
    return value
  }
  const result = Object.entries(initialData.targets.byId).filter((data) => data[0] === value)[0][1].name
  return result
}
export const findType = (typeState: ITypesItem, type: string) => {
  const result = Object.entries(typeState).filter((data) => data[0] === type)[0][1].name
  return result
}
