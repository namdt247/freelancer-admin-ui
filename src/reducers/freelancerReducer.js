import {freelancerActionType} from "../actions/actionTypes";

const initialState = {
    message: '',
};

const freelancerReducer = (state = initialState, action) => {
    switch (action.type) {
        case freelancerActionType.GET_LIST_FREELANCER:
            return {
                type: freelancerActionType.GET_LIST_FREELANCER,
            };
        case freelancerActionType.GET_LIST_FREELANCER_SUCCESS:
            return {
                type: freelancerActionType.GET_LIST_FREELANCER_SUCCESS,
                data: action.data,
                status: action.status,
            };
        case freelancerActionType.GET_LIST_FREELANCER_FAILED:
            return {
                type: freelancerActionType.GET_LIST_FREELANCER_FAILED,
                status: action.status,
                message: action.message,
            };
        case freelancerActionType.ADD_FREELANCER:
            return {
                type: freelancerActionType.ADD_FREELANCER,
            };
        case freelancerActionType.ADD_FREELANCER_SUCCESS:
            return {
                type: freelancerActionType.ADD_FREELANCER_SUCCESS,
                data: action.data,
                status: action.status,
            };
        case freelancerActionType.ADD_FREELANCER_FAILED:
            return {
                type: freelancerActionType.ADD_FREELANCER_FAILED,
                status: action.status,
                message: action.message,
            };
        case freelancerActionType.DETAIL_FREELANCER:
            return {
                type: freelancerActionType.DETAIL_FREELANCER,
            };
        case freelancerActionType.DETAIL_FREELANCER_SUCCESS:
            return {
                type: freelancerActionType.DETAIL_FREELANCER_SUCCESS,
                data: action.data,
                status: action.status,
            };
        case freelancerActionType.DETAIL_FREELANCER_FAILED:
            return {
                type: freelancerActionType.DETAIL_FREELANCER_FAILED,
                status: action.status,
                message: action.message,
            };
        case freelancerActionType.UPDATE_FREELANCER:
            return {
                type: freelancerActionType.UPDATE_FREELANCER,
            };
        case freelancerActionType.UPDATE_FREELANCER_SUCCESS:
            return {
                type: freelancerActionType.UPDATE_FREELANCER_SUCCESS,
                data: action.data,
                status: action.status,
            };
        case freelancerActionType.UPDATE_FREELANCER_FAILED:
            return {
                type: freelancerActionType.UPDATE_FREELANCER_FAILED,
                status: action.status,
                message: action.message,
            };
        case freelancerActionType.DELETE_FREELANCER:
            return {
                type: freelancerActionType.DELETE_FREELANCER,
            };
        case freelancerActionType.DELETE_FREELANCER_SUCCESS:
            return {
                type: freelancerActionType.DELETE_FREELANCER_SUCCESS,
                data: action.data,
                status: action.status,
            };
        case freelancerActionType.DELETE_FREELANCER_FAILED:
            return {
                type: freelancerActionType.DELETE_FREELANCER_FAILED,
                status: action.status,
                message: action.message,
            };
        default:
            return state;
    }
};

export default freelancerReducer;
