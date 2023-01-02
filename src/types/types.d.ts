export interface ITypes {
  byId: ITypesItem
  allIds: string[]
}

export interface ITypesItem {
  [type: string]: { name: string }
}

export interface IEditTypeItem {
  name: string
  typeId: string
}

export interface IDeleteTypeId {
  typeId: string
}
