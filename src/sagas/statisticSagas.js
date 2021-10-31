import API from "../requests/API";
import {APIConfig} from "../requests/ApiConfig";
import {put, takeEvery} from "redux-saga/effects";
import {statisticActionType} from "../actions/actionTypes";
import APICode from "../common/APICode";

function* getStatisticAccount({params}) {
    let response = yield API.requestGetAPI(APIConfig.URL_STATISTIC_ACCOUNT, params);
    if (response && parseInt(response.status) === APICode.SUCCESS) {
        yield put({
            type: statisticActionType.GET_STATISTIC_ACCOUNT_SUCCESS,
            data: response.data,
            status: response.status,
        });
    } else {
        yield put({
            type: statisticActionType.GET_STATISTIC_ACCOUNT_FAILED,
            message: response ? response.message : '',
        });
    }
}

export function* watchGetStatisticAccount() {
    yield takeEvery(statisticActionType.GET_STATISTIC_ACCOUNT, getStatisticAccount);
}

