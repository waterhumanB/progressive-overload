import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { RootState } from '.'
import { SEARCH_DATA } from '../data/searchData'
import { getYoutubeSearchApi } from '../service/youtube'
import { ISearchYoutube } from '../types/youtube.d'

export const getYoubuteData = createAsyncThunk('youtube', async () => {
  const result = await Promise.all(SEARCH_DATA.map((search) => getYoutubeSearchApi({ q: search }))).then((res) => res)
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

const getYoutubeSlice = createSlice({
  name: 'youtube',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getYoubuteData.pending, (state: YoutubeState) => {
      state.error = 'peding'
      state.loading = true
    })
    builder.addCase(getYoubuteData.fulfilled, (state: YoutubeState, action) => {
      state.youtubeData = action.payload
      state.loading = false
      state.error = 'fuilfilled'
    })

    builder.addCase(getYoubuteData.rejected, (state: YoutubeState) => {
      state.error = 'rejdected'
      state.loading = false
    })
  },
})

export default getYoutubeSlice.reducer

export const getYoutubeDataList = (state: RootState) => state.youtube
