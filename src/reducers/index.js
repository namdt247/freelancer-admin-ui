import {combineReducers} from 'redux';
import accountReducer from "./accountReducer";
import freelancerReducer from "./freelancerReducer";
import jobReducer from "./jobReducer";
import transactionReducer from "./transactionReducer";
import loginReducer from "./loginReducer";

const allReducers = combineReducers({
    accountReducer,
    freelancerReducer,
    jobReducer,
    transactionReducer,
    loginReducer,
});

export default allReducers;
