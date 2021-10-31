import React, {useEffect, useState} from "react";
import {Button, Col, Drawer, Form, Rate, Row, Tag} from 'antd';
import {useDispatch, useSelector} from "react-redux";
import {jobAction} from "../../../actions";
import {jobActionType} from "../../../actions/actionTypes";
import LoadingData from "../../../components/LoadingData";

function DrawerJob(props) {
    const dispatch = useDispatch();

    const jobReducer = useSelector((state) => state.jobReducer);
    console.log(jobReducer)

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

    // loading
    const [loading, setLoading] = useState(false);

    const onClose = () => {
        setVisible(false);
    };

    const renderTitle = () => {
        return <h5>Job information</h5>
    }

    useEffect(() => {
        if (jobId && visible) {
            let paramDetail = {
                jobId: jobId,
            }
            dispatch(jobAction.detailJob(paramDetail));
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
            setFreelancer(data.freelancer?.account?.username || '');
            setDescription(data.description || '');
            setRate(data.rate || '');
            setComment(data.comment || '');
            setResult(data.result || '');
            setStatus(data.status || 0);
            setLoading(false);
        }

    }, [jobReducer]);

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
                                <span>
                                    {renter}
                                </span>
                            </div>
                        </Col>
                        <Col md={12}>
                            <div>
                                <span className="mr-1 font-weight-bold">
                                    Freelancer:
                                </span>
                                <span>
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
                                    <div>
                                        {comment}
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <Row gutter={16} className="mt-4">
                        <Col md={24}>
                            <div>
                                <div className="mr-1 font-weight-bold">
                                    Chat:
                                </div>
                                <div>
                                    Chat
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
        </div>
    );
}

const WrappedDrawerJob = Form.create()(DrawerJob);

export default WrappedDrawerJob;

