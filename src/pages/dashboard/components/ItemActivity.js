import {Col, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHistory} from "@fortawesome/free-solid-svg-icons";
import React from "react";

function ItemActivity() {
    return (
        <Row className="mt-2">
            <Col className="col-auto d-flex align-items-center pr-2">
                <span className="wrap-icon-history">
                     <FontAwesomeIcon
                         icon={faHistory}
                         className="text-gray"
                     />
                </span>
            </Col>
            <Col className="pl-2">
                <div>
                    <span className="text-uppercase text-primary font-weight-bold">
                        Admin{' '}
                    </span>
                    <span>đã truy cập:{' '}</span>
                    <span className="text-primary">
                        Dashboard
                    </span>
                </div>
                <div className="text-gray">
                    1 giờ trước
                </div>
            </Col>
        </Row>
    )
};

export default ItemActivity;
