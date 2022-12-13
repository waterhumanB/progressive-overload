import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import user from './user'
import youtube from './youtube'
import exercise from './exercise'

const persistConfig = {
  key: 'root', // localStorage key
  storage, // localStorage
  whitelist: ['user', 'youtube', 'exercise'], // target (reducer name)
}
const rootReducer = combineReducers({
  user,
  youtube,
  exercise,
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
