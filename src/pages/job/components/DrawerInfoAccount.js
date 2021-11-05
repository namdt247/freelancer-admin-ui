import React, {useEffect, useState} from "react";
import {Avatar, Button, Col, Drawer, Form, Rate, Row, Tag} from 'antd';
import {useDispatch, useSelector} from "react-redux";
import {freelancerAction, jobAction} from "../../../actions";
import {freelancerActionType, jobActionType} from "../../../actions/actionTypes";
import LoadingData from "../../../components/LoadingData";
import Util from "../../../common/Util";
import {Divider} from "antd/es";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";

function DrawerInfoAccount(props) {
    const {
        visible, setVisible, typeInfo, freelancerId, renterId, renterName
    } = props;

    const dispatch = useDispatch();

    const freelancerReducer = useSelector((state) => state.freelancerReducer);
    const jobReducer = useSelector((state) => state.jobReducer);

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

    // list job
    const [listJob, setListJob] = useState([]);

    // loading
    const [loading, setLoading] = useState(false);

    const onClose = () => {
        setVisible(false);
    };

    const renderTitle = () => {
        if (typeInfo === 1) {
            return <h5>Account information</h5>
        }
        return <h5>Freelancer information</h5>
    }

    const renderCommentJob = (list) => {
        return list.map((item) => {
            return (
                <div key={item.id}>
                    <div className="mb-1">
                        <div>
                            <span className="h6 text-primary">{item.subject}</span>
                            {' - '}
                            <small>{item.salary || ''}$</small>
                        </div>
                        <div>
                            <Rate allowHalf value={item.rate || 0} disabled={true} />
                            <div>
                                <i>
                                    <div dangerouslySetInnerHTML={{__html: item.comment}}>
                                    </div>
                                </i>
                            </div>
                        </div>
                    </div>
                    <Divider />
                </div>
            )
        })
    }

    useEffect(() => {
        if (typeInfo === 1 && visible) {
            let paramDetail = {
                accountId: renterId,
            }
            dispatch(jobAction.listJobDoneByAccountId(paramDetail))
        }
        if (typeInfo !== 1 && visible) {
            let paramDetail = {
                freelancerId: freelancerId,
            }
            dispatch(freelancerAction.detailFreelancer(paramDetail));
            dispatch(jobAction.listJobDoneByFreelancerId(paramDetail))
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [typeInfo, visible]);

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

    useEffect(() => {
        if (
            jobReducer.type === jobActionType.LIST_JOB_DONE_BY_FREELANCER_ID_SUCCESS ||
            jobReducer.type === jobActionType.LIST_JOB_DONE_BY_ACCOUNT_ID_SUCCESS
        ) {
            setListJob(jobReducer.data || []);
        }
    }, [jobReducer]);

    return (
        <div>
            <Drawer
                title={renderTitle()}
                width={window.innerWidth > 768 ? (window.innerWidth > 1400 ? '40%' : '50%') : '100%'}
                onClose={onClose}
                visible={visible}
                bodyStyle={{ marginBottom: 20 }}
            >
                {(loading) && <LoadingData />}
                <Form layout="vertical" hideRequiredMark>
                    {typeInfo === 1 ? (
                        <>
                            <Row gutter={16}>
                                <Col md={12}>
                                    <div className="mt-2 mt-md-0">
                                        <span className="mr-1 font-weight-bold">
                                            Renter:
                                        </span>
                                        <span className="text-capitalize">
                                            {renterName}
                                        </span>
                                    </div>
                                </Col>
                            </Row>
                        </>
                    ) : (
                        <>
                            <Row gutter={16}>
                                <Col md={24}>
                                    <div className="mt-2 mt-md-0 d-inline-flex align-items-center">
                                        <div>
                                            {avatar ? (
                                                <Avatar size={100} src={avatar} />
                                            ) : (
                                                <Avatar size={100} style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>
                                                    {Util.getValueByName(fullName)}
                                                </Avatar>
                                            )}
                                        </div>
                                        <div className="ml-3">
                                            <div className="text-capitalize h4 mb-1">
                                                {fullName}
                                            </div>
                                            <div className="font-weight-bold mb-0 text-gray">
                                                <span className="mr-1">
                                                    <FontAwesomeIcon
                                                        icon={faMapMarkerAlt}
                                                        size={'sm'}
                                                    />
                                                </span>
                                                <span>
                                                    {address}
                                                </span>
                                            </div>
                                            <div>
                                                <Rate allowHalf value={rate} disabled={true} />
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
                                            Gender:
                                        </span>
                                        <span>
                                            {gender}
                                        </span>
                                    </div>
                                </Col>
                            </Row>
                            <Row gutter={16} className="mt-4">
                                <Col md={12}>
                                    <div className="mt-2 mt-md-0">
                                        <span className="mr-1 font-weight-bold">
                                            Phone:
                                        </span>
                                        <span>
                                            {phone}
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
                                        <div dangerouslySetInnerHTML={{__html: description}}>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={12}>
                                    <div>
                                        <span className="mr-1 font-weight-bold">
                                            Average income:
                                        </span>
                                        <span>
                                            {averageIncome}$
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
                                            {totalEarning}$
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
                                            {language.split(',').map((item, index) => {
                                                return (
                                                    <Tag
                                                        key={index}
                                                        color='geekblue'
                                                    >
                                                        {item}
                                                    </Tag>
                                                )
                                            })}
                                        </span>
                                    </div>
                                </Col>
                                {/*<Col md={12}>*/}
                                {/*    <div className="mt-2 mt-md-0 font-weight-bold">*/}
                                {/*        <span className="mr-1 font-weight-bold">*/}
                                {/*            Rate:*/}
                                {/*        </span>*/}
                                {/*        <span>*/}
                                {/*            <Rate allowHalf value={rate} disabled={true} />*/}
                                {/*        </span>*/}
                                {/*    </div>*/}
                                {/*</Col>*/}
                            </Row>
                        </>
                    )}
                    <div className="mt-4">
                        {renderCommentJob(listJob)}
                    </div>
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

export default DrawerInfoAccount;

