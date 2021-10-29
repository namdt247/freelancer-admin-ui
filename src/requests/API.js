/* eslint-disable no-console */
/* eslint-disable no-alert */
import {BASE_API} from './ApiConfig';
import ModelManager from '../common/ModelManager';
import APICode from "../common/APICode";

function* requestAPI(url, method, params) {
    try {
        const res = yield fetch(`${BASE_API}${url}`, {
            method,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${ModelManager.token}`,
            },
            body: JSON.stringify(params),
        }).then(response => {
            if (response.status === APICode.SUCCESS) return response.json();
            if (response.status === APICode.AUTHORIZATION) return window.location = '/dang-nhap';
            else return -1;
        });

        // if (res.status === APICode.RESET_TOKEN || res.status === APICode.RESET_LOGIN
        //     || res.status === APICode.NON_AUTH || res.status === APICode.TOKEN_ERROR) {
        //     ModelManager.clearLocalStorage();
        //     window.location = PathRoute.Login;
        // // supplier not exist
        // } else if (res.status === APICode.SUPPLIER_NOT_EXIST) {
        //     window.location = PathRoute.Register;
        // // supplier pending
        // } else if (res.status === APICode.SUPPLIER_PENDING) {
        //     window.location = PathRoute.RegisterSuccess;
        // } else {
        //     return res;
        // }
        return res;
    } catch (error) {
        console.log(error);
        return -1;
    }
}

function* requestGetAPI(url, params) {
    let queryString = '';
    if (params !== null && params !== undefined) {
        queryString = Object.keys(params)
            .map(key => key + '=' + params[key])
            .join('&');
    }
    return yield requestAPI(`${url}?${queryString}`, 'GET');
}

function* requestPostAPI(url, params) {
    return yield requestAPI(url, 'POST', params);
}

function* requestPutAPI(url, params) {
    return yield requestAPI(url, 'PUT', params);
}

const API = {
    requestGetAPI,
    requestPostAPI,
    requestPutAPI,
};

export default API;
