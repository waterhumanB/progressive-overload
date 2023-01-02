import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { RootState } from '.'
import { initialData } from '../data/initialData'
import { IDeleteTypeId, IEditTypeItem, ITypes, ITypesItem } from '../types/type.d'

const INIT_TYPES = initialData.types

export interface TypesState {
  types: ITypes
}

const INITIAL_STATE: TypesState = {
  types: INIT_TYPES,
}

const systemSlice = createSlice({
  name: 'types',
  initialState: INITIAL_STATE,
  reducers: {
    setType: (state: TypesState, action: PayloadAction<ITypesItem>) => {
      state.types.byId = Object.assign(state.types.byId, action.payload)
      state.types.allIds.push(Object.keys(action.payload)[0])
    },
    editType: (state: TypesState, action: PayloadAction<IEditTypeItem>) => {
      state.types.byId[action.payload.typeId].name = action.payload.name
    },
    deleteType: (state: TypesState, action: PayloadAction<IDeleteTypeId>) => {
      delete state.types.byId[action.payload.typeId]
      state.types.allIds = state.types.allIds.filter((data) => data !== action.payload.typeId)
    },
  },
})

export const { setType, editType, deleteType } = systemSlice.actions

export default systemSlice.reducer

// Selector =====================

export const getTypesData = (state: RootState): TypesState => state.types
