import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { RootState } from '.'

import { IUserInfo } from '../types/user.d'

const INIT_USER = {
  nickName: '',
  age: 0,
  gender: '',
  tall: 0,
  weight: 0,
}

const INIT_LOCALSTORAGE_USER =
  localStorage.getItem('user') !== null ? JSON.parse(localStorage.getItem('user') as string) : INIT_USER

export interface UserState {
  user: IUserInfo
}

const INITIAL_STATE: UserState = {
  user: INIT_LOCALSTORAGE_USER,
}

const systemSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    setUser: (state: UserState, action: PayloadAction<IUserInfo>) => {
      state.user = action.payload
      localStorage.setItem('user', JSON.stringify(action.payload))
    },
  },
})

export const { setUser } = systemSlice.actions

export default systemSlice.reducer

// Selector =====================

export const getUserInfoData = (state: RootState): UserState => state.user
