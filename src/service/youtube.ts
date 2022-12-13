import axios from 'axios'
import { ISearchYoutube } from '../types/youtube.d'

interface Params {
  q: string
}

const URL = `https://www.googleapis.com/youtube/v3/search?`

export const getYoutubeSearchApi = async (params: Params) => {
  const { data } = await axios.get<ISearchYoutube[]>(URL, {
    params: {
      ...params,
      part: 'snippet',
      maxResults: 6,
      key: process.env.REACT_APP_YOUTUBE_API_KEY,
    },
  })
  return data
}
