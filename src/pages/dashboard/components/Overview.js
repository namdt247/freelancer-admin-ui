import React from "react";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLongArrowAltRight, faSquare} from "@fortawesome/free-solid-svg-icons";
import ItemOverviewStaff from "./ItemOverviewStaff";
import {Col, ProgressBar, Row} from "react-bootstrap";

function Overview(props) {
    const {listStaff} = props;

    const renderListStaff = (list = []) => {
        return list.map((item) => {
            return (
                <ItemOverviewStaff
                    key={item.maCanBo}
                    item={item}
                />
            )
        })
    }

    return (
        <Row>
            <Col className="col-lg-6 col-12 pr-lg-2">
                <div className="wrap-component-overview">
                    <div className="d-flex justify-content-between mb-3">
                        <div>
                            <h6 className="mb-0">
                                Condition user
                            </h6>
                            <div className="text-overview-title">
                                Condition user of staff on the system
                            </div>
                        </div>
                        <div>
                            <Link
                                to={''}
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
                    {/*<div className="d-flex align-items-center justify-content-center" style={{*/}
                    {/*    height: "80%"*/}
                    {/*}}>*/}
                    {/*    <NoData/>*/}
                    {/*</div>*/}
                    <div>
                        <h4>100</h4>
                        <ProgressBar>
                            <ProgressBar className="bg-primary" now={60} key={1} />
                            <ProgressBar className="bg-warning" now={40} key={2} />
                            {/*<ProgressBar className="bg-success" now={40} key={3} />*/}
                        </ProgressBar>
                        <div className="mt-4">
                            <div className="d-flex justify-content-between wrap-item-progressbar">
                                <div>
                                    <FontAwesomeIcon
                                        icon={faSquare}
                                        className="mr-2 text-primary"
                                    />
                                    Normal user
                                </div>
                                <div>
                                    60 accounts
                                </div>
                            </div>
                            <div className="d-flex justify-content-between wrap-item-progressbar">
                                <div>
                                    <FontAwesomeIcon
                                        icon={faSquare}
                                        className="mr-2 text-warning"
                                    />
                                    Freelancer
                                </div>
                                <div>
                                    40 accounts
                                </div>
                            </div>
                            {/*<div className="d-flex justify-content-between wrap-item-progressbar">*/}
                            {/*    <div>*/}
                            {/*        <FontAwesomeIcon*/}
                            {/*            icon={faSquare}*/}
                            {/*            className="mr-2 text-success"*/}
                            {/*        />*/}
                            {/*        Nghỉ hưu*/}
                            {/*    </div>*/}
                            {/*    <div>*/}
                            {/*        10 cán bộ*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>
            </Col>
            <Col className="col-lg-6 col-12 pl-lg-2 mt-lg-0 mt-3">
                <div className="wrap-component-overview">
                    <div className="d-flex justify-content-between mb-3">
                        <div>
                            <h6 className="mb-0">Freelancer</h6>
                            <div className="text-overview-title">
                                List new freelancer
                            </div>
                        </div>
                        <div>
                            <Link
                                to={''}
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
                    {renderListStaff(listStaff)}
                </div>
            </Col>
        </Row>
    )
};

export default Overview;
