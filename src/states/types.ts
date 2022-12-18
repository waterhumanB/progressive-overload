import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { RootState } from '.'
import { initialData } from '../data/initialData'
import { ITypes, ITypesItem } from '../types/type.d'

const INIT_EXERCISE = initialData.types

export interface TyesState {
  types: ITypes
}

const INITIAL_STATE: TyesState = {
  types: INIT_EXERCISE,
}

const systemSlice = createSlice({
  name: 'types',
  initialState: INITIAL_STATE,
  reducers: {
    setTypes: (state: TyesState, action: PayloadAction<ITypesItem>) => {
      console.log(action.payload)
    },
  },
})

export const { setTypes } = systemSlice.actions

export default systemSlice.reducer

// Selector =====================

export const getTypesData = (state: RootState): TyesState => state.types
