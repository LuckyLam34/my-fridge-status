export interface IFridgeItem {
  id: string
  dateAdded: string,
  dateExpired: string,
  name: string,
}

export interface IState {
  loadingFlag: boolean,
  fridgeItems: IFridgeItem[]
}