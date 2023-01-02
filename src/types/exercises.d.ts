export interface IExercises {
  byId: {
    [exercise: string]: IExerciseItem
  }
  allIds: string[]
}

export interface IFavorite {
  id: string
  favorite: boolean
}

export interface IExerciseItem {
  id: string
  typeId: string
  categoryId: string
  custom: boolean
  favorite: boolean
  mainTarget: string
  secondaryTarget: string
  record: string[]
}

export interface IExerciseId {
  id: string
}

export interface IExerciseIdAndRecordId {
  id: string
  recordId: string
}
