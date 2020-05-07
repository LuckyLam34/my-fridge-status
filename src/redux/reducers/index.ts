import { SHOW_ITEMS, LOADING_FLAG, REQUEST_FRIDGE_ITEMS, RECEIVE_FRIDGE_ITEMS, ADD_VEGETABLE_ITEM_REQUEST, DONE_ADD_VEGETABLE_ITEM_REQUEST } from "../../constants/action-types";
import { IState } from "../../constants/interfaces";

const defaultState: IState = {
    loadingFlagGlobal: false,
    loadingFlagLocal: false,
    fridgeItems: [],
    vegeItems: {}
}

const reducers = (state = defaultState, action: any) => {
    switch (action.type) {
        case SHOW_ITEMS:
            return { ...state, items: action.items };
        case LOADING_FLAG:
            return {
                ...state,
                loadingFlagGlobal: action.loading
            };
        case REQUEST_FRIDGE_ITEMS:
            return {
                ...state,
                loadingFlagGlobal: true
            };
        case RECEIVE_FRIDGE_ITEMS:
            return {
                ...state,
                fridgeItems: action.fridgeItems,
                loadingFlagGlobal: false
            }
        case ADD_VEGETABLE_ITEM_REQUEST:
            return {
                ...state,
                loadingFlagLocal: true
            }
        case DONE_ADD_VEGETABLE_ITEM_REQUEST:
            const { vegeItem } = action;
            return {
                ...state,
                loadingFlagLocal: false,
                vegeItems: {
                    ...state.vegeItems,
                    [vegeItem.key]: vegeItem.value
                }
            }
        default:
            return state;
    }
}

export default reducers;