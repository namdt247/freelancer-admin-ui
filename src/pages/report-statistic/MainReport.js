import React from "react";
import {Breadcrumb, Card} from "antd";
import {Routes} from "../../common/Routes";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome} from "@fortawesome/free-solid-svg-icons";
import Layouts from "../../components/Layouts";
import ReportItem from "./components/ReportItem";
import report2 from "../../assets/images/report/contract.png";
import {Link} from "react-router-dom";
import {Col, Row} from "react-bootstrap";

function MainReport() {

    return (
        <Layouts>
            <div className="mb-3">
                <Breadcrumb>
                    <Breadcrumb.Item href={Routes.Dashboard.path}>
                        <FontAwesomeIcon
                            icon={faHome}
                            className="mr-1"
                        />
                        <span>Home</span>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <span>Statistical report</span>
                    </Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div>
                <div>
                    <h4 className="mb-0">List report</h4>
                </div>
                <div className="mt-1">
                    <h6 className="mb-0 font-weight-normal text-gray">
                        Select a report type you want to view
                    </h6>
                </div>
            </div>
            <Row className="wrap-parent-item-report">
                <Col className="col-md-4 col-12 pr-md-2">
                    <Link to={Routes.ReportFinancial.path}>
                        <Card
                            bordered={false}
                            bodyStyle={{padding: 0}}
                            className="p-2 wrap-item-report h-100"
                        >
                            <ReportItem
                                text1="Financial report"
                                text2="Statistical financial information"
                                image={report2}
                            />
                        </Card>
                    </Link>
                </Col>
                {/*<Col className="mt-md-0 mt-3 col-md-4 col-12 pl-md-2">*/}
                {/*    <Link to={'#'} onClick={handleClick}>*/}
                {/*        <Card*/}
                {/*            bordered={false}*/}
                {/*            bodyStyle={{padding: 0}}*/}
                {/*            className="p-2 wrap-item-report h-100"*/}
                {/*        >*/}
                {/*            <ReportItem*/}
                {/*                text1="Financial report"*/}
                {/*                text2="Statistical financial information"*/}
                {/*                image={report2}*/}
                {/*            />*/}
                {/*        </Card>*/}
                {/*    </Link>*/}
                {/*</Col>*/}
            </Row>
        </Layouts>
    )
};

export default MainReport;
