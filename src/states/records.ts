import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { RootState } from '.'
import { IRecordItem, IRecords } from '../types/records.d'

const INIT_RECORDS = {
  byId: {},
  allIds: [],
}
export interface RecordsState {
  records: IRecords
}

const INITIAL_STATE: RecordsState = {
  records: INIT_RECORDS,
}

const systemSlice = createSlice({
  name: 'records',
  initialState: INITIAL_STATE,
  reducers: {
    setRecord: (state: RecordsState, action: PayloadAction<IRecordItem>) => {
      const recordId = `record${state.records.allIds.length + 1}`
      const recordData = {
        [recordId]: {
          ...action.payload,
          id: recordId,
        },
      }
      state.records.byId = Object.assign(state.records.byId, recordData)
      state.records.allIds.push(recordId)
    },
  },
})

export const { setRecord } = systemSlice.actions

export default systemSlice.reducer

// Selector =====================

export const getRecordsData = (state: RootState): RecordsState => state.records
