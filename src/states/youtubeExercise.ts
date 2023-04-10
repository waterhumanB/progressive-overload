import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { RootState } from '.'
import { getYoutubeExerciseApi } from '../service/youtube'
import { ISearchYoutube } from '../types/youtube.d'

export const getYoutubeExerciseData = createAsyncThunk('youtubeExercise', async (searchData: string[]) => {
  const result = await Promise.all(searchData.map((search) => getYoutubeExerciseApi({ q: search }))).then((res) => res)
  return result as unknown as ISearchYoutube[]
})

const INIT_YOUTUBE: ISearchYoutube[] = []

const INIT_LOCALSTORAGE_YOUTUBE =
  localStorage.getItem('youtubeExercise') !== null
    ? JSON.parse(localStorage.getItem('youtubeExercise') as string)
    : INIT_YOUTUBE

export interface YoutubeState {
  youtubeData: ISearchYoutube[]
  error: null | null | string | unknown
  loading: boolean
}

const INITIAL_STATE: YoutubeState = {
  youtubeData: INIT_LOCALSTORAGE_YOUTUBE,
  error: null,
  loading: false,
}

const getYoutubeExerciseSlice = createSlice({
  name: 'youtubeExercise',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getYoutubeExerciseData.pending, (state: YoutubeState) => {
      state.error = 'pending'
      state.loading = true
    })
    builder.addCase(getYoutubeExerciseData.fulfilled, (state: YoutubeState, action) => {
      state.youtubeData = action.payload
      state.loading = false
      state.error = 'fulfilled'
      localStorage.setItem('youtubeExercise', JSON.stringify(state.youtubeData))
    })

    builder.addCase(getYoutubeExerciseData.rejected, (state: YoutubeState) => {
      state.error = 'rejected'
      state.loading = false
    })
  },
})

export default getYoutubeExerciseSlice.reducer

export const getYoutubeExerciseDataList = (state: RootState) => state.youtubeExercise
