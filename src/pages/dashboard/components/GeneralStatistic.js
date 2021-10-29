import {Card, Col, Row} from "antd";
import Stats from "./Stats";
import user from "../../../assets/images/icon-user.png";
import visitor from "../../../assets/images/icon-visitor.png";
import * as React from "react";
import department from "../../../assets/images/icon-department.png";
import tags from "../../../assets/images/icon-tags.png";

function GeneralStatistic(props) {
    const {generalInfo} = props;

    const totalStaff = generalInfo.tongCanBoTrongDonVi || 0;
    const totalNewStaff = generalInfo.tongCanBoMoiTrongThang || 0;
    const totalDepartment = generalInfo.tongPhongBanTrongDonVi || 0;
    const totalPosition = generalInfo.tongChucVu || 0;

    return(
        <Row gutter={16}>
            <Col xs={24} sm={12} lg={6} className="custom-statcards">
                <Card
                    bordered={false}
                    className="sale"
                    bodyStyle={{padding: '20px'}}
                >
                    <Stats
                        icon={user}
                        text="Tổng số cán bộ"
                        number={totalStaff}
                    />
                </Card>
            </Col>
            <Col xs={24} sm={12} lg={6} className="custom-statcards">
                <Card
                    bordered={false}
                    className="order"
                    bodyStyle={{padding: '20px'}}
                >
                    <Stats
                        icon={visitor}
                        text="Cán bộ mới"
                        number={totalNewStaff}
                    />
                </Card>
            </Col>
            <Col xs={24} sm={12} lg={6} className="custom-statcards">
                <Card
                    bordered={false}
                    bodyStyle={{padding: '20px'}}
                    className="user"
                >
                    <Stats
                        icon={department}
                        text="Phòng ban"
                        number={totalDepartment}
                    />
                </Card>
            </Col>
            <Col xs={24} sm={12} lg={6} className="custom-statcards">
                <Card
                    bordered={false}
                    bodyStyle={{padding: '20px'}}
                    className="visitor"
                >
                    <Stats
                        icon={tags}
                        text="Số chức vụ"
                        number={totalPosition}
                    />
                </Card>
            </Col>
        </Row>
    )
};

export default GeneralStatistic;
