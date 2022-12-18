export interface ITypes {
  byId: ITypesItem
  allIds: string[]
}

export interface ITypesItem {
  [type: string]: { name: string }
}
