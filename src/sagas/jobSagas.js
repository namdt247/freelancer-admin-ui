import API from "../requests/API";
import {APIConfig} from "../requests/ApiConfig";
import {put, takeEvery} from "redux-saga/effects";
import {jobActionType} from "../actions/actionTypes";
import APICode from "../common/APICode";

function* getListJob({params}) {
    let response = yield API.requestGetAPI(APIConfig.URL_LIST_JOB, params);
    if (response && parseInt(response.status) === APICode.SUCCESS) {
        yield put({
            type: jobActionType.GET_LIST_JOB_SUCCESS,
            data: response.data,
            status: response.status,
        });
    } else {
        yield put({
            type: jobActionType.GET_LIST_JOB_FAILED,
            message: response ? response.message : '',
        });
    }
}

export function* watchGetListJob() {
    yield takeEvery(jobActionType.GET_LIST_JOB, getListJob);
}

function* addJob({params}) {
    let response = yield API.requestPostAPI(APIConfig.URL_CREATE_JOB, params);
    if (response && parseInt(response.status) === APICode.SUCCESS) {
        yield put({
            type: jobActionType.ADD_JOB_SUCCESS,
            data: response.data,
            status: response.status,
        });
    } else {
        yield put({
            type: jobActionType.ADD_JOB_FAILED,
            message: response ? response.message : '',
        });
    }
}

export function* watchAddJob() {
    yield takeEvery(jobActionType.ADD_JOB, addJob);
}

function* detailJob({params}) {
    let response = yield API.requestGetAPI(APIConfig.URL_DETAIL_JOB, params);
    if (response && parseInt(response.status) === APICode.SUCCESS) {
        yield put({
            type: jobActionType.DETAIL_JOB_SUCCESS,
            data: response.data,
            status: response.status,
        });
    } else {
        yield put({
            type: jobActionType.DETAIL_JOB_FAILED,
            message: response ? response.message : '',
        });
    }
}

export function* watchDetailJob() {
    yield takeEvery(jobActionType.DETAIL_JOB, detailJob);
}

function* updateJob({params}) {
    let response = yield API.requestPostAPI(APIConfig.URL_UPDATE_JOB, params);
    if (response && parseInt(response.status) === APICode.SUCCESS) {
        yield put({
            type: jobActionType.UPDATE_JOB_SUCCESS,
            data: response.data,
            status: response.status,
        });
    } else {
        yield put({
            type: jobActionType.UPDATE_JOB_FAILED,
            message: response ? response.message : '',
        });
    }
}

export function* watchUpdateJob() {
    yield takeEvery(jobActionType.UPDATE_JOB, updateJob);
}

function* deleteJob({params}) {
    let response = yield API.requestGetAPI(APIConfig.URL_DELETE_JOB, params);
    if (response && parseInt(response.status) === APICode.SUCCESS) {
        yield put({
            type: jobActionType.DELETE_JOB_SUCCESS,
            data: response.data,
            status: response.status,
        });
    } else {
        yield put({
            type: jobActionType.DELETE_JOB_FAILED,
            message: response ? response.message : '',
        });
    }
}

export function* watchDeleteJob() {
    yield takeEvery(jobActionType.DELETE_JOB, deleteJob);
}
