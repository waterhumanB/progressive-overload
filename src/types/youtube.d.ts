export interface ISearchYoutube {
  staus: string
  data: {
    etag: string
    item: IItems[]
    kind: string
    nextPageToken: string
    pageInfo: object
    regionCod: string
  }
  headrs: any
  request: any
  status: number
  statusText: string
}

interface IItems {
  etag: string
  id: object
  kind: string
  snippet: ISinppet[]
}

interface ISinppet {
  channelId: string
  channelTitle: string
  description: string
  thumnails: ITumnails
}

interface ITumnails {
  default: {
    height: number
    url: string
    width: number
  }
}

export type PromiseSettledResult<T> = PromiseFulfilledResult<T> | PromiseRejectedResult

interface PromiseFulfilledResult<T> {
  status: 'fulfilled'
  value: T
}

interface PromiseRejectedResult {
  status: 'rejected'
  reason: any
}
