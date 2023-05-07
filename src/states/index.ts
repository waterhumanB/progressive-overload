import { configureStore } from '@reduxjs/toolkit'

import user from './user'
import youtubeRecommend from './youtubeRecommend'
import exercises from './exercises'
import types from './types'
import routines from './routines'
import records from './records'
import youtubeExercise from './youtubeExercise'

export const store = configureStore({
  reducer: { user, youtubeRecommend, exercises, types, routines, records, youtubeExercise },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
