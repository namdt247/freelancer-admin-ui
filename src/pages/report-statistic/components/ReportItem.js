import React from "react";
import {Col, Row} from "react-bootstrap";
import report1 from "../../../assets/images/report/department.png";

function ReportItem(props) {
    const {
        text1 = 'Báo cáo danh sách cán bộ theo từng phòng ban',
        text2 = 'Thống kê danh sách thông tin cán bộ theo phòng ban',
        image = report1,
    } = props;
    return (
        <Row>
            <Col className="col-5 d-flex align-items-center pr-2">
                <img src={image} alt="img-report" className="img-fluid img-report"/>
            </Col>
            <Col className="col-7 pl-2 py-2">
                <div className="m-auto">
                    <h6 className="font-weight-bold">
                        {text1}
                    </h6>
                    <p className="mb-0 wrap-item-report-content">
                        {text2}
                    </p>
                </div>
            </Col>
        </Row>
    )
}

export default ReportItem;
