import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { RootState } from '.'
import { initialData } from '../data/initialData'

import { IExercise } from '../types/exercise.d'

const INIT_EXERCISE = Object.values(initialData.exercise.byId)

export interface ExerciseState {
  exercise: IExercise[]
}

const INITIAL_STATE: ExerciseState = {
  exercise: INIT_EXERCISE,
}

const systemSlice = createSlice({
  name: 'exercise',
  initialState: INITIAL_STATE,
  reducers: {
    setUser: (state: ExerciseState, action: PayloadAction<IExercise[]>) => {
      state.exercise = action.payload
    },
    resetUser: () => INITIAL_STATE,
  },
})

export const { setUser, resetUser } = systemSlice.actions

export default systemSlice.reducer

// Selector =====================

export const getExerciseData = (state: RootState): ExerciseState => state.exercise
