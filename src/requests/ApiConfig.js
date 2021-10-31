export const BASE_URL = 'http://localhost:8088';

export const BASE_API = `${BASE_URL}`;

// export const STORAGE_URL = `${BASE_URL}/storage/`;

export const APIConfig = {
    // login
    URL_LOGIN: '/admin/login',

    // dashboard

    // account
    URL_LIST_ACCOUNT: '/api/admin/account',
    URL_CREATE_ACCOUNT: '/api/admin/account/create',
    URL_DETAIL_ACCOUNT: '/api/admin/account/detail',
    URL_UPDATE_ACCOUNT: '/api/admin/account/update',
    URL_DELETE_ACCOUNT: '/api/admin/account/delete',

    // freelancer
    URL_LIST_FREELANCER: '/api/admin/freelancer',
    URL_CREATE_FREELANCER: '/api/admin/freelancer/create',
    URL_DETAIL_FREELANCER: '/api/admin/freelancer/detail',
    URL_UPDATE_FREELANCER: '/api/admin/freelancer/update',
    URL_DELETE_FREELANCER: '/api/admin/freelancer/delete',

    // job
    URL_LIST_JOB: '/api/admin/job',
    URL_CREATE_JOB: '/api/admin/job/create',
    URL_DETAIL_JOB: '/api/admin/job/detail',
    URL_UPDATE_JOB: '/api/admin/job/update',
    URL_DELETE_JOB: '/api/admin/job/delete',

    // transaction
    URL_LIST_TRANSACTION: '/api/admin/transaction',

    // statistic
    URL_STATISTIC_ACCOUNT: '/api/admin/statistic/account',
};
