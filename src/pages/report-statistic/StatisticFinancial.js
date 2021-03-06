import * as React from "react";
import {useEffect, useState} from "react";
import {Breadcrumb, Button, Card, Col, DatePicker, Divider, Empty, Row} from "antd";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome} from "@fortawesome/free-solid-svg-icons";
import {useDispatch, useSelector} from "react-redux";
import moment from "moment";
import DateHelper from "../../common/DateHelper";
import {statisticAction} from "../../actions";
import {statisticActionType} from "../../actions/actionTypes";
import LoadingData from "../../components/LoadingData";
import {Routes} from "../../common/Routes";
import Layouts from "../../components/Layouts";
import {notiMessage} from "../../common/Message";
import MLineChart from "../dashboard/components/MLineChart";

const {RangePicker} = DatePicker;

function StatisticFinancial() {
    const dispatch = useDispatch();

    const statisticReducer = useSelector((state) => state.statisticReducer);

    const [statisticFinancial, setStatisticFinancial] = useState([]);

    // loading
    const [loading, setLoading] = useState(false);
    const [isFocusPage, setIsFocusPage] = useState(false);

    // search
    const [time, setTime] = useState('');

    let params = {
        startDate: time ? moment(time[0]).format(DateHelper.formatFullDay2()) : '',
        endDate: time ? moment(time[1]).format(DateHelper.formatFullDay2()) : '',
    }

    const titlePage = () => {
        return (
            <div className="d-md-flex justify-content-between mb-3">
                <div>
                    <h4 className="mb-0">Financial management</h4>
                </div>
            </div>
        )
    }

    const handleChangeTime = (value) => {
        setTime(value);
    }

    const handleSearch = () => {
        if (time) {
            dispatch(statisticAction.statisticFinancial(params));
            setIsFocusPage(true);
        } else {
            notiMessage(300, 'Please select time');
        }
    }

    const calcTotalRevenue = (list) => {
        let totalRevenue = 0;
        list.forEach((item) => {
            totalRevenue += item[1];
        })
        return totalRevenue;
    }

    useEffect(() => {
        if (statisticReducer.type === statisticActionType.GET_STATISTIC_FINANCIAL) {
            setLoading(true);
        }
        if (
            statisticReducer.type === statisticActionType.GET_STATISTIC_FINANCIAL_SUCCESS &&
            isFocusPage
        ) {
            setStatisticFinancial(statisticReducer.data || []);
            setLoading(false);
            setIsFocusPage(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [statisticReducer]);

    return (
        <Layouts>
            <div className="mb-1">
                <Breadcrumb>
                    <Breadcrumb.Item href={Routes.Dashboard.path}>
                        <FontAwesomeIcon
                            icon={faHome}
                            className="mr-1"
                        />
                        <span>Home</span>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <span>Financial management</span>
                    </Breadcrumb.Item>
                </Breadcrumb>
            </div>

            {titlePage()}
            <Card
                bordered={false}
                className="wrap-main-component"
            >
                {loading && <LoadingData />}
                <Row gutter={16} className="mb-custom-1">
                    <Col md={8} className="search">
                        <RangePicker
                            ranges={{
                                '7 days ago': [moment().add(-6, 'days'), moment()],
                                '30 days ago': [moment().add(-29, 'days'), moment()],
                            }}
                            onChange={handleChangeTime}
                            className="w-100"
                        />
                    </Col>
                    <Col md={16} className="mt-md-0 mt-2">
                        <Button type="primary" className="btn-search" onClick={handleSearch}>
                            Search
                        </Button>
                    </Col>
                </Row>
                <Divider />

                {statisticFinancial.length > 0
                    ? (
                        <>
                            <div>
                                <span>
                                    <span className="mr-1 h5 mb-0">Total revenue:</span>
                                    <span className="text-gray h6">{calcTotalRevenue(statisticFinancial)}$</span>
                                </span>
                            </div>
                            <MLineChart
                                statisticFinancial={statisticFinancial}
                                type={1}
                            />
                        </>
                    ) : (
                        <Empty
                            image={Empty.PRESENTED_IMAGE_SIMPLE}
                        />
                    )
                }
            </Card>
        </Layouts>
    );
};

export default StatisticFinancial;
