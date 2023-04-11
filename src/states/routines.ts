import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { RootState } from '.'
import {
  IRoutines,
  IDeleteRoutine,
  IEditRoutine,
  IDeleteExerciseInRoutine,
  IChangeWorkoutInRoutine,
  IChangeExerciseInRoutine,
  ISetStartAtTimeInRoutine,
  ISetEndAtTimeAndRecordsInRoutine,
  IRoutineData,
  IRecentItem,
} from '../types/routines.d'

const INIT_ROUTINES = {
  byId: {},
  allIds: [],
}

const INIT_LOCALSTORAGE_ROUTINES =
  localStorage.getItem('routines') !== null ? JSON.parse(localStorage.getItem('routines') as string) : INIT_ROUTINES

export interface RoutinesState {
  routines: IRoutines
}

const INITIAL_STATE: RoutinesState = {
  routines: INIT_LOCALSTORAGE_ROUTINES,
}

const systemSlice = createSlice({
  name: 'routines',
  initialState: INITIAL_STATE,
  reducers: {
    setRoutine: (state: RoutinesState, action: PayloadAction<IRoutineData>) => {
      state.routines.byId = Object.assign(state.routines.byId, action.payload)
      state.routines.allIds.push(Object.keys(action.payload)[0])
      localStorage.setItem('routines', JSON.stringify(state.routines))
    },
    editRoutine: (state: RoutinesState, action: PayloadAction<IEditRoutine>) => {
      state.routines.byId[action.payload.id] = action.payload
      localStorage.setItem('routines', JSON.stringify(state.routines))
    },
    deleteRoutine: (state: RoutinesState, action: PayloadAction<IDeleteRoutine>) => {
      delete state.routines.byId[action.payload.id]
      state.routines.allIds = state.routines.allIds.filter((data) => data !== action.payload.id)
      localStorage.setItem('routines', JSON.stringify(state.routines))
    },
    deleteExerciseInRoutine: (state: RoutinesState, action: PayloadAction<IDeleteExerciseInRoutine>) => {
      const newRoutine = state.routines.byId[action.payload.id].workout.filter(
        (data) => data !== action.payload.exerciseId
      )
      state.routines.byId[action.payload.id].workout = newRoutine
      localStorage.setItem('routines', JSON.stringify(state.routines))
    },
    changeWorkoutInRoutine: (state: RoutinesState, action: PayloadAction<IChangeWorkoutInRoutine>) => {
      state.routines.byId[action.payload.id].workout = action.payload.workout
      localStorage.setItem('routines', JSON.stringify(state.routines))
    },
    changeExerciseInRoutine: (state: RoutinesState, action: PayloadAction<IChangeExerciseInRoutine>) => {
      state.routines.byId[action.payload.id].workout.splice(
        state.routines.byId[action.payload.id].workout.indexOf(action.payload.exerciseIdToChange),
        1,
        action.payload.exerciseIdSelected
      )
      localStorage.setItem('routines', JSON.stringify(state.routines))
    },
    setStartAtTimeInRoutine: (state: RoutinesState, action: PayloadAction<ISetStartAtTimeInRoutine>) => {
      const recent: IRecentItem = {
        startAt: action.payload.startAt,
        endAt: '',
        recordIds: [],
      }
      state.routines.byId[action.payload.id].recent.push(recent)
      localStorage.setItem('routines', JSON.stringify(state.routines))
    },
    setEndAtTimeAndRecordsInRoutine: (
      state: RoutinesState,
      action: PayloadAction<ISetEndAtTimeAndRecordsInRoutine>
    ) => {
      const currentRoutineOrder = state.routines.byId[action.payload.id].recent.length - 1
      state.routines.byId[action.payload.id].recent[currentRoutineOrder].endAt = action.payload.endAt
      state.routines.byId[action.payload.id].recent[currentRoutineOrder].recordIds = action.payload.recordIds
      localStorage.setItem('routines', JSON.stringify(state.routines))
    },
    setMockRoutineData: (state: RoutinesState, action: PayloadAction<IRoutines>) => {
      state.routines = action.payload
      localStorage.setItem('routines', JSON.stringify(action.payload))
    },
  },
})

export const {
  setRoutine,
  editRoutine,
  deleteRoutine,
  deleteExerciseInRoutine,
  changeWorkoutInRoutine,
  changeExerciseInRoutine,
  setStartAtTimeInRoutine,
  setEndAtTimeAndRecordsInRoutine,
  setMockRoutineData,
} = systemSlice.actions

export default systemSlice.reducer

// Selector =====================

export const getRoutineData = (state: RootState): RoutinesState => state.routines
