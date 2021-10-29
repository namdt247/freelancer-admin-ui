import React, {useState} from "react";
import {Collapse} from "react-bootstrap";
import {Avatar, Menu} from "antd";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown, faChevronUp, faPowerOff, faUser} from "@fortawesome/free-solid-svg-icons";
import ModelManager from "../common/ModelManager";
import {loginAction} from "../actions";
import {Routes} from "../common/Routes";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import Util from "../common/Util";

function HeaderSidebar() {
    const dispatch = useDispatch();
    let history = useHistory();

    const [open, setOpen] = useState(false);
    const userName = ModelManager.userName || 'Admin';

    const handleClick = () => {
        setOpen(!open);
    }

    const handleLogOut = () => {
        ModelManager.clearLocalStorage();
        dispatch(loginAction.postLogout());
        history.push(Routes.Login.path);
    }

    return (
        <>
            <div
                onClick={handleClick}
                className="wrap-header-sidebar-btn d-inline-flex"
            >
                <div className="d-flex align-items-center">
                    <Avatar size={40} style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>
                        {Util.getValueByName(userName)}
                    </Avatar>
                </div>
                <div className="mx-2 wrap-sidebar-username">
                    <div className="sidebar-username">
                        {userName}
                    </div>
                    <div className="text-gray">
                        FFlancer
                    </div>
                </div>
                <div className="d-flex align-items-center">
                    {open
                        ? (
                            <FontAwesomeIcon
                                icon={faChevronDown}
                                size={"xs"}
                            />
                        )
                        : (
                            <FontAwesomeIcon
                                icon={faChevronUp}
                                size={"xs"}
                            />
                        )
                    }
                </div>
            </div>
            <Collapse in={open}>
                <div className="wrap-header-sidebar-content">
                    <Menu className="wrap-header-sidebar-menu">
                        <Menu.Item className="header-sidebar-menu-item">
                            <div>
                                <FontAwesomeIcon
                                    icon={faUser}
                                    style={{color: '#a6abbd'}}
                                    className="mr-2"
                                />
                                Profile
                            </div>
                        </Menu.Item>
                        <Menu.Item className="header-sidebar-menu-item">
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
                </div>
            </Collapse>
        </>
    )
};

export default HeaderSidebar;
