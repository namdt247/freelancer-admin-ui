import React, {useEffect, useState} from "react";
import {Button, Col, Drawer, Form, Row, Tag, Rate, Avatar} from 'antd';
import {useDispatch, useSelector} from "react-redux";
import {freelancerAction} from "../../../actions";
import {freelancerActionType} from "../../../actions/actionTypes";
import LoadingData from "../../../components/LoadingData";
import Util from "../../../common/Util";

function DrawerFreelancer(props) {
    const dispatch = useDispatch();

    const freelancerReducer = useSelector((state) => state.freelancerReducer);

    const {visible, setVisible, typeForm, freelancerId} = props;

    // info freelancer
    const [fullName, setFullName] = useState('');
    const [gender, setGender] = useState(0);
    const [avatar, setAvatar] = useState('');
    const [address, setAddress] = useState('');
    const [averageIncome, setAverageIncome] = useState(0);
    const [description, setDescription] = useState('');
    const [experience, setExperience] = useState('');
    const [language, setLanguage] = useState('');
    const [phone, setPhone] = useState('');
    const [rate, setRate] = useState(0);
    const [totalJobDone, setTotalJobDone] = useState(0);
    const [totalEarning, setTotalEarning] = useState(0);

    // loading
    const [loading, setLoading] = useState(false);

    const onClose = () => {
        setVisible(false);
    };

    const renderTitle = () => {
        return <h5>Freelancer information</h5>
    }

    useEffect(() => {
        if (freelancerId && visible) {
            let paramDetail = {
                freelancerId: freelancerId,
            }
            dispatch(freelancerAction.detailFreelancer(paramDetail));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [freelancerId, visible]);

    useEffect(() => {
        if (freelancerReducer.type === freelancerActionType.DETAIL_FREELANCER ) {
            setLoading(true);
        }

        if (freelancerReducer.type === freelancerActionType.DETAIL_FREELANCER_SUCCESS ) {
            let data = freelancerReducer.data || {};
            setFullName(data.account?.username || '');
            setAddress(data.address || '');
            setAverageIncome(data.averageIncome || 0);
            setDescription(data.description || '');
            setExperience(data.experience || '');
            setLanguage(data.language || '');
            setPhone(data.phone || '');
            setRate(data.rate || 0);
            setAvatar(data.thumbnail || '');
            setTotalJobDone(data.totalJobDone || 0);
            setTotalEarning(data.totalEarning || 0);
            setGender(data.gender || 0);
            setLoading(false);
        }

    }, [freelancerReducer]);

    return (
        <div>
            <Drawer
                title={renderTitle()}
                width={window.innerWidth > 768 ? '50%' : '100%'}
                onClose={onClose}
                visible={visible}
                bodyStyle={{ marginBottom: 20 }}
            >
                {(loading && typeForm === 'edit') && <LoadingData />}
                <Form layout="vertical" hideRequiredMark>
                    <Row gutter={16}>
                        <Col md={12}>
                            <div className="mt-2 mt-md-0 d-inline-flex align-items-center">
                                <div>
                                    {avatar ? (
                                        <Avatar size={200} src={avatar} />
                                    ) : (
                                        <Avatar size={200} style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>
                                            {Util.getValueByName(fullName)}
                                        </Avatar>
                                    )}
                                </div>
                                <div className="ml-3">
                                    <div className="text-uppercase h4 mb-1">
                                        {fullName}
                                    </div>
                                    <div className="text-lowercase text-gray">
                                        {gender}
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row gutter={16} className="mt-4">
                        <Col md={12}>
                            <div>
                                <span className="mr-1 font-weight-bold">
                                    Fullname:
                                </span>
                                <span>
                                    {fullName}
                                </span>
                            </div>
                        </Col>
                        <Col md={12}>
                            <div>
                                <span className="mr-1 font-weight-bold">
                                    Phone:
                                </span>
                                <span>
                                    {phone}
                                </span>
                            </div>
                        </Col>
                    </Row>
                    <Row gutter={16} className="mt-4">
                        <Col md={12}>
                            <div className="mt-2 mt-md-0">
                                <span className="mr-1 font-weight-bold">
                                    Address:
                                </span>
                                <span>
                                    {address}
                                </span>
                            </div>
                        </Col>
                        <Col md={12}>
                            <div>
                                <span className="mr-1 font-weight-bold">
                                    Experience:
                                </span>
                                <span>
                                    {experience}
                                </span>
                            </div>
                        </Col>
                    </Row>

                    <Row gutter={16} className="mt-4">
                        <Col md={12}>
                            <div className="mt-2 mt-md-0">
                                <span className="mr-1 font-weight-bold">
                                    Description:
                                </span>
                                <span>
                                    {description}
                                </span>
                            </div>
                        </Col>
                        <Col md={12}>
                            <div>
                                <span className="mr-1 font-weight-bold">
                                    Average income:
                                </span>
                                <span>
                                    {averageIncome}
                                </span>
                            </div>
                        </Col>
                    </Row>

                    <Row gutter={16} className="mt-4">
                        <Col md={12}>
                            <div className="mt-2 mt-md-0">
                                <span className="mr-1 font-weight-bold">
                                    Total job success:
                                </span>
                                <span>
                                    {totalJobDone}
                                </span>
                            </div>
                        </Col>
                        <Col md={12}>
                            <div>
                                <span className="mr-1 font-weight-bold">
                                    Total income:
                                </span>
                                <span>
                                    {totalEarning}
                                </span>
                            </div>
                        </Col>
                    </Row>

                    <Row gutter={16} className="mt-4">
                        <Col md={12}>
                            <div>
                                <span className="mr-1 font-weight-bold">
                                    Language:
                                </span>
                                <span>
                                    {language.split(',').map((item) => {
                                        return (<Tag color='geekblue'>{item}</Tag>)
                                    })}
                                </span>
                            </div>
                        </Col>
                        <Col md={12}>
                            <div className="mt-2 mt-md-0 font-weight-bold">
                                <span className="mr-1 font-weight-bold">
                                    Rate:
                                </span>
                                <span>
                                    <Rate allowHalf value={rate} disabled={true} />
                                </span>
                            </div>
                        </Col>
                    </Row>
                </Form>
                <div
                    style={{
                        position: 'absolute',
                        right: 0,
                        bottom: 0,
                        width: '100%',
                        borderTop: '1px solid #e9e9e9',
                        padding: '10px 16px',
                        background: '#fff',
                        textAlign: 'right',
                    }}
                >
                    <Button onClick={onClose} style={{ marginRight: 8 }}>
                        Back
                    </Button>
                </div>
            </Drawer>
        </div>
    );
}

const WrappedDrawerFreelancer = Form.create()(DrawerFreelancer);

export default WrappedDrawerFreelancer;

