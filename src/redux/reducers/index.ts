import { SHOW_ITEMS } from "../../constants/action-types";

const reducers = (state = {}, action: any) => {
    switch (action.type) {
        case SHOW_ITEMS:
            return { ...state, items: action.items };
        default:
            return state;
    }
}

export default reducers;