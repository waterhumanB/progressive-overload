export interface IExercise {
  id: string
  typeId: string
  categoryId: string
  costom: boolean
  favorite: boolean
  mainTarget: string
  secondaryTarget: string
  record: Array
}

export interface IFavorite {
  id: string
  favorite: boolean
}
