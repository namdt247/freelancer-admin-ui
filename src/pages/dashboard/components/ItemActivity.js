import {Col, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHistory, faLaptop} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import moment from "moment";
import DateHelper from "../../../common/DateHelper";

function ItemActivity(props) {
    const {item} = props;

    const subject = item.subject || '';
    const createdAt = item.created_at || '';

    return (
        <Row className="mt-2">
            <Col className="col-auto d-flex align-items-center pr-2">
                <span className="wrap-icon-history">
                     <FontAwesomeIcon
                         icon={faLaptop}
                         className="text-gray"
                     />
                </span>
            </Col>
            <Col className="pl-2">
                <div>
                    <span className="text-primary">
                        {subject}
                    </span>
                </div>
                <div className="text-gray">
                    {createdAt ? moment(createdAt).format(DateHelper.formatFull()) : ''}
                </div>
            </Col>
        </Row>
    )
};

export default ItemActivity;
