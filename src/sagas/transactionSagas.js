import API from "../requests/API";
import {APIConfig} from "../requests/ApiConfig";
import {put, takeEvery} from "redux-saga/effects";
import {transactionActionType} from "../actions/actionTypes";
import APICode from "../common/APICode";

function* getListTransaction({params}) {
    let response = yield API.requestGetAPI(APIConfig.URL_LIST_TRANSACTION, params);
    if (response && parseInt(response.status) === APICode.SUCCESS) {
        yield put({
            type: transactionActionType.GET_LIST_TRANSACTION_SUCCESS,
            data: response.data,
            status: response.status,
        });
    } else {
        yield put({
            type: transactionActionType.GET_LIST_TRANSACTION_FAILED,
            message: response ? response.message : '',
        });
    }
}

export function* watchGetListTransaction() {
    yield takeEvery(transactionActionType.GET_LIST_TRANSACTION, getListTransaction);
}
