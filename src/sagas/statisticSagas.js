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

function* getStatisticJob({params}) {
    let response = yield API.requestGetAPI(APIConfig.URL_STATISTIC_JOB, params);
    if (response && parseInt(response.status) === APICode.SUCCESS) {
        yield put({
            type: statisticActionType.GET_STATISTIC_JOB_SUCCESS,
            data: response.data,
            status: response.status,
        });
    } else {
        yield put({
            type: statisticActionType.GET_STATISTIC_JOB_FAILED,
            message: response ? response.message : '',
        });
    }
}

export function* watchGetStatisticJob() {
    yield takeEvery(statisticActionType.GET_STATISTIC_JOB, getStatisticJob);
}

function* getStatisticFinancial({params}) {
    let response = yield API.requestGetAPI(APIConfig.URL_STATISTIC_FINANCIAL, params);
    if (response && parseInt(response.status) === APICode.SUCCESS) {
        yield put({
            type: statisticActionType.GET_STATISTIC_FINANCIAL_SUCCESS,
            data: response.data,
            status: response.status,
        });
    } else {
        yield put({
            type: statisticActionType.GET_STATISTIC_FINANCIAL_FAILED,
            message: response ? response.message : '',
        });
    }
}

export function* watchGetStatisticFinancial() {
    yield takeEvery(statisticActionType.GET_STATISTIC_FINANCIAL, getStatisticFinancial);
}
