import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { RootState } from '.'
import { IRecordItem, IRecords } from '../types/record.d'

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
  name: 'types',
  initialState: INITIAL_STATE,
  reducers: {
    setRecord: (state: RecordsState, action: PayloadAction<IRecordItem>) => {
      console.log(action)
    },
  },
})

export const { setRecord } = systemSlice.actions

export default systemSlice.reducer

// Selector =====================

export const getRecordsData = (state: RootState): RecordsState => state.records
