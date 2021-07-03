
import { ActionTypes, SET_USER_NAME, RESET_USER_NAME } from './action';

const initialState = {
    username: ''
};

const userReducer = (state: any = initialState, action: ActionTypes) => {
    const { type, payload } = action;
    switch (type) {
        case SET_USER_NAME:
            return {
                ...state,
                username: payload,
            };
        case RESET_USER_NAME:
            return {
                ...state,
                username: payload,
            };
        default:
            return state;
    }
};
export default userReducer;