import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { RootState } from '.'
import { getYoutubeRecommendApi } from '../service/youtube'
import { ISearchYoutube } from '../types/youtube.d'

export const getYoutubeRecommendData = createAsyncThunk('youtubeRecommend', async (searchData: string[]) => {
  const result = await Promise.all(searchData.map((search) => getYoutubeRecommendApi({ q: search }))).then((res) => res)
  return result as unknown as ISearchYoutube[]
})

const INIT_YOUTUBE: ISearchYoutube[] = []

const INIT_LOCALSTORAGE_YOUTUBE =
  localStorage.getItem('youtubeRecommend') !== null
    ? JSON.parse(localStorage.getItem('youtubeRecommend') as string)
    : INIT_YOUTUBE

export interface YoutubeState {
  youtubeData: ISearchYoutube[]
  error: null | undefined | string | unknown
  loading: boolean
}

const INITIAL_STATE: YoutubeState = {
  youtubeData: INIT_LOCALSTORAGE_YOUTUBE,
  error: null,
  loading: false,
}

const getYoutubeRecommendSlice = createSlice({
  name: 'youtubeRecommend',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getYoutubeRecommendData.pending, (state: YoutubeState) => {
      state.error = 'pending'
      state.loading = true
    })
    builder.addCase(getYoutubeRecommendData.fulfilled, (state: YoutubeState, action) => {
      state.youtubeData = action.payload
      state.loading = false
      state.error = 'fulfilled'
      localStorage.setItem('youtubeRecommend', JSON.stringify(state.youtubeData))
    })

    builder.addCase(getYoutubeRecommendData.rejected, (state: YoutubeState) => {
      state.error = 'rejected'
      state.loading = false
    })
  },
})

export default getYoutubeRecommendSlice.reducer

export const getYoutubeRecommendDataList = (state: RootState) => state.youtubeRecommend
