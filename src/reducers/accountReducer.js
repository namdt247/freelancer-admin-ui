import {accountActionType} from "../actions/actionTypes";

const initialState = {
    message: '',
};

const accountReducer = (state = initialState, action) => {
    switch (action.type) {
        case accountActionType.GET_LIST_ACCOUNT:
            return {
                type: accountActionType.GET_LIST_ACCOUNT,
            };
        case accountActionType.GET_LIST_ACCOUNT_SUCCESS:
            return {
                type: accountActionType.GET_LIST_ACCOUNT_SUCCESS,
                data: action.data,
                status: action.status,
            };
        case accountActionType.GET_LIST_ACCOUNT_FAILED:
            return {
                type: accountActionType.GET_LIST_ACCOUNT_FAILED,
                status: action.status,
                message: action.message,
            };
        case accountActionType.ADD_ACCOUNT:
            return {
                type: accountActionType.ADD_ACCOUNT,
            };
        case accountActionType.ADD_ACCOUNT_SUCCESS:
            return {
                type: accountActionType.ADD_ACCOUNT_SUCCESS,
                data: action.data,
                status: action.status,
            };
        case accountActionType.ADD_ACCOUNT_FAILED:
            return {
                type: accountActionType.ADD_ACCOUNT_FAILED,
                status: action.status,
                message: action.message,
            };
        case accountActionType.DETAIL_ACCOUNT:
            return {
                type: accountActionType.DETAIL_ACCOUNT,
            };
        case accountActionType.DETAIL_ACCOUNT_SUCCESS:
            return {
                type: accountActionType.DETAIL_ACCOUNT_SUCCESS,
                data: action.data,
                status: action.status,
            };
        case accountActionType.DETAIL_ACCOUNT_FAILED:
            return {
                type: accountActionType.DETAIL_ACCOUNT_FAILED,
                status: action.status,
                message: action.message,
            };
        case accountActionType.UPDATE_ACCOUNT:
            return {
                type: accountActionType.UPDATE_ACCOUNT,
            };
        case accountActionType.UPDATE_ACCOUNT_SUCCESS:
            return {
                type: accountActionType.UPDATE_ACCOUNT_SUCCESS,
                data: action.data,
                status: action.status,
            };
        case accountActionType.UPDATE_ACCOUNT_FAILED:
            return {
                type: accountActionType.UPDATE_ACCOUNT_FAILED,
                status: action.status,
                message: action.message,
            };
        case accountActionType.DELETE_ACCOUNT:
            return {
                type: accountActionType.DELETE_ACCOUNT,
            };
        case accountActionType.DELETE_ACCOUNT_SUCCESS:
            return {
                type: accountActionType.DELETE_ACCOUNT_SUCCESS,
                data: action.data,
                status: action.status,
            };
        case accountActionType.DELETE_ACCOUNT_FAILED:
            return {
                type: accountActionType.DELETE_ACCOUNT_FAILED,
                status: action.status,
                message: action.message,
            };
        default:
            return state;
    }
};

export default accountReducer;
