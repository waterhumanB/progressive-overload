import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { RootState } from '.'
import { initialData } from '../data/initialData'

import { IExerciseItem, IExercises, IFavorite } from '../types/exercises.d'

const INIT_EXERCISE = initialData.exercises

export interface ExerciseState {
  exercises: IExercises
}

const INITIAL_STATE: ExerciseState = {
  exercises: INIT_EXERCISE,
}

const systemSlice = createSlice({
  name: 'exercise',
  initialState: INITIAL_STATE,
  reducers: {
    setFavoriteExercise: (state: ExerciseState, action: PayloadAction<IFavorite>) => {
      state.exercises.byId[action.payload.id].favorite = action.payload.favorite
    },
    setCustomExercise: (state: ExerciseState, action: PayloadAction<IExerciseItem>) => {
      state.exercises.byId[action.payload.id] = action.payload
      state.exercises.allIds.push(action.payload.id)
    },
  },
})

export const { setFavoriteExercise, setCustomExercise } = systemSlice.actions

export default systemSlice.reducer

// Selector =====================

export const getExerciseData = (state: RootState): ExerciseState => state.exercises
