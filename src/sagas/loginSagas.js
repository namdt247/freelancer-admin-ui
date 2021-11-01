import {loginActionType} from '../actions/actionTypes';
import {put, takeEvery} from 'redux-saga/effects';
import API from '../requests/API';
import ModelManager from '../common/ModelManager';
import {APIConfig} from '../requests/ApiConfig';
import APICode from "../common/APICode";

function* loginSubmit({params}) {
    let response = yield API.requestPostAPI(APIConfig.URL_LOGIN, params);
    console.log(response)
    if (response && parseInt(response.status) === APICode.SUCCESS) {
        ModelManager.setToken(response.data?.credential?.accessToken).then(
            ModelManager.setUserName(response.data?.account?.username || '').then(
                ModelManager.setUserName2(response.data?.account?.email || '').then(
                    ModelManager.setUserId(response.data?.account?.id || '').then(
                        yield put({
                            type: loginActionType.LOGIN_SUCCESS,
                            status: response.status,
                        }),
                    ),
                ),
            ),
        );
    } else {
        // show message
        yield put({
            type: loginActionType.LOGIN_FAILED,
            message: response.message,
            status: response.status,
        });
    }
}

export function* watchLoginSubmit() {
    yield takeEvery(loginActionType.LOGIN_SUBMIT, loginSubmit);
}

function* logoutSubmit() {
    let response = yield API.requestPostAPI(APIConfig.URL_LOGOUT);
    ModelManager.setToken(null);
    ModelManager.clearLocalStorage();
    if (response && response.status === APICode.SUCCESS) {
        yield put({
            type: loginActionType.LOGOUT_SUCCESS,
            data: response.data,
        });
    } else {
        yield put({
            type: loginActionType.LOGOUT_FAILED,
            message: response ? response.message : '',
        });
    }
}

export function* watchLogoutSubmit() {
    yield takeEvery(loginActionType.LOGOUT_SUBMIT, logoutSubmit);
}
