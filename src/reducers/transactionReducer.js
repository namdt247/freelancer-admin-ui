import {transactionActionType} from "../actions/actionTypes";

const initialState = {
    message: '',
};

const transactionReducer = (state = initialState, action) => {
    switch (action.type) {
        case transactionActionType.GET_LIST_TRANSACTION:
            return {
                type: transactionActionType.GET_LIST_TRANSACTION,
            };
        case transactionActionType.GET_LIST_TRANSACTION_SUCCESS:
            return {
                type: transactionActionType.GET_LIST_TRANSACTION_SUCCESS,
                data: action.data,
                status: action.status,
            };
        case transactionActionType.GET_LIST_TRANSACTION_FAILED:
            return {
                type: transactionActionType.GET_LIST_TRANSACTION_FAILED,
                status: action.status,
                message: action.message,
            };
        default:
            return state;
    }
};

export default transactionReducer;
