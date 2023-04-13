import { initialData } from '../data/initialData'
import { ITypesItem } from '../types/types.d'

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

export const findTargetValueInObject = (key: string, value: string, targetObject: any) => {
  if (key === '' || value === '') {
    return
  }

  const refinedObject = Object.entries(targetObject).filter((data) => data[0] === value)[0][1] as any

  // eslint-disable-next-line consistent-return
  return refinedObject[key]
}
