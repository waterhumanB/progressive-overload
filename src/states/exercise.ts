import { createSlice, PayloadAction, current } from '@reduxjs/toolkit'

import type { RootState } from '.'
import { initialData } from '../data/initialData'

import { IExercise, IFavorite } from '../types/exercise.d'

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
    setExercise: (state: ExerciseState, action: PayloadAction<IExercise[]>) => {
      state.exercise = action.payload
    },
    resetExercise: () => INITIAL_STATE,
    setFavoriteExercise: (state: ExerciseState, action: PayloadAction<IFavorite>) => {
      const exerciseIndex = current(state.exercise)
        .filter((data) => data.id === action.payload.id)[0]
        .id.split('exercise')[1]

      state.exercise[Number(exerciseIndex) - 1].favorite = action.payload.favorite
    },
  },
})

export const { setExercise, resetExercise, setFavoriteExercise } = systemSlice.actions

export default systemSlice.reducer

// Selector =====================

export const getExerciseData = (state: RootState): ExerciseState => state.exercise
