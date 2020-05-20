import { SHOW_ITEMS, LOADING_FLAG, REQUEST_FRIDGE_ITEMS, RECEIVE_FRIDGE_ITEMS, ADD_VEGETABLE_ITEM_REQUEST, DONE_ADD_VEGETABLE_ITEM_REQUEST, RECEIVE_VEGE_ITEMS } from "../../constants/action-types";
import { IFridgeItem, IVegeItem } from "../../constants/interfaces";
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

export const addVegetableItemRequest = () => ({
    type: ADD_VEGETABLE_ITEM_REQUEST
});

export const doneAddVegetableItemRequest = (vegeItem?: IVegeItem) => ({
    type: DONE_ADD_VEGETABLE_ITEM_REQUEST,
    vegeItem
});

export const receiveVegeItems = (vegeItems: any) => ({
    type: RECEIVE_VEGE_ITEMS,
    vegeItems
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

export const fetchVegeItems = () => {
    return (dispatch: any) => {

    }
}

export const addVegeItem = (vegeItem: IVegeItem) => {
    return (dispatch: any) => {
        dispatch(addVegetableItemRequest());
        FirebaseService.addNewVegetableItem(vegeItem)
            .then(() => {
                dispatch(doneAddVegetableItemRequest(vegeItem));
            }, () => {
                dispatch(doneAddVegetableItemRequest());
                alert('ERROR');
            });
    }
}