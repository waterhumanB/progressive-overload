export interface ISearchYoutube {
  etag: string
  kind: string
  nextPageToken: string
  pageInfo: object
  regionCod: string
  items: IItems[]
}

export interface IItems {
  etag: string
  id: {
    kind: string
    videoId: string
  }
  kind: string
  snippet: ISinppet
}

interface ISinppet {
  channelId: string
  channelTitle: string
  description: string
  thumbnails: ITumnails
}

interface ITumnails {
  medium: {
    height: number
    url: string
    width: number
  }
}
