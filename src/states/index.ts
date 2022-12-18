import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import user from './user'
import youtube from './youtube'
import exercises from './exercise'
import types from './types'

const persistConfig = {
  key: 'root', // localStorage key
  storage, // localStorage
  whitelist: ['user', 'youtube', 'exercises', 'types'], // target (reducer name)
}
const rootReducer = combineReducers({
  user,
  youtube,
  exercises,
  types,
})
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const persistor = persistStore(store)
