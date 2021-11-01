import {userActionType} from "../actions/actionTypes";

const initialState = {
    message: '',
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case userActionType.GET_USER_INFO:
            return {
                type: userActionType.GET_USER_INFO,
            };
        case userActionType.GET_USER_INFO_SUCCESS:
            return {
                type: userActionType.GET_USER_INFO_SUCCESS,
                data: action.data,
                status: action.status,
            };
        case userActionType.GET_USER_INFO_FAILED:
            return {
                type: userActionType.GET_USER_INFO_FAILED,
                status: action.status,
                message: action.message,
            };
        default:
            return state;
    }
};

export default userReducer;
