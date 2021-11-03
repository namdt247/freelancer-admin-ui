import API from "../requests/API";
import {APIConfig} from "../requests/ApiConfig";
import {put, takeEvery} from "redux-saga/effects";
import {freelancerActionType} from "../actions/actionTypes";
import APICode from "../common/APICode";

function* getListFreelancer({params}) {
    let response = yield API.requestGetAPI(APIConfig.URL_LIST_FREELANCER, params);
    if (response && parseInt(response.status) === APICode.SUCCESS) {
        yield put({
            type: freelancerActionType.GET_LIST_FREELANCER_SUCCESS,
            data: response.data,
            status: response.status,
        });
    } else {
        yield put({
            type: freelancerActionType.GET_LIST_FREELANCER_FAILED,
            message: response ? response.message : '',
        });
    }
}

export function* watchGetListFreelancer() {
    yield takeEvery(freelancerActionType.GET_LIST_FREELANCER, getListFreelancer);
}

function* addFreelancer({params}) {
    let response = yield API.requestPostAPI(APIConfig.URL_CREATE_FREELANCER, params);
    if (response && parseInt(response.status) === APICode.SUCCESS) {
        yield put({
            type: freelancerActionType.ADD_FREELANCER_SUCCESS,
            data: response.data,
            status: response.status,
        });
    } else {
        yield put({
            type: freelancerActionType.ADD_FREELANCER_FAILED,
            message: response ? response.message : '',
        });
    }
}

export function* watchAddFreelancer() {
    yield takeEvery(freelancerActionType.ADD_FREELANCER, addFreelancer);
}

function* detailFreelancer({params}) {
    let response = yield API.requestGetAPI(APIConfig.URL_DETAIL_FREELANCER, params);
    if (response && parseInt(response.status) === APICode.SUCCESS) {
        yield put({
            type: freelancerActionType.DETAIL_FREELANCER_SUCCESS,
            data: response.data,
            status: response.status,
        });
    } else {
        yield put({
            type: freelancerActionType.DETAIL_FREELANCER_FAILED,
            message: response ? response.message : '',
        });
    }
}

export function* watchDetailFreelancer() {
    yield takeEvery(freelancerActionType.DETAIL_FREELANCER, detailFreelancer);
}

function* updateFreelancer({params}) {
    let response = yield API.requestPostAPI(APIConfig.URL_UPDATE_FREELANCER, params);
    if (response && parseInt(response.status) === APICode.SUCCESS) {
        yield put({
            type: freelancerActionType.UPDATE_FREELANCER_SUCCESS,
            data: response.data,
            status: response.status,
        });
    } else {
        yield put({
            type: freelancerActionType.UPDATE_FREELANCER_FAILED,
            message: response ? response.message : '',
        });
    }
}

export function* watchUpdateFreelancer() {
    yield takeEvery(freelancerActionType.UPDATE_FREELANCER, updateFreelancer);
}

function* deleteFreelancer({params}) {
    let response = yield API.requestGetAPI(APIConfig.URL_DELETE_FREELANCER, params);
    if (response && parseInt(response.status) === APICode.SUCCESS) {
        yield put({
            type: freelancerActionType.DELETE_FREELANCER_SUCCESS,
            data: response.data,
            status: response.status,
        });
    } else {
        yield put({
            type: freelancerActionType.DELETE_FREELANCER_FAILED,
            message: response ? response.message : '',
        });
    }
}

export function* watchDeleteFreelancer() {
    yield takeEvery(freelancerActionType.DELETE_FREELANCER, deleteFreelancer);
}
