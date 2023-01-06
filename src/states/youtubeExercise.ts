import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { RootState } from '.'
import { getYoutubeExerciseApi } from '../service/youtube'
import { ISearchYoutube } from '../types/youtube.d'

export const getYoutubeExerciseData = createAsyncThunk('youtubeExercise', async (searchData: string[]) => {
  const result = await Promise.all(searchData.map((search) => getYoutubeExerciseApi({ q: search }))).then((res) => res)
  return result as unknown as ISearchYoutube[]
})

const INIT_YOUTUBE: ISearchYoutube[] = []

export interface YoutubeState {
  youtubeData: ISearchYoutube[]
  error: null | undefined | string | unknown
  loading: boolean
}

const INITIAL_STATE: YoutubeState = {
  youtubeData: INIT_YOUTUBE,
  error: null,
  loading: false,
}

const getYoutubeExerciseSlice = createSlice({
  name: 'youtubeExercise',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getYoutubeExerciseData.pending, (state: YoutubeState) => {
      state.error = 'peding'
      state.loading = true
    })
    builder.addCase(getYoutubeExerciseData.fulfilled, (state: YoutubeState, action) => {
      state.youtubeData = action.payload
      state.loading = false
      state.error = 'fuilfilled'
    })

    builder.addCase(getYoutubeExerciseData.rejected, (state: YoutubeState) => {
      state.error = 'rejdected'
      state.loading = false
    })
  },
})

export default getYoutubeExerciseSlice.reducer

export const getYoutubeExerciseDataList = (state: RootState) => state.youtubeExercise
