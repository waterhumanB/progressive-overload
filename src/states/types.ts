import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { RootState } from '.'
import { initialData } from '../data/initialData'
import { IDeleteTypeId, IEditTypeItem, ITypes, ITypesItem } from '../types/types.d'

const INIT_TYPES = initialData.types

const INIT_LOCALSTORAGE_TYPES =
  localStorage.getItem('types') !== null ? JSON.parse(localStorage.getItem('types') as string) : INIT_TYPES

export interface TypesState {
  types: ITypes
}

const INITIAL_STATE: TypesState = {
  types: INIT_LOCALSTORAGE_TYPES,
}

const systemSlice = createSlice({
  name: 'types',
  initialState: INITIAL_STATE,
  reducers: {
    setType: (state: TypesState, action: PayloadAction<ITypesItem>) => {
      state.types.byId = Object.assign(state.types.byId, action.payload)
      state.types.allIds.push(Object.keys(action.payload)[0])
      localStorage.setItem('types', JSON.stringify(state.types))
    },
    editType: (state: TypesState, action: PayloadAction<IEditTypeItem>) => {
      state.types.byId[action.payload.typeId].name = action.payload.name
      localStorage.setItem('types', JSON.stringify(state.types))
    },
    deleteType: (state: TypesState, action: PayloadAction<IDeleteTypeId>) => {
      delete state.types.byId[action.payload.typeId]
      state.types.allIds = state.types.allIds.filter((data) => data !== action.payload.typeId)
      localStorage.setItem('types', JSON.stringify(state.types))
    },
  },
})

export const { setType, editType, deleteType } = systemSlice.actions

export default systemSlice.reducer

// Selector =====================

export const getTypesData = (state: RootState): TypesState => state.types
