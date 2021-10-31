import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInfoCircle, faUser} from "@fortawesome/free-solid-svg-icons";
import {Col, Row} from "react-bootstrap";
import moment from "moment";
import DateHelper from "../../../common/DateHelper";
import {Routes} from "../../../common/Routes";
import {Link} from "react-router-dom";

function ItemOverviewStaff(props) {
    const {item} = props;

    let fullName = item.username || '';
    let createdAt = item.createdAt ? moment(item.createdAt).format(DateHelper.formatFullDay()) : ''

    return (
        <Row className="py-2 mx-0 wrap-item-staff">
            <Col className="col-auto d-flex align-items-center pl-0 pr-2">
                <span className="wrap-activity-user info-icon-color-9">
                    <FontAwesomeIcon
                        icon={faUser}
                    />
                </span>
            </Col>
            <Col className="px-2">
                <div className="font-weight-bold">
                    {fullName}
                </div>
                <div className="text-gray">
                    <span style={{fontWeight: '500'}}>
                        Created at:{' '}
                    </span>
                    <span>
                        {createdAt}
                    </span>
                </div>
            </Col>
            <Col className="col-auto d-flex align-items-center pr-0 pl-2">
                <Link
                    to={Routes.ListAccountNormal.path}
                >
                    <span className="info-icon-color-8 wrap-activity-user-info">
                        <FontAwesomeIcon
                            icon={faInfoCircle}
                        />
                    </span>
                </Link>
            </Col>
        </Row>
    )
};

export default ItemOverviewStaff;
