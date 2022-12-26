export interface IRoutines {
  byId: IRoutineItem
  allIds: string[]
}

export interface IRoutineItem {
  [routine: string]: { id: string; title: sting; workout: string[]; recent: string[] }
}

export interface IDeleteRoutine {
  id: string
}
export interface IEditRoutine {
  id: string
  title: sting
  workout: string[]
  recent: string[]
}

export interface IDeleteExerciseInRoutine {
  workoutId: string
  id: string
}

export interface IChangeExerciseInRoutine {
  id: string
  workout: string[]
}
