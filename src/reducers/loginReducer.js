import {loginActionType} from '../actions/actionTypes';

const initialState = {
    message: '',
};

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case loginActionType.LOGIN_SUBMIT:
            return {
                type: loginActionType.LOGIN_SUBMIT,
            }
        case loginActionType.LOGIN_SUCCESS: // login succecss
            return {
                type: loginActionType.LOGIN_SUCCESS,
                status: action.status,
                data: action.data
            };
        case loginActionType.LOGIN_FAILED: // login failed
            return {
                type: loginActionType.LOGIN_FAILED,
                status: action.status,
                message: action.message,
            };
        case loginActionType.LOGOUT_SUBMIT:
            return {
                type: loginActionType.LOGOUT_SUBMIT,
            };
        case loginActionType.LOGOUT_SUCCESS: // logout success
            return {
                type: loginActionType.LOGOUT_SUCCESS,
                data: action.data,
            };
        case loginActionType.LOGOUT_FAILED: // logout failed
            return {
                type: loginActionType.LOGOUT_FAILED,
                message: action.message,
            };
        default:
            return state;
    }
};

export default loginReducer;
