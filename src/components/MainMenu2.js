import React, {useEffect, useState} from "react";
import {Icon, Menu} from "antd";
import {Link, useHistory} from "react-router-dom";
import HeaderSidebar from "./HeaderSidebar";
import {Routes} from "../common/Routes";
import {account, freelancer, job, report, transaction} from "../common/PageTitle";

function MainMenu2(props) {

    const {collapsed, setCollapsed} = props;

    // menu
    const [subMenuKeys, setSubMenuKeys] = useState(global.subMenuKey || []);
    const [activeMenu, setActiveMenu] = useState(global.activeMenu || '');

    const toggle = () => {
        setCollapsed(!collapsed);
        setSubMenuKeys([]);
    };

    const onOpenChange = (openKeys) => {
        const latestOpenKey = openKeys?.find(key => subMenuKeys.indexOf(key) === -1);

        setSubMenuKeys(latestOpenKey ? [latestOpenKey] : []);
        global.subMenuKey = latestOpenKey ? [latestOpenKey] : []
    };

    const handleClick = (value) => {
        global.activeMenu = value.key?.toString();
    }
    const history = useHistory();
    let urlPath = history.location.pathname;

    useEffect(() => {
        let currentUrl = '';
        if (urlPath && urlPath !== "/") {
            currentUrl = urlPath.split("/").filter((el) => el)[0];
        }

        switch (currentUrl) {
            case Routes.Dashboard.path.slice(1, Routes.Dashboard.path.length):
                setActiveMenu('1');
                break;
            case Routes.ListAccountAdmin.path.slice(1, Routes.ListAccountAdmin.path.length):
                setActiveMenu('2');
                break;
            case Routes.ListAccountNormal.path.slice(1, Routes.ListAccountNormal.path.length):
                setActiveMenu('3');
                break;
            case Routes.ListFreelancer.path.slice(1, Routes.ListFreelancer.path.length):
                setActiveMenu('4');
                break;
            case Routes.ListJob.path.slice(1, Routes.ListJob.path.length):
                setActiveMenu('5');
                break;
            case Routes.ListTransaction.path.slice(1, Routes.ListTransaction.path.length):
                setActiveMenu('6');
                break;
            case Routes.MainReport.path.slice(1, Routes.MainReport.path.length):
                setActiveMenu('7');
                break;
            default:
                break;
        }
    }, [urlPath])

    return (
        <>
            <div className="logo"/>
            <div className="d-block d-md-none wrap-header-sidebar">
                <HeaderSidebar/>
            </div>
            <Menu
                theme="light"
                mode="inline"
                selectedKeys={[activeMenu]}
                openKeys={subMenuKeys}
                onOpenChange={onOpenChange}
                onClick={handleClick}
                className="main-menu pt-md-0 pt-3"
            >
                <Menu.Item key="1">
                    <Link to={Routes.Dashboard.path}>
                        <div className="d-flex align-items-center">
                            <Icon type="dashboard"/>
                            <span className="text-menu-link">
                                Dashboard
                            </span>
                        </div>
                    </Link>
                </Menu.Item>
                <div className="text-uppercase main-menu-title">
                    System
                </div>
                <Menu.Item key="2">
                    <Link to={Routes.ListAccountAdmin.path}>
                        <div className="d-flex align-items-center">
                            <Icon type="user"/>
                            <span className="text-menu-link">
                                {account.MANAGE_ACCOUNT_ADMIN}
                            </span>
                        </div>
                    </Link>
                </Menu.Item>

                <div className="text-uppercase main-menu-title">
                    Management
                </div>
                <Menu.Item key="3">
                    <Link to={Routes.ListAccountNormal.path}>
                        <div className="d-flex align-items-center">
                            <Icon type="team"/>
                            <span className="text-menu-link">
                                {account.MANAGE_ACCOUNT_USER}
                            </span>
                        </div>
                    </Link>
                </Menu.Item>
                <Menu.Item key="4">
                    <Link to={Routes.ListFreelancer.path}>
                        <div className="d-flex align-items-center">
                            <Icon type="global"/>
                            <span className="text-menu-link">
                                {freelancer.MANAGE_FREELANCER}
                            </span>
                        </div>
                    </Link>
                </Menu.Item>
                <Menu.Item key="5">
                    <Link to={Routes.ListJob.path}>
                        <div className="d-flex align-items-center">
                            <Icon type="laptop"/>
                            <span className="text-menu-link">
                                {job.MANAGE_JOB}
                            </span>
                        </div>
                    </Link>
                </Menu.Item>
                <Menu.Item key="6">
                    <Link to={Routes.ListTransaction.path}>
                        <div className="d-flex align-items-center">
                            <Icon type="sync"/>
                            <span className="text-menu-link">
                                {transaction.MANAGE_TRANSACTION}
                            </span>
                        </div>
                    </Link>
                </Menu.Item>

                <div className="text-uppercase main-menu-title">
                    Statistical / Report
                </div>
                <Menu.Item key="7">
                    <Link to={Routes.MainReport.path}>
                        <div className="d-flex align-items-center">
                            <Icon type="bar-chart"/>
                            <span className="text-menu-link">
                                {report.STATISTICAL_REPORT}
                            </span>
                        </div>
                    </Link>
                </Menu.Item>
            </Menu>
            <div className="d-none d-md-block">
                <Icon
                    className="trigger"
                    type="menu"
                    onClick={toggle}
                />
            </div>
        </>
    )
}

export default MainMenu2;
