import {statisticActionType} from "../actions/actionTypes";

const initialState = {
    message: '',
};

const statisticReducer = (state = initialState, action) => {
    switch (action.type) {
        case statisticActionType.GET_STATISTIC_ACCOUNT:
            return {
                type: statisticActionType.GET_STATISTIC_ACCOUNT,
            };
        case statisticActionType.GET_STATISTIC_ACCOUNT_SUCCESS:
            return {
                type: statisticActionType.GET_STATISTIC_ACCOUNT_SUCCESS,
                data: action.data,
                status: action.status,
            };
        case statisticActionType.GET_STATISTIC_ACCOUNT_FAILED:
            return {
                type: statisticActionType.GET_STATISTIC_ACCOUNT_FAILED,
                status: action.status,
                message: action.message,
            };
        default:
            return state;
    }
};

export default statisticReducer;
