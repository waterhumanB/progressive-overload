import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { RootState } from '.'
import { initialData } from '../data/initialData'

import { ICustomExecise, IExercise, IFavorite } from '../types/exercise.d'

const INIT_EXERCISE = initialData.exercise

export interface ExerciseState {
  exercise: IExercise
}

const INITIAL_STATE: ExerciseState = {
  exercise: INIT_EXERCISE,
}

const systemSlice = createSlice({
  name: 'exercise',
  initialState: INITIAL_STATE,
  reducers: {
    setFavoriteExercise: (state: ExerciseState, action: PayloadAction<IFavorite>) => {
      state.exercise.byId[action.payload.id].favorite = action.payload.favorite
    },
    setCustomExercise: (state: ExerciseState, action: PayloadAction<ICustomExecise>) => {},
  },
})

export const { setFavoriteExercise, setCustomExercise } = systemSlice.actions

export default systemSlice.reducer

// Selector =====================

export const getExerciseData = (state: RootState): ExerciseState => state.exercise
