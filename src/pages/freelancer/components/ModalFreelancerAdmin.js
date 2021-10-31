import React, {useEffect, useState} from "react";
import {Button, Col, Form, Input, Modal, Row} from 'antd';
import {freelancerAction} from "../../../actions";
import {useDispatch, useSelector} from "react-redux";
import {freelancerActionType} from "../../../actions/actionTypes";
import {contentMessage, notiMessage} from "../../../common/Message";
import LoadingData from "../../../components/LoadingData";

function ModalfreelancerAdmin(props) {
    const dispatch = useDispatch();

    const {visible, setVisible, typeForm, freelancer} = props;

    const freelancerReducer = useSelector((state) => state.freelancerReducer);

    // loading
    const [loading, setLoading] = useState(false);
    const [loadingSubmit, setLoadingSubmit] = useState(false);

    const form = props.form;
    const { getFieldDecorator } = form;

    const handleSubmit = (e) => {
        e.preventDefault();
        form.validateFields((err, values) => {
            if (!err) {
                let params = {
                    'username': values.username,
                    'email': values.email,
                    'password': values.password,
                    'role': 0,
                }
                if (typeForm === 'add') {
                    dispatch(freelancerAction.addFreelancer(params));
                    setLoadingSubmit(true);
                }
                if (typeForm === 'edit') {
                    let paramsUpdate = {
                        ...params,
                        id: freelancer,
                    }
                    dispatch(freelancerAction.updateFreelancer(paramsUpdate));
                    setLoadingSubmit(true);
                }
            }
        });
    }

    const handleCancel = () => {
        form.resetFields();
        setVisible(false);
    }

    const validateConfirmPass = (rule, value, callback) => {
        if (value && value.length >= 6) {
            let passwordValue = form.getFieldValue('password');
            if (value !== passwordValue) {
                callback('Confirm password is incorrect');
            }
        }
        callback();
    }

    useEffect(() => {
        if (
            freelancer.id &&
            visible &&
            typeForm === 'edit'
        ) {
            let params = {
                freelancer: freelancer.id,
            }
            dispatch(freelancerAction.detailFreelancer(params));
        }
        if (visible) {
            form.resetFields();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [freelancer.id, visible]);

    useEffect(() => {
        // get detail freelancer
        if (freelancerReducer.type === freelancerActionType.DETAIL_FREELANCER) {
            setLoading(true);
        }
        if (freelancerReducer.type === freelancerActionType.DETAIL_FREELANCER_SUCCESS) {
            setLoading(false);
            form.setFieldsValue(freelancerReducer.data || {});
        }

        // add freelancer
        if (freelancerReducer.type === freelancerActionType.ADD_FREELANCER_SUCCESS) {
            notiMessage(200, contentMessage.MESSAGE_ADD_SUCCESS);
            setLoadingSubmit(false);
            handleCancel();
        }
        if (freelancerReducer.type === freelancerActionType.ADD_FREELANCER_FAILED) {
            notiMessage(400, contentMessage.MESSAGE_ADD_FAILED);
            setLoadingSubmit(false);
        }

        // update freelancer
        if (freelancerReducer.type === freelancerActionType.UPDATE_FREELANCER_SUCCESS) {
            notiMessage(200, contentMessage.MESSAGE_UPDATE_SUCCESS);
            setLoadingSubmit(false);
            handleCancel();
        }
        if (freelancerReducer.type === freelancerActionType.UPDATE_FREELANCER_FAILED) {
            notiMessage(400, contentMessage.MESSAGE_UPDATE_FAILED);
            setLoadingSubmit(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [freelancerReducer]);

    return (
        <div>
            {/*{freelancer.id}*/}
            <Modal
                visible={visible}
                title={typeForm === 'add' ? 'Create freelancer' : 'Update freelancer'}
                width={window.innerWidth > 768 ? (window.innerWidth > 1400 ? '50%' : '60%') : '100%'}
                onCancel={handleCancel}
                footer={[
                    <Button key="back" onClick={handleCancel}>
                        Cancel
                    </Button>,
                    <Button key="submit" type="primary" loading={loadingSubmit} onClick={handleSubmit}>
                        {typeForm === 'add' ? 'Create' : 'Update'}
                    </Button>,
                ]}
            >
                {(loading && typeForm === 'edit') && <LoadingData/>}
                <div>
                    <Row gutter={16}>
                        <Col span={12}>
                            {form.address}
                        </Col>
                        <Col span={12}>
                        </Col>
                    </Row>
                </div>
            </Modal>
        </div>
    );
};

const WrappedModalfreelancerAdmin = Form.create()(ModalfreelancerAdmin);

export default WrappedModalfreelancerAdmin;
