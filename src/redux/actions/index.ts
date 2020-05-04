import { SHOW_ITEMS, LOADING_FLAG, REQUEST_FRIDGE_ITEMS, RECEIVE_FRIDGE_ITEMS } from "../../constants/action-types";
import { IFridgeItem } from "../../constants/interfaces";
import FirebaseService from "../../services/firebase.service";

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

export const receiveFridgeItems = (fridgeItems: IFridgeItem[]) => ({
    type: RECEIVE_FRIDGE_ITEMS,
    fridgeItems
});

export const fetchFridgeItems = () => {
    return (dispatch: any) => {
        dispatch(requestFridgeItems());
        FirebaseService.getFridgeItems().then((data: any) => {
            dispatch(receiveFridgeItems(data.val()));
            console.log(data.val());
        });
    }
}