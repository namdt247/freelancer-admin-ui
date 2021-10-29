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
    addAccount: () => {
        return {
            type: accountActionType.ADD_ACCOUNT,
        };
    },
    detailAccount: () => {
        return {
            type: accountActionType.DETAIL_ACCOUNT,
        };
    },
    updateAccount: () => {
        return {
            type: accountActionType.UPDATE_ACCOUNT,
        };
    },
    deleteAccount: () => {
        return {
            type: accountActionType.DELETE_ACCOUNT,
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
    addFreelancer: () => {
        return {
            type: freelancerActionType.ADD_FREELANCER,
        };
    },
    detailFreelancer: () => {
        return {
            type: freelancerActionType.DETAIL_FREELANCER,
        };
    },
    updateFreelancer: () => {
        return {
            type: freelancerActionType.UPDATE_FREELANCER,
        };
    },
    deleteFreelancer: () => {
        return {
            type: freelancerActionType.DELETE_FREELANCER,
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
    addJob: () => {
        return {
            type: jobActionType.ADD_JOB,
        };
    },
    detailJob: () => {
        return {
            type: jobActionType.DELETE_JOB,
        };
    },
    updateJob: () => {
        return {
            type: jobActionType.UPDATE_JOB,
        };
    },
    deleteJob: () => {
        return {
            type: jobActionType.DELETE_JOB,
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
