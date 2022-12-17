export interface IExercise {
  byId: {
    [exercise: string]: {
      id: string
      typeId: string
      categoryId: string
      custom: boolean
      favorite: boolean
      mainTarget: string
      secondaryTarget: string
      record: string[]
    }
  }
  allIds: string[]
}

export interface IFavorite {
  id: string
  favorite: boolean
}

export interface ICustomExecise {
  id: string
  typeId: string
  categoryId: string
  custom: boolean
  favorite: boolean
  mainTarget: string
  secondaryTarget: string
  record: string[]
}
