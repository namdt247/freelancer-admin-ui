import React from "react";
import {faLongArrowAltRight, faSquare} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import ItemActivity from "./ItemActivity";
import {Routes} from "../../../common/Routes";
import {Row, Col} from "react-bootstrap";

function Overview2(props) {
    const {listTotalFreelancer, listNewJob, statisticJob} = props;

    const totalJob = statisticJob.totalJob || 0;
    const totalJobClosed = statisticJob.totalJobClosed || 0;
    const totalJobDoing = statisticJob.totalJobDoing || 0;
    const totalJobDone = statisticJob.totalJobDone || 0;

    const renderListNewJob = (list) => {
        return list.map((item) => {
            return (
                <ItemActivity
                    key={item.id}
                    item={item}
                />
            )
        })
    }

    const calculatorLanguage = (value) => {
        let total = 0;
        listTotalFreelancer.forEach((item) => {
            if (item.language?.includes(value)) {
                total++;
            }
        })
        return total;
    }

    const calculatorLanguageOther = (value1, value2, value3) => {
        let total = 0;
        listTotalFreelancer.forEach((item) => {
            if (
                !item.language?.includes(value1) &&
                !item.language?.includes(value2) &&
                !item.language?.includes(value3)
            ) {
                total++;
            }
        })
        return total;
    }

    return (
        <>
            <div className="wrap-overview">
                <h5 className="text-center">
                    Overview
                </h5>
                <Row className="mt-3">
                    <Col className="text-center">
                        <div className="font-weight-bold">
                            {totalJob}
                        </div>
                        <div className="text-overview-content">
                            Total job
                        </div>
                    </Col>
                    <Col className="text-center">
                        <div className="font-weight-bold">
                            {totalJobClosed}
                        </div>
                        <div className="text-overview-content">
                            Job closed
                        </div>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col className="text-center">
                        <div className="font-weight-bold">
                            {totalJobDoing}
                        </div>
                        <div className="text-overview-content">
                            Job doing
                        </div>
                    </Col>
                    <Col className="text-center">
                        <div className="font-weight-bold">
                            {totalJobDone}
                        </div>
                        <div className="text-overview-content">
                            Jon done
                        </div>
                    </Col>
                </Row>
            </div>
            <div>
                <h6 className="wrap-title-overview mt-1">
                    {listTotalFreelancer.length} freelancers
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
                        {calculatorLanguage('PHP')} freelancers
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
                        {calculatorLanguage('Java')} freelancers
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
                        {calculatorLanguage('C#')} freelancers
                    </div>
                </div>
                <div className="d-flex justify-content-between wrap-item-overview">
                    <div>
                        <FontAwesomeIcon
                            icon={faSquare}
                            className="mr-2 info-icon-color-7"
                        />
                        Other
                    </div>
                    <div>
                        {calculatorLanguageOther('PHP', 'Java', 'C#')} freelancers
                    </div>
                </div>
            </div>
            <div className="wrap-activity-history">
                <div className="d-flex justify-content-between my-3">
                    <div>
                        <h6 className="mb-0">
                            Job
                        </h6>
                        <div className="text-overview-title">
                            List new job
                        </div>
                    </div>
                    <div>
                        <Link
                            to={Routes.ListJob.path}
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
                    {renderListNewJob(listNewJob)}
                </div>
            </div>
        </>
    )
};

export default Overview2
