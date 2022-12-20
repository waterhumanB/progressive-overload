export interface IRoutines {
  byId: IRoutineItem
  allIds: string[]
}

export interface IRoutineItem {
  [routine: string]: { id: string; title: sting; workout: string[]; recent: string[] }
}

export interface IDeleteRoutine {
  id: string
  title: title
}
