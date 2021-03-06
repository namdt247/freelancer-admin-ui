import {all} from 'redux-saga/effects';
import {
    watchLoginSubmit,
} from './loginSagas';
import {
    watchGetListAccount,
    watchAddAccount,
    watchDetailAccount,
    watchUpdateAccount,
    watchDeleteAccount,
} from "./accountSagas";
import {
    watchGetListFreelancer,
    watchAddFreelancer,
    watchDetailFreelancer,
    watchUpdateFreelancer,
    watchDeleteFreelancer,
} from "./freelancerSagas";
import {
    watchGetListJob,
    watchAddJob,
    watchDetailJob,
    watchUpdateJob,
    watchDeleteJob,
    watchListJobDoneByAccountId,
    watchListJobDoneByFreelancerId,
} from "./jobSagas";
import {
    watchGetListTransaction,
} from "./transactionSagas";
import {
    watchGetStatisticAccount,
    watchGetStatisticJob,
    watchGetStatisticFinancial,
} from "./statisticSagas";
import {
    watchGetUserInfo,
} from "./userSagas";

export default function* rootSaga() {
    yield all([
        // login
        watchLoginSubmit(),

        // account
        watchGetListAccount(),
        watchAddAccount(),
        watchDetailAccount(),
        watchUpdateAccount(),
        watchDeleteAccount(),

        // freelancer
        watchGetListFreelancer(),
        watchAddFreelancer(),
        watchDetailFreelancer(),
        watchUpdateFreelancer(),
        watchDeleteFreelancer(),

        // job
        watchGetListJob(),
        watchAddJob(),
        watchDetailJob(),
        watchUpdateJob(),
        watchDeleteJob(),
        watchListJobDoneByAccountId(),
        watchListJobDoneByFreelancerId(),

        // transaction
        watchGetListTransaction(),

        // statistic
        watchGetStatisticAccount(),
        watchGetStatisticJob(),
        watchGetStatisticFinancial(),

        // user info
        watchGetUserInfo(),
    ]);
}
