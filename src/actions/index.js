import {
    accountActionType,
    freelancerActionType,
    jobActionType,
    loginActionType,
    transactionActionType
} from './actionTypes';

export const loginAction = {
    postLogin: (params) => {
        return {
            type: loginActionType.LOGIN_SUBMIT,
            params,
        };
    },
    postLogout: () => {
        return {
            type: loginActionType.LOGOUT_SUBMIT,
        };
    },
};

export const accountAction = {
    getLisAccount: (params) => {
        return {
            type: accountActionType.GET_LIST_ACCOUNT,
            params,
        };
    },
    addAccount: (params) => {
        return {
            type: accountActionType.ADD_ACCOUNT,
            params
        };
    },
    detailAccount: (params) => {
        return {
            type: accountActionType.DETAIL_ACCOUNT,
            params,
        };
    },
    updateAccount: (params) => {
        return {
            type: accountActionType.UPDATE_ACCOUNT,
            params,
        };
    },
    deleteAccount: (params) => {
        return {
            type: accountActionType.DELETE_ACCOUNT,
            params,
        };
    },
};

export const freelancerAction = {
    getLisFreelancer: (params) => {
        return {
            type: freelancerActionType.GET_LIST_FREELANCER,
            params,
        };
    },
    addFreelancer: (params) => {
        return {
            type: freelancerActionType.ADD_FREELANCER,
            params,
        };
    },
    detailFreelancer: (params) => {
        return {
            type: freelancerActionType.DETAIL_FREELANCER,
            params,
        };
    },
    updateFreelancer: (params) => {
        return {
            type: freelancerActionType.UPDATE_FREELANCER,
            params,
        };
    },
    deleteFreelancer: (params) => {
        return {
            type: freelancerActionType.DELETE_FREELANCER,
            params,
        };
    },
};

export const jobAction = {
    getLisJob: (params) => {
        return {
            type: jobActionType.GET_LIST_JOB,
            params,
        };
    },
    addJob: (params) => {
        return {
            type: jobActionType.ADD_JOB,
            params,
        };
    },
    detailJob: (params) => {
        return {
            type: jobActionType.DELETE_JOB,
            params,
        };
    },
    updateJob: (params) => {
        return {
            type: jobActionType.UPDATE_JOB,
            params,
        };
    },
    deleteJob: (params) => {
        return {
            type: jobActionType.DELETE_JOB,
            params,
        };
    },
};

export const transactionAction = {
    getLisTransaction: (params) => {
        return {
            type: transactionActionType.GET_LIST_TRANSACTION,
            params,
        };
    },
};
