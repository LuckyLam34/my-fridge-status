export interface IFridgeItem {
  id?: string
  dateAdded: string,
  dateExpired: string,
  vegetableName: string,
  vegetableId: string
}

export interface IState {
  loadingFlagGlobal: boolean,
  fridgeItems: IFridgeItem[],
  vegeItems: []
}

export interface IVegeItem {
  key: string,
  value: string
}