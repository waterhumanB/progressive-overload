export interface IRoutines {
  byId: IRoutineData
  allIds: string[]
}

export interface IRoutineData {
  [routine: string]: IRoutineItem
}

export interface IRoutineItem {
  id: string
  title: sting
  workout: string[]
  recent: IRecentItem[]
}

export interface IRecentItem {
  startAt: string
  endAt: string
  recordIds: string[]
}

export interface IDeleteRoutine {
  id: string
}
export interface IEditRoutine {
  id: string
  title: sting
  workout: string[]
  recent: IRecentItem[]
}

export interface IDeleteExerciseInRoutine {
  exerciseId: string
  id: string
}

export interface IChangeWorkoutInRoutine {
  id: string
  workout: string[]
}

export interface IChangeExerciseInRoutine {
  id: string
  exerciseIdToChange: string
  exerciseIdSelected: string
}

export interface ISetStartAtTimeInRoutine {
  id: string
  startAt: string
}

export interface ISetEndAtTimeAndRecordsInRoutine {
  id: string
  endAt: string
  recordIds: string[]
}
