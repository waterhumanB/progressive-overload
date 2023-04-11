import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { RootState } from '.'
import { initialData } from '../data/initialData'

import { IExerciseId, IExerciseIdAndRecordId, IExerciseItem, IExercises, IFavorite } from '../types/exercises.d'

const INIT_EXERCISE = initialData.exercises

const INIT_LOCALSTORAGE_EXERCISE =
  localStorage.getItem('exercise') !== null ? JSON.parse(localStorage.getItem('exercise') as string) : INIT_EXERCISE

export interface ExerciseState {
  exercises: IExercises
}

const INITIAL_STATE: ExerciseState = {
  exercises: INIT_LOCALSTORAGE_EXERCISE,
}

const systemSlice = createSlice({
  name: 'exercise',
  initialState: INITIAL_STATE,
  reducers: {
    setFavoriteExercise: (state: ExerciseState, action: PayloadAction<IFavorite>) => {
      state.exercises.byId[action.payload.id].favorite = action.payload.favorite
      localStorage.setItem('exercise', JSON.stringify(state.exercises))
    },
    setCustomExercise: (state: ExerciseState, action: PayloadAction<IExerciseItem>) => {
      state.exercises.byId[action.payload.id] = action.payload
      state.exercises.allIds.push(action.payload.id)
      localStorage.setItem('exercise', JSON.stringify(state.exercises))
    },
    editCustomExercise: (state: ExerciseState, action: PayloadAction<IExerciseItem>) => {
      state.exercises.byId[action.payload.id] = action.payload
      localStorage.setItem('exercise', JSON.stringify(state.exercises))
    },
    deleteCustomExercise: (state: ExerciseState, action: PayloadAction<IExerciseId>) => {
      delete state.exercises.byId[action.payload.id]
      state.exercises.allIds = state.exercises.allIds.filter((data) => data !== action.payload.id)
      localStorage.setItem('exercise', JSON.stringify(state.exercises))
    },
    setRecordInExercise: (state: ExerciseState, action: PayloadAction<IExerciseIdAndRecordId>) => {
      state.exercises.byId[action.payload.id].record.push(action.payload.recordId)
      localStorage.setItem('exercise', JSON.stringify(state.exercises))
    },
    setMockExerciseData: (state: ExerciseState, action: PayloadAction<IExercises>) => {
      state.exercises = action.payload
      localStorage.setItem('exercise', JSON.stringify(action.payload))
    },
  },
})

export const {
  setFavoriteExercise,
  setCustomExercise,
  editCustomExercise,
  deleteCustomExercise,
  setRecordInExercise,
  setMockExerciseData,
} = systemSlice.actions

export default systemSlice.reducer

// Selector =====================

export const getExerciseData = (state: RootState): ExerciseState => state.exercises
