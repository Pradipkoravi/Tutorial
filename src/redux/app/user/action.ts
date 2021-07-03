

import * as actionTypes from '../../types';

export const SET_USER_NAME = 'SET_USER_NAME';
export const RESET_USER_NAME = 'RESET_USER_NAME';

export interface setUserNameRequestAction {
    type: typeof SET_USER_NAME;
    payload: actionTypes.LoginInputProps;
}

export interface resetUserNameRequestAction {
    type: typeof RESET_USER_NAME;
    payload: actionTypes.LoginInputProps;
}

export const loginUserRequest = (
    payload: actionTypes.LoginInputProps,
): setUserNameRequestAction => {
    return {
        type: SET_USER_NAME,
        payload,
    };
};

export const logoutUserRequest = (
    payload: actionTypes.LoginInputProps,
): resetUserNameRequestAction => {
    return {
        type: RESET_USER_NAME,
        payload
    };
};


export type ActionTypes = setUserNameRequestAction | resetUserNameRequestAction;