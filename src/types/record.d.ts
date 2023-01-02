export interface IRecords {
  byId: IRecordItem
  allIds: string[]
}

export interface IRecordItem {
  [records: string]: {
    id: string
    exerciseId: sting
    startAt: string
    endAt: string
    set: IRecordSet[]
  }
}

export interface IRecordSet {
  order: number
  kg: number
  rab: number
  finish: boolean
}
