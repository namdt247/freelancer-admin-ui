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
            if (response.status === APICode.AUTHORIZATION || response.status === APICode.PERMISSION_DENIED) {
                ModelManager.clearLocalStorage();
                return window.location = '/login';
            }
            else return -1;
        });
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
