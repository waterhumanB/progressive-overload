export interface IRecords {
  byId: IRecordData
  allIds: string[]
}

export interface IRecordData {
  [records: string]: IRecordItem
}

export interface IRecordItem {
  id: string
  exerciseId: string
  startAt: string
  endAt: string
  set: IRecordSet[]
}

export interface IRecordSet {
  order: number
  kg: number
  rab: number
  finish: boolean
}
