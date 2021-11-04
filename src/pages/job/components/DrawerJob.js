import React, {useEffect, useState} from "react";
import {Avatar, Button, Col, Comment, Drawer, Empty, Form, Rate, Row, Tag} from 'antd';
import {useDispatch, useSelector} from "react-redux";
import {jobAction} from "../../../actions";
import {jobActionType} from "../../../actions/actionTypes";
import LoadingData from "../../../components/LoadingData";
import DrawerInfoAccount from "./DrawerInfoAccount";
import fire from "../../../firebase/config";
import Util from "../../../common/Util";
import moment from "moment";
import DateHelper from "../../../common/DateHelper";

function DrawerJob(props) {
    const dispatch = useDispatch();

    const jobReducer = useSelector((state) => state.jobReducer);

    const {visible, setVisible, typeForm, jobId} = props;

    // info job
    const [subject, setSubject] = useState('');
    const [salary, setSalary] = useState(0);
    const [renter, setRenter] = useState('');
    const [freelancer, setFreelancer] = useState('');

    const [description, setDescription] = useState('');
    const [rate, setRate] = useState(0);
    const [comment, setComment] = useState('');
    const [result, setResult] = useState('');
    const [status, setStatus] = useState(0);

    const [renterId, setRenterId] = useState('');
    const [freelancerId, setFreelancerId] = useState('');

    const [typeInfo, setTypeInfo] = useState(1);

    // chat
    const [message, setMessage] = useState([]);

    // info account
    const [visibleInfo, setVisibleInfo] = useState(false);

    // loading
    const [loading, setLoading] = useState(false);

    const onClose = () => {
        setVisible(false);
    };

    const renderTitle = () => {
        return <h5>Job information</h5>
    }

    const handleClickRenter = () => {
        setTypeInfo(1);
        setVisibleInfo(true);
    }

    const handleClickFreelancer = () => {
        setTypeInfo(2);
        setVisibleInfo(true);
    }

    const renderChat = (list) => {
        if (list.length === 0) {
            return (
                <Empty
                    image={Empty.PRESENTED_IMAGE_SIMPLE}
                />
            )
        }
        return list.map((item) => {
            if (item.username === 'system') {
                return (
                    <div key={item.id} className="d-flex justify-content-center">
                        <Comment
                            content={
                                <span>{item.text} - <small><i>{item.datetime ? moment(item.datetime).format(DateHelper.formatFull()) : ''}</i></small></span>
                            }
                            className="wrap-item-chat-2 mb-2"
                        />
                    </div>
                )
            }
            return (
                <div key={item.id} className={`${(item.username !== renter) ? 'd-flex justify-content-end' : ''}`}>
                    <Comment
                        author={
                            <span
                                className="mb-0 text-capitalize font-weight-bold"
                                style={{
                                    color: "black",
                                    fontSize: '14px',
                                }}
                            >
                                {item.username}
                            </span>
                        }
                        avatar={
                            <Avatar size={24}>
                                {Util.getValueByName(item.username)}
                            </Avatar>
                        }
                        content={
                            <span>{item.text}</span>
                        }
                        datetime={
                            <small><i>{item.datetime ? moment(item.datetime).format(DateHelper.formatFull()) : ''}</i></small>
                        }
                        className="wrap-item-chat mb-2"
                    />
                </div>
            )
        })
    }

    useEffect(() => {
        if (jobId && visible) {
            let paramDetail = {
                jobId: jobId,
            }
            dispatch(jobAction.detailJob(paramDetail));
            setMessage([]);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [jobId, visible]);

    useEffect(() => {
        if (jobReducer.type === jobActionType.DETAIL_JOB ) {
            setLoading(true);
        }

        if (jobReducer.type === jobActionType.DETAIL_JOB_SUCCESS ) {
            let data = jobReducer.data || {};
            setSubject(data.subject || '');
            setSalary(data.salary || 0);
            setRenter(data.account?.username || '');
            setRenterId(data.account?.id || '');
            setFreelancer(data.freelancer?.account?.username || '');
            setFreelancerId(data.freelancer?.account?.id || '');
            setDescription(data.description || '');
            setRate(data.rate || '');
            setComment(data.comment || '');
            setResult(data.result || '');
            setStatus(data.status || 0);
            setLoading(false);
        }

    }, [jobReducer]);

    useEffect(() => {
        if (visible && jobId) {
            const itemsRef = fire.database().ref('room/' + jobId);
            itemsRef.on('value', snapshot => {
                const data = snapshot.val() || {};
                let arrMes = [];
                Object.keys(data).forEach((key) => {
                    arrMes.push({
                        id: key,
                        username: data[key].username,
                        text: data[key].text,
                        datetime: data[key].datetime,
                    })
                })
                setMessage(arrMes);
            })
        }
    }, [visible, jobId]);

    return (
        <div>
            <Drawer
                title={renderTitle()}
                width={window.innerWidth > 768 ? '50%' : '100%'}
                onClose={onClose}
                visible={visible}
                bodyStyle={{ marginBottom: '2.5rem' }}
            >
                {(loading && typeForm === 'edit') && <LoadingData />}
                <Form layout="vertical" hideRequiredMark>
                    <Row gutter={16}>
                        <Col md={12}>
                            <div>
                                <span className="mr-1 font-weight-bold">
                                    Subject:
                                </span>
                                <span>
                                    {subject}
                                </span>
                            </div>
                        </Col>
                        <Col md={12}>
                            <div>
                                <span className="mr-1 font-weight-bold">
                                    Salary:
                                </span>
                                <span>
                                    {salary}
                                </span>
                            </div>
                        </Col>
                    </Row>
                    <Row gutter={16} className="mt-4">
                        <Col md={12}>
                            <div>
                                <span className="mr-1 font-weight-bold">
                                    Renter:
                                </span>
                                <span
                                    className="text-primary text-capitalize cursor-pointer"
                                    onClick={handleClickRenter}
                                >
                                    {renter}
                                </span>
                            </div>
                        </Col>
                        <Col md={12}>
                            <div>
                                <span className="mr-1 font-weight-bold">
                                    Freelancer:
                                </span>
                                <span
                                    className="text-primary text-capitalize cursor-pointer"
                                    onClick={handleClickFreelancer}
                                >
                                    {freelancer}
                                </span>
                            </div>
                        </Col>
                    </Row>
                    <Row gutter={16} className="mt-4">
                        <Col md={24}>
                            <div className="mt-2 mt-md-0">
                                <div className="mr-1 font-weight-bold">
                                    Description:
                                </div>
                                <div dangerouslySetInnerHTML={{__html: description}}>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <Row gutter={16} className="mt-4">
                        <Col md={12}>
                            <div className="mt-2 mt-md-0">
                                <span className="mr-1 font-weight-bold">
                                    Status:
                                </span>
                                <span>
                                    {status === 0 && (
                                        <Tag className="text-danger">
                                            Close
                                        </Tag>
                                    )}
                                    {status === 1 && (
                                        <Tag className="text-warning">
                                            Pending
                                        </Tag>
                                    )}
                                    {status === 2 && (
                                        <Tag className="text-primary">
                                            Doing
                                        </Tag>
                                    )}
                                    {status === 3 && (
                                        <Tag className="text-secondary">
                                            Review
                                        </Tag>
                                    )}
                                    {status === 4 && (
                                        <Tag className="text-success">
                                            Done
                                        </Tag>
                                    )}
                                </span>
                            </div>
                        </Col>
                        <Col md={12}>
                            <div className="mt-2 mt-md-0">
                                <span className="mr-1 font-weight-bold">
                                    Result:
                                </span>
                                <span>
                                    {result}
                                </span>
                            </div>
                        </Col>
                    </Row>

                    <Row gutter={16} className="mt-4">
                        <Col md={24}>
                            <div>
                                <div className="mr-1 font-weight-bold">
                                    Comment:
                                </div>
                                <div>
                                    <Rate allowHalf value={rate} disabled />
                                    <div dangerouslySetInnerHTML={{__html: comment}}>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <Row
                        gutter={16}
                        className="mt-4"
                        style={{
                            height: '60vh',
                            overflowY: 'auto',
                            padding: '0.75rem 0.5rem',
                            backgroundColor: '#f0f2f5',
                            borderRadius: '5px',
                        }}
                    >
                        <Col md={24}>
                            <div>
                                <div className="font-weight-bold h6 mb-0">
                                    Chat:
                                </div>
                                <div className="mt-3">
                                    {renderChat(message)}
                                </div>
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

            <DrawerInfoAccount
                visible={visibleInfo}
                setVisible={setVisibleInfo}
                typeInfo={typeInfo}
                jobId={jobId}
                renterName={renter}
                renterId={renterId}
                freelancerId={freelancerId}
            />
        </div>
    );
}

const WrappedDrawerJob = Form.create()(DrawerJob);

export default WrappedDrawerJob;

