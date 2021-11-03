import API from "../requests/API";
import {APIConfig} from "../requests/ApiConfig";
import {put, takeEvery} from "redux-saga/effects";
import {userActionType} from "../actions/actionTypes";

function* getUserInfo({params}) {
    let response = yield API.requestGetAPI(APIConfig.URL_USER_INFO, params);
    if (response && response !== -1) {
        yield put({
            type: userActionType.GET_USER_INFO_SUCCESS,
            data: response,
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
