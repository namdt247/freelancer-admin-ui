import React from "react";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLongArrowAltRight, faSquare} from "@fortawesome/free-solid-svg-icons";
import ItemOverviewStaff from "./ItemOverviewStaff";
import {Col, ProgressBar, Row} from "react-bootstrap";

function Overview(props) {
    const {totalUserNormal, totalFreelancer, listNewAccount} = props;

    const renderListStaff = (list = []) => {
        return list.map((item) => {
            return (
                <ItemOverviewStaff
                    key={item.id}
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
                    </div>
                    <div>
                        <h4>{totalUserNormal + totalFreelancer}</h4>
                        <ProgressBar>
                            <ProgressBar className="bg-primary"
                                         now={(totalUserNormal/(totalUserNormal + totalFreelancer)) * 100}
                                         key={1}
                            />
                            <ProgressBar
                                className="bg-warning"
                                now={(totalFreelancer/(totalUserNormal + totalFreelancer)) * 100}
                                key={2}
                            />
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
                                    {totalUserNormal} accounts
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
                                    {totalFreelancer} accounts
                                </div>
                            </div>
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
                    {renderListStaff(listNewAccount)}
                </div>
            </Col>
        </Row>
    )
};

export default Overview;
