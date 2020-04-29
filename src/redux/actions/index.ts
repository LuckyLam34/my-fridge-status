import { SHOW_ITEMS, LOADING_FLAG, REQUEST_FRIDGE_ITEMS, RECEIVE_FRIDGE_ITEMS } from "../../constants/action-types";
import { FridgeItem } from "../../constants/interfaces";

export const showItems = () => ({
    type: SHOW_ITEMS
});

export const loading = (loading: boolean) => ({
    type: LOADING_FLAG,
    loading
});

export const requestFridgeItems = () => ({
    type: REQUEST_FRIDGE_ITEMS
});

export const receiveFridgeItems = (fridgeItems: FridgeItem[]) => ({
    type: RECEIVE_FRIDGE_ITEMS,
    fridgeItems
});

export function fetchFridgeItems() {

}