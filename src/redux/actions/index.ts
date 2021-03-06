import { SHOW_ITEMS, LOADING_FLAG, REQUEST_FRIDGE_ITEMS, RECEIVE_FRIDGE_ITEMS, ADD_VEGETABLE_ITEM_REQUEST, DONE_ADD_VEGETABLE_ITEM_REQUEST, RECEIVE_VEGE_ITEMS } from "../../constants/action-types";
import { IFridgeItem, IVegeItem } from "../../constants/interfaces";
import FirebaseService from "../../services/firebase.service";
import { Fn } from "../../services/utils.service";

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
    fridgeItems: Fn.convertObjToArr(fridgeItems)
});

export const doneAddVegetableItemRequest = (vegeItem?: IVegeItem) => ({
    type: DONE_ADD_VEGETABLE_ITEM_REQUEST,
    vegeItem
});

export const receiveVegeItems = (vegeItems: any) => ({
    type: RECEIVE_VEGE_ITEMS,
    vegeItems: Fn.convertObjToArr(vegeItems)
});

export const fetchFridgeItems = () => {
    return (dispatch: any) => {
        dispatch(requestFridgeItems());
        FirebaseService.getFridgeItems().then((data: any) => {
            console.log(data.val());
            dispatch(receiveFridgeItems(data.val()));
        });
    }
}

export const addFridgeItem = (fridgeItem: IFridgeItem) => {
    const { dateAdded, dateExpired, vegetableName, vegetableId } = fridgeItem;

    return (dispatch: any) => {
        return new Promise((resolve, reject) => {
            return FirebaseService.addFridgeItem({ dateAdded, dateExpired, vegetableName, vegetableId })
                .then(() => {
                    return resolve()
                }, () => reject());
        })
    }
}

export const removeFridgeItem = (id: string) => {
    return (dispatch: any) => {
        dispatch(loading(true));
        return new Promise((resolve, reject) => {
            return FirebaseService.removeFridgeItem(id)
                .then(() => {
                    dispatch(loading(false));
                    dispatch(fetchFridgeItems());
                    return resolve();
                }, () => reject());
        });
    }
}

export const fetchVegeItems = () => {
    return (dispatch: any) => {
        return new Promise((resolve, reject) => {
            return FirebaseService.getVegeItems().then((data: any) => {
                dispatch(receiveVegeItems(data.val()));
                return resolve();
            }, () => reject());
        });
    }
}

export const addVegeItem = (vegeItem: IVegeItem) => {
    return (dispatch: any) => {
        return new Promise((resolve, reject) => {
            return FirebaseService.addNewVegetableItem(vegeItem)
                .then(() => {
                    dispatch(doneAddVegetableItemRequest(vegeItem));
                    return resolve();
                }, () => reject());
        });
    }
}