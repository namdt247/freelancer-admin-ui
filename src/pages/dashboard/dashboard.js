import * as React from 'react';
import {useState} from 'react';
import Layouts from '../../components/Layouts';
import {Drawer} from 'antd';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDoubleLeft} from "@fortawesome/free-solid-svg-icons";
import WelCome from "./components/WelCome";
import Overview2 from "./components/Overview2";
import Overview from "./components/Overview";
import MLineChart from "./components/MLineChart";
import {Col, Row} from "react-bootstrap";

function Dashboard() {

    const [listStaff, setListStaff] = useState([]);

    const [staffByDepartment, setStaffByDepartment] = useState([]);

    const [visible, setVisible] = useState(false);

    const onClose = () => {
        setVisible(false);
    }
    const showSidebar = () => {
        setVisible(true);
    }

    let params = {
        'currentPage': 1,
        'pageSize': 5,
    }

    const titleDrawer = () => {
        return (
            <div
                className="wrap-drawer-back"
                onClick={onClose}
            >
                <span className="mr-1">
                    <FontAwesomeIcon
                        icon={faAngleDoubleLeft}
                    />
                </span>
                <span>Quay lại</span>
            </div>
        )
    }

    return (
        <Layouts classname="dashboard">
            <Row
                style={{
                    minHeight: '100%',
                }}
            >
                <Col xl={8} className="pr-md-2">
                    <WelCome
                        showSidebar={showSidebar}
                    />
                    <Overview
                        listStaff={listStaff}
                    />
                    <MLineChart
                        staffByDepartment={staffByDepartment}
                    />
                </Col>
                <Col xl={4} className="pl-md-2">
                    <div className="wrap-component-overview-2 d-none d-xl-block">
                        <Overview2 />
                    </div>
                    <Drawer
                        title={titleDrawer()}
                        closable={false}
                        placement='right'
                        onClose={onClose}
                        visible={visible}
                        bodyStyle={{ marginBottom: 20 }}
                        width={window.innerWidth > 768 ? '25rem' : '100%'}
                        className="d-xl-none d-block"
                    >
                        <Overview2 />
                    </Drawer>
                </Col>
            </Row>
        </Layouts>
    );
}

export default Dashboard;
