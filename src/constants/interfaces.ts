export interface FridgeItem {
  id: string
  dateAdded: string,
  dateExpired: string,
  name: string,
}

export interface State {
  loadingFlag: boolean,
  fridgeItems: FridgeItem[]
}