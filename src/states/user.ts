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

export interface UserState {
  user: IUserInfo
}

const INITIAL_STATE: UserState = {
  user: INIT_USER,
}

const systemSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    setUser: (state: UserState, action: PayloadAction<IUserInfo>) => {
      state.user = action.payload
    },
    resetUser: () => INITIAL_STATE,
  },
})

export const { setUser, resetUser } = systemSlice.actions

export default systemSlice.reducer

// Selector =====================

export const getTodoList = (state: RootState): UserState => state.user
