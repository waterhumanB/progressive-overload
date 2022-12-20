import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { RootState } from '.'
import { IRoutines, IRoutineItem } from '../types/routine.d'

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
    },
  },
})

export const { setRoutine } = systemSlice.actions

export default systemSlice.reducer

// Selector =====================

export const getRoutineData = (state: RootState): RoutinesState => state.routines
