import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { RootState } from '.'
import { getYoutubeRecommendApi } from '../service/youtube'
import { ISearchYoutube } from '../types/youtube.d'

export const getYoutubeRecommendData = createAsyncThunk('youtubeRecommend', async (searchData: string[]) => {
  const result = await Promise.all(searchData.map((search) => getYoutubeRecommendApi({ q: search }))).then((res) => res)
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

const getYoutubRecommendSlice = createSlice({
  name: 'youtubeRecommend',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getYoutubeRecommendData.pending, (state: YoutubeState) => {
      state.error = 'peding'
      state.loading = true
    })
    builder.addCase(getYoutubeRecommendData.fulfilled, (state: YoutubeState, action) => {
      state.youtubeData = action.payload
      state.loading = false
      state.error = 'fuilfilled'
    })

    builder.addCase(getYoutubeRecommendData.rejected, (state: YoutubeState) => {
      state.error = 'rejdected'
      state.loading = false
    })
  },
})

export default getYoutubRecommendSlice.reducer

export const getYoutubeRecommendDataList = (state: RootState) => state.youtubeRecommend
