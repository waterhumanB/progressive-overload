import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { RootState } from '.'
import { IRoutines, IRoutineItem, IDeleteRoutine, IEditRoutine, IDeleteExerciseInRoutine } from '../types/routine.d'

const INIT_EXERCISE = {
  byId: {},
  allIds: [],
}

export interface RoutinesState {
  routines: IRoutines
}

const INITIAL_STATE: RoutinesState = {
  routines: INIT_EXERCISE,
}

const systemSlice = createSlice({
  name: 'routines',
  initialState: INITIAL_STATE,
  reducers: {
    setRoutine: (state: RoutinesState, action: PayloadAction<IRoutineItem>) => {
      state.routines.byId = Object.assign(state.routines.byId, action.payload)
      state.routines.allIds.push(Object.keys(action.payload)[0])
    },
    editRoutine: (state: RoutinesState, action: PayloadAction<IEditRoutine>) => {
      state.routines.byId[action.payload.id] = action.payload
    },
    deleteRoutine: (state: RoutinesState, action: PayloadAction<IDeleteRoutine>) => {
      delete state.routines.byId[action.payload.id]
      state.routines.allIds = state.routines.allIds.filter((data) => data !== action.payload.id)
    },
    deleteExerciseInRoutine: (state: RoutinesState, action: PayloadAction<IDeleteExerciseInRoutine>) => {
      const newRoutine = state.routines.byId[action.payload.id].workout.filter(
        (data) => data !== action.payload.workoutId
      )
      state.routines.byId[action.payload.id].workout = newRoutine
    },
  },
})

export const { setRoutine, editRoutine, deleteRoutine, deleteExerciseInRoutine } = systemSlice.actions

export default systemSlice.reducer

// Selector =====================

export const getRoutineData = (state: RootState): RoutinesState => state.routines
