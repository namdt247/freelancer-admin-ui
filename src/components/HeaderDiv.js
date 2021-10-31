import * as React from 'react';
import logo from '../assets/images/logo.png';
import {Link, useHistory} from 'react-router-dom';
import {Avatar, Dropdown, Menu} from 'antd';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars, faPowerOff, faUser} from "@fortawesome/free-solid-svg-icons";
import ModelManager from "../common/ModelManager";
import {loginAction} from "../actions";
import {useDispatch} from "react-redux";
import {Routes} from "../common/Routes";

function HeaderDiv(props) {
    const {showSidebar}= props;
    const dispatch = useDispatch();
    let history = useHistory();

    const userName = ModelManager.userName || 'Admin';
    const userName2 = ModelManager.userName2;
    const groupOrganName = 'FFlancer Technology Joint Stock Company';
    const organName = 'D.Administration';

    const getValueByName = (text) => {
        return text
            .split(/\s/)
            .reduce((response, word) => (response += word.slice(0, 1)), "");
    };

    const dropDownUser = () => {
        return (
            <Menu className="">
                <Menu.Item className="mb-2">
                    <div>
                        <FontAwesomeIcon
                            icon={faUser}
                            style={{color: '#a6abbd'}}
                            className="mr-2"
                        />
                        Profile
                    </div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={handleLogOut}>
                        <FontAwesomeIcon
                            icon={faPowerOff}
                            style={{color:'#a6abbd'}}
                            className="mr-2"
                        />
                        Logout
                    </div>
                </Menu.Item>
            </Menu>
        )
    }

    const handleLogOut = () => {
        ModelManager.clearLocalStorage();
        dispatch(loginAction.postLogout());
        history.push(Routes.Login.path);
    }

    const handleClick = () => {
        if (showSidebar) {
            showSidebar();
        }
    }

    return (
        <div
            style={{height: '64px', backgroundColor: '#346cb0'}}
            className="d-flex justify-content-between"
        >
            <div className="d-flex align-items-center mx-3 mx-md-4">
                <Link to={Routes.Home.path} className="d-none d-md-block">
                    <img
                        src={logo}
                        style={{height: '28px'}}
                        alt="logo"
                        className="mr-1"
                    />
                </Link>
                <Link
                    to={Routes.Home.path}
                    className="text-white px-2 title-header d-none d-md-block"
                >
                    FFlancer
                </Link>
                <div className="d-flex text-white" onClick={handleClick}>
                    <FontAwesomeIcon
                        icon={faBars}
                        size="2x"
                        className="d-block d-md-none"
                    />
                </div>
            </div>
            <div className="px-2 px-md-4 d-inline-flex align-items-center">
                <div className="pr-3 wrap-content-organ text-right">
                    <div className="mb-1 text-content-header-1">
                        {groupOrganName}
                    </div>
                    <div className="text-content-header-2">
                        {organName}
                    </div>
                </div>
                <Dropdown overlay={dropDownUser} trigger={["click"]} className="pl-3">
                    <div
                        className="ant-dropdown-link cursor-pointer d-md-inline-flex d-none h-100 align-items-center"
                        onClick={e => e.preventDefault()}
                    >
                        <Avatar size={36} className="header-user-avatar">
                            {getValueByName(userName)}
                        </Avatar>
                        <div className="ml-2 wrap-content-organ">
                            <div className="text-white text-capitalize">
                                {userName}
                            </div>
                            {userName2 && (
                                <div className="text-white text-lowercase text-content-header-3">
                                    @{userName2}
                                </div>
                            )}
                        </div>
                    </div>
                </Dropdown>
            </div>
        </div>
    );
}

export default HeaderDiv;
