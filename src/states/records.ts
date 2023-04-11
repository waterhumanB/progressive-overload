import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { RootState } from '.'
import { IRecordItem, IRecords } from '../types/records.d'

const INIT_RECORDS = {
  byId: {},
  allIds: [],
}

const INIT_LOCALSTORAGE_RECORDS =
  localStorage.getItem('records') !== null ? JSON.parse(localStorage.getItem('records') as string) : INIT_RECORDS
export interface RecordsState {
  records: IRecords
}

const INITIAL_STATE: RecordsState = {
  records: INIT_LOCALSTORAGE_RECORDS,
}

const systemSlice = createSlice({
  name: 'records',
  initialState: INITIAL_STATE,
  reducers: {
    setRecord: (state: RecordsState, action: PayloadAction<IRecordItem>) => {
      const recordData = {
        [action.payload.id]: {
          ...action.payload,
        },
      }
      state.records.byId = Object.assign(state.records.byId, recordData)
      state.records.allIds.push(action.payload.id)
      localStorage.setItem('records', JSON.stringify(state.records))
    },
    setMockRecordData: (state: RecordsState, action: PayloadAction<IRecords>) => {
      state.records = action.payload
      localStorage.setItem('records', JSON.stringify(action.payload))
    },
  },
})

export const { setRecord, setMockRecordData } = systemSlice.actions

export default systemSlice.reducer

// Selector =====================

export const getRecordsData = (state: RootState): RecordsState => state.records
