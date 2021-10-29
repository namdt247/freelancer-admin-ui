import React, {useEffect} from "react";
import {useHistory} from 'react-router-dom';
import {useDispatch} from "react-redux";
import ModelManager from "../common/ModelManager";
import {Routes} from "../common/Routes";
import {loginAction} from "../actions";

function HomePage() {
    let history = useHistory();
    const dispatch = useDispatch();

    let token = ModelManager.token;

    useEffect(() => {
        if (
            token &&
            token !== '' &&
            token !== 'undefined' &&
            token !== 'null'
        ) {
            history.push(Routes.Dashboard.path);
        } else {
            ModelManager.clearLocalStorage();
            dispatch(loginAction.postLogout());
            history.push(Routes.Login.path);
        }
    }, [token, history, dispatch]);

    return (
        <>
        </>
    )
};

export default HomePage;
