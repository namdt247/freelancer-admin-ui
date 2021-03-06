import * as React from 'react';
import {useEffect, useState} from 'react';
import Layouts from '../../components/Layouts';
import {Drawer} from 'antd';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDoubleLeft, faLongArrowAltRight} from "@fortawesome/free-solid-svg-icons";
import WelCome from "./components/WelCome";
import Overview2 from "./components/Overview2";
import Overview from "./components/Overview";
import {Col, Row} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {accountAction, freelancerAction, jobAction, statisticAction} from "../../actions";
import {accountActionType, freelancerActionType, jobActionType, statisticActionType} from "../../actions/actionTypes";
import LoadingData from "../../components/LoadingData";
import {Link} from "react-router-dom";
import {Routes} from "../../common/Routes";
import moment from "moment";
import DateHelper from "../../common/DateHelper";
import MLineChart from "./components/MLineChart";

function Dashboard() {
    const dispatch = useDispatch();

    const statisticReducer = useSelector((state) => state.statisticReducer);
    const freelancerReducer = useSelector((state) => state.freelancerReducer);
    const accountReducer = useSelector((state) => state.accountReducer);
    const jobReducer = useSelector((state) => state.jobReducer);

    // data statistic
    const [totalUserNormal, setTotalUserNormal] = useState(0);
    const [totalFreelancer, setTotalFreelancer] = useState(0);
    const [listNewAccount, setListNewAccount] = useState([]);
    const [listTotalFreelancer, setListTotalFreelancer] = useState([]);
    const [listNewJob, setListNewJob] = useState([]);
    const [statisticJob, setStatisticJob] = useState({});
    const [statisticFinancial, setStatisticFinancial] = useState([]);

    const [visible, setVisible] = useState(false);

    // loading
    const [loading, setLoading] = useState(true);

    const onClose = () => {
        setVisible(false);
    }
    const showSidebar = () => {
        setVisible(true);
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
                <span>Back</span>
            </div>
        )
    }

    useEffect(() => {
        dispatch(statisticAction.statisticAccount());
        dispatch(statisticAction.statisticJob());

        let paramsFinancial = {
            startDate:moment().add(-29, 'days').format(DateHelper.formatFullDay2()),
            endDate: moment().format(DateHelper.formatFullDay2()),
        }
        dispatch(statisticAction.statisticFinancial(paramsFinancial));

        let paramsFreelancer = {
            'currentPage': 1,
            'pageSize': 999999,
        }
        dispatch(freelancerAction.getLisFreelancer(paramsFreelancer));

        let paramsAccount = {
            'currentPage': 1,
            'pageSize': 5,
            'typeUser': 1,
        }
        dispatch(accountAction.getLisAccount(paramsAccount));

        let paramsJob = {
            'currentPage': 1,
            'pageSize': 5,
        }
        dispatch(jobAction.getLisJob(paramsJob));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if (statisticReducer.type === statisticActionType.GET_STATISTIC_ACCOUNT) {
            setLoading(true);
        }
        if (statisticReducer.type === statisticActionType.GET_STATISTIC_ACCOUNT_SUCCESS) {
            setTotalUserNormal(statisticReducer.data?.totalUserNormal || 0);
            setTotalFreelancer(statisticReducer.data?.totalFreelancer || 0);
            setLoading(false);
        }

        if (statisticReducer.type === statisticActionType.GET_STATISTIC_JOB_SUCCESS) {
            setStatisticJob(statisticReducer.data || {});
        }

        if (statisticReducer.type === statisticActionType.GET_STATISTIC_FINANCIAL_SUCCESS) {
            setStatisticFinancial(statisticReducer.data || []);
        }
    }, [statisticReducer]);

    useEffect(() => {
        if (freelancerReducer.type === freelancerActionType.GET_LIST_FREELANCER_SUCCESS) {
            setListTotalFreelancer(freelancerReducer.data?.list || []);
        }
    }, [freelancerReducer]);

    useEffect(() => {
        if (accountReducer.type === accountActionType.GET_LIST_ACCOUNT_SUCCESS) {
            setListNewAccount(accountReducer.data?.list || []);
        }
    }, [accountReducer]);

    useEffect(() => {
        if (jobReducer.type === jobActionType.GET_LIST_JOB_SUCCESS) {
            setListNewJob(jobReducer.data?.list || []);
        }
    }, [jobReducer]);

    return (
        <Layouts classname="dashboard">
            <Row
                style={{
                    minHeight: '100%',
                }}
            >
                {loading && <LoadingData />}
                <Col xl={8} className="pr-md-2">
                    <WelCome
                        showSidebar={showSidebar}
                    />
                    <Overview
                        totalUserNormal={totalUserNormal}
                        totalFreelancer={totalFreelancer}
                        listNewAccount={listNewAccount}
                    />

                    <div className="wrap-component-overview-3 mt-3">
                        <div className="d-flex justify-content-between mb-3">
                            <div>
                                <h6 className="mb-0">Financial chart</h6>
                                <div className="text-overview-title">
                                    Revenue in the last 30 days
                                </div>
                            </div>
                            <div>
                                <Link
                                    to={Routes.ReportFinancial.path}
                                    className="dashboard-text-link"
                                >
                                    <span className="mr-1">
                                        See details
                                    </span>
                                    <FontAwesomeIcon
                                        icon={faLongArrowAltRight}
                                    />
                                </Link>
                            </div>
                        </div>
                        <MLineChart
                            statisticFinancial={statisticFinancial}
                        />
                        {/*<Barchart*/}
                        {/*    statisticFinancial={statisticFinancial}*/}
                        {/*/>*/}
                    </div>
                </Col>
                <Col xl={4} className="pl-md-2">
                    <div className="wrap-component-overview-2 d-none d-xl-block">
                        <Overview2
                            listTotalFreelancer={listTotalFreelancer}
                            listNewJob={listNewJob}
                            statisticJob={statisticJob}
                        />
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
                        <Overview2
                            listTotalFreelancer={listTotalFreelancer}
                            listNewJob={listNewJob}
                            statisticJob={statisticJob}
                        />
                    </Drawer>
                </Col>
            </Row>
        </Layouts>
    );
}

export default Dashboard;
