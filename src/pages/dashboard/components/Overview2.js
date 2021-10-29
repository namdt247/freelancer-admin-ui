import React from "react";
import {faLongArrowAltRight, faSquare} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
// import {Col, Row} from "react-bootstrap";
// import ItemActivity from "./ItemActivity";
import NoData from "../../../components/NoData";

function Overview2() {
    return (
        <>
            <div className="wrap-overview">
                <h5 className="text-center">
                    Overview
                </h5>
                {/*<Row className="mt-3">*/}
                {/*    <Col className="text-center">*/}
                {/*        <div className="font-weight-bold">*/}
                {/*            10*/}
                {/*        </div>*/}
                {/*        <div className="text-overview-content">*/}
                {/*            Tổng cán bộ*/}
                {/*        </div>*/}
                {/*    </Col>*/}
                {/*    <Col className="text-center">*/}
                {/*        <div className="font-weight-bold">*/}
                {/*            10*/}
                {/*        </div>*/}
                {/*        <div className="text-overview-content">*/}
                {/*            Cán bộ đang hoạt động*/}
                {/*        </div>*/}
                {/*    </Col>*/}
                {/*</Row>*/}
                {/*<Row className="mt-3">*/}
                {/*    <Col className="text-center">*/}
                {/*        <div className="font-weight-bold">*/}
                {/*            10*/}
                {/*        </div>*/}
                {/*        <div className="text-overview-content">*/}
                {/*            Cán bộ thuyên chuyển*/}
                {/*        </div>*/}
                {/*    </Col>*/}
                {/*    <Col className="text-center">*/}
                {/*        <div className="font-weight-bold">*/}
                {/*            10*/}
                {/*        </div>*/}
                {/*        <div className="text-overview-content">*/}
                {/*            Phòng ban*/}
                {/*        </div>*/}
                {/*    </Col>*/}
                {/*</Row>*/}
            </div>
            <div>
                <h6 className="wrap-title-overview mt-1">
                    100 freelancers
                </h6>
                <div className="d-flex justify-content-between wrap-item-overview">
                    <div>
                        <FontAwesomeIcon
                            icon={faSquare}
                            className="mr-2 info-icon-color-7"
                        />
                        PHP
                    </div>
                    <div>
                        12 freelancers
                    </div>
                </div>
                <div className="d-flex justify-content-between wrap-item-overview">
                    <div>
                        <FontAwesomeIcon
                            icon={faSquare}
                            className="mr-2 info-icon-color-7"
                        />
                        Java
                    </div>
                    <div>
                        12 freelancers
                    </div>
                </div>
                <div className="d-flex justify-content-between wrap-item-overview">
                    <div>
                        <FontAwesomeIcon
                            icon={faSquare}
                            className="mr-2 info-icon-color-7"
                        />
                        C#
                    </div>
                    <div>
                        12 freelancers
                    </div>
                </div>
                <div className="d-flex justify-content-between wrap-item-overview">
                    <div>
                        <FontAwesomeIcon
                            icon={faSquare}
                            className="mr-2 info-icon-color-7"
                        />
                        Android
                    </div>
                    <div>
                        12 freelancers
                    </div>
                </div>
            </div>
            <div className="wrap-activity-history">
                <div className="d-flex justify-content-between my-3">
                    <div>
                        <h6>Activity log</h6>
                    </div>
                    <div>
                        <Link
                            to={'#'}
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
                <div>
                    <NoData/>
                    {/*<ItemActivity />*/}
                    {/*<ItemActivity />*/}
                    {/*<ItemActivity />*/}
                    {/*<ItemActivity />*/}
                    {/*<ItemActivity />*/}
                </div>
            </div>
        </>
    )
};

export default Overview2
