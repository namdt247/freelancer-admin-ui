import API from "../requests/API";
import {APIConfig} from "../requests/ApiConfig";
import {put, takeEvery} from "redux-saga/effects";
import {accountActionType} from "../actions/actionTypes";
import APICode from "../common/APICode";

function* getListAccount({params}) {
    let response = yield API.requestGetAPI(APIConfig.URL_LIST_ACCOUNT, params);
    if (response && parseInt(response.status) === APICode.SUCCESS) {
        yield put({
            type: accountActionType.GET_LIST_ACCOUNT_SUCCESS,
            data: response.data,
            status: response.status,
        });
    } else {
        yield put({
            type: accountActionType.GET_LIST_ACCOUNT_FAILED,
            message: response ? response.message : '',
        });
    }
}

export function* watchGetListAccount() {
    yield takeEvery(accountActionType.GET_LIST_ACCOUNT, getListAccount);
}

function* addAccount({params}) {
    let response = yield API.requestPostAPI(APIConfig.URL_CREATE_ACCOUNT, params);
    if (response && parseInt(response.status) === APICode.SUCCESS) {
        yield put({
            type: accountActionType.ADD_ACCOUNT_SUCCESS,
            data: response.data,
            status: response.status,
        });
    } else {
        yield put({
            type: accountActionType.ADD_ACCOUNT_FAILED,
            message: response ? response.message : '',
        });
    }
}

export function* watchAddAccount() {
    yield takeEvery(accountActionType.ADD_ACCOUNT, addAccount);
}

function* detailAccount({params}) {
    let response = yield API.requestGetAPI(APIConfig.URL_DETAIL_ACCOUNT, params);
    if (response && parseInt(response.status) === APICode.SUCCESS) {
        yield put({
            type: accountActionType.DETAIL_ACCOUNT_SUCCESS,
            data: response.data,
            status: response.status,
        });
    } else {
        yield put({
            type: accountActionType.DETAIL_ACCOUNT_FAILED,
            message: response ? response.message : '',
        });
    }
}

export function* watchDetailAccount() {
    yield takeEvery(accountActionType.DETAIL_ACCOUNT, detailAccount);
}

function* updateAccount({params}) {
    let response = yield API.requestPostAPI(APIConfig.URL_UPDATE_ACCOUNT, params);
    if (response && parseInt(response.status) === APICode.SUCCESS) {
        yield put({
            type: accountActionType.UPDATE_ACCOUNT_SUCCESS,
            data: response.data,
            status: response.status,
        });
    } else {
        yield put({
            type: accountActionType.UPDATE_ACCOUNT_FAILED,
            message: response ? response.message : '',
        });
    }
}

export function* watchUpdateAccount() {
    yield takeEvery(accountActionType.UPDATE_ACCOUNT, updateAccount);
}

function* deleteAccount({params}) {
    let response = yield API.requestGetAPI(APIConfig.URL_DELETE_ACCOUNT, params);
    if (response && parseInt(response.status) === APICode.SUCCESS) {
        yield put({
            type: accountActionType.DELETE_ACCOUNT_SUCCESS,
            data: response.data,
            status: response.status,
        });
    } else {
        yield put({
            type: accountActionType.DELETE_ACCOUNT_FAILED,
            message: response ? response.message : '',
        });
    }
}

export function* watchDeleteAccount() {
    yield takeEvery(accountActionType.DELETE_ACCOUNT, deleteAccount);
}
