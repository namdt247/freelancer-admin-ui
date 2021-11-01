import API from "../requests/API";
import {APIConfig} from "../requests/ApiConfig";
import {put, takeEvery} from "redux-saga/effects";
import {userActionType} from "../actions/actionTypes";
import APICode from "../common/APICode";

function* getUserInfo({params}) {
    let response = yield API.requestGetAPI(APIConfig.URL_USER_INFO, params);
    if (response && parseInt(response.status) === APICode.SUCCESS) {
        yield put({
            type: userActionType.GET_USER_INFO_SUCCESS,
            data: response.data,
            status: response.status,
        });
    } else {
        yield put({
            type: userActionType.GET_USER_INFO_FAILED,
            message: response ? response.message : '',
        });
    }
}

export function* watchGetUserInfo() {
    yield takeEvery(userActionType.GET_USER_INFO, getUserInfo);
}
