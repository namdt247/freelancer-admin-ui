import {jobActionType} from "../actions/actionTypes";

const initialState = {
    message: '',
};

const jobReducer = (state = initialState, action) => {
    switch (action.type) {
        case jobActionType.GET_LIST_JOB:
            return {
                type: jobActionType.GET_LIST_JOB,
            };
        case jobActionType.GET_LIST_JOB_SUCCESS:
            return {
                type: jobActionType.GET_LIST_JOB_SUCCESS,
                data: action.data,
                status: action.status,
            };
        case jobActionType.GET_LIST_JOB_FAILED:
            return {
                type: jobActionType.GET_LIST_JOB_FAILED,
                status: action.status,
                message: action.message,
            };
        case jobActionType.ADD_JOB:
            return {
                type: jobActionType.ADD_JOB,
            };
        case jobActionType.ADD_JOB_SUCCESS:
            return {
                type: jobActionType.ADD_JOB_SUCCESS,
                data: action.data,
                status: action.status,
            };
        case jobActionType.ADD_JOB_FAILED:
            return {
                type: jobActionType.ADD_JOB_FAILED,
                status: action.status,
                message: action.message,
            };
        case jobActionType.DETAIL_JOB:
            return {
                type: jobActionType.DETAIL_JOB,
            };
        case jobActionType.DETAIL_JOB_SUCCESS:
            return {
                type: jobActionType.DETAIL_JOB_SUCCESS,
                data: action.data,
                status: action.status,
            };
        case jobActionType.DETAIL_JOB_FAILED:
            return {
                type: jobActionType.DETAIL_JOB_FAILED,
                status: action.status,
                message: action.message,
            };
        case jobActionType.UPDATE_JOB:
            return {
                type: jobActionType.UPDATE_JOB,
            };
        case jobActionType.UPDATE_JOB_SUCCESS:
            return {
                type: jobActionType.UPDATE_JOB_SUCCESS,
                data: action.data,
                status: action.status,
            };
        case jobActionType.UPDATE_JOB_FAILED:
            return {
                type: jobActionType.UPDATE_JOB_FAILED,
                status: action.status,
                message: action.message,
            };
        case jobActionType.DELETE_JOB:
            return {
                type: jobActionType.DELETE_JOB,
            };
        case jobActionType.DELETE_JOB_SUCCESS:
            return {
                type: jobActionType.DELETE_JOB_SUCCESS,
                data: action.data,
                status: action.status,
            };
        case jobActionType.DELETE_JOB_FAILED:
            return {
                type: jobActionType.DELETE_JOB_FAILED,
                status: action.status,
                message: action.message,
            };
        case jobActionType.LIST_JOB_DONE_BY_ACCOUNT_ID:
            return {
                type: jobActionType.LIST_JOB_DONE_BY_ACCOUNT_ID,
            };
        case jobActionType.LIST_JOB_DONE_BY_ACCOUNT_ID_SUCCESS:
            return {
                type: jobActionType.LIST_JOB_DONE_BY_ACCOUNT_ID_SUCCESS,
                data: action.data,
                status: action.status,
            };
        case jobActionType.LIST_JOB_DONE_BY_ACCOUNT_ID_FAILED:
            return {
                type: jobActionType.LIST_JOB_DONE_BY_ACCOUNT_ID_FAILED,
                status: action.status,
                message: action.message,
            };
        case jobActionType.LIST_JOB_DONE_BY_FREELANCER_ID:
            return {
                type: jobActionType.LIST_JOB_DONE_BY_FREELANCER_ID,
            };
        case jobActionType.LIST_JOB_DONE_BY_FREELANCER_ID_SUCCESS:
            return {
                type: jobActionType.LIST_JOB_DONE_BY_FREELANCER_ID_SUCCESS,
                data: action.data,
                status: action.status,
            };
        case jobActionType.LIST_JOB_DONE_BY_FREELANCER_ID_FAILED:
            return {
                type: jobActionType.LIST_JOB_DONE_BY_FREELANCER_ID_FAILED,
                status: action.status,
                message: action.message,
            };
        default:
            return state;
    }
};

export default jobReducer;
