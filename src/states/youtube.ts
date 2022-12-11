import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { RootState } from '.'
import { getYoutubeSearchApi } from '../service/youtube'

const getYoubuteData = createAsyncThunk('youtube', async (q: string) => {
  const result = await getYoutubeSearchApi({ q }).then((res) => res.data)
  return result
})

const INIT_USER = {}

export interface UserState {
  user: object
}

const INITIAL_STATE: UserState = {
  user: INIT_USER,
}

const getYoutubeSlice = createSlice({
  name: 'youtube',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getYoubuteData.fulfilled, (state, action) => {})
  },
})

export default getYoutubeSlice.reducer

export const getYoutubeDataList = (state: RootState) => state
