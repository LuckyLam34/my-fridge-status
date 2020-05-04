import { SHOW_ITEMS, LOADING_FLAG, REQUEST_FRIDGE_ITEMS, RECEIVE_FRIDGE_ITEMS } from "../../constants/action-types";

const reducers = (state = {}, action: any) => {
    switch (action.type) {
        case SHOW_ITEMS:
            return { ...state, items: action.items };
        case LOADING_FLAG:
            return {
                ...state,
                loadingFlag: action.loading
            };
        case REQUEST_FRIDGE_ITEMS:
            return {
                ...state,
                loadingFlag: true
            };
        case RECEIVE_FRIDGE_ITEMS:
            return {
                ...state,
                fridgeItems: action.fridgeItems,
                loadingFlag: false
            }
        default:
            return state;
    }
}

export default reducers;