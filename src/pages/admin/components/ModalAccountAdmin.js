import React, {useEffect, useState} from "react";
import {Button, Col, Form, Input, Modal, Row} from 'antd';
import {accountAction} from "../../../actions";
import {useDispatch, useSelector} from "react-redux";
import {accountActionType} from "../../../actions/actionTypes";
import {contentMessage, notiMessage} from "../../../common/Message";
import LoadingData from "../../../components/LoadingData";
import LabelInput from "../../../components/LabelInput";

function ModalAccountAdmin(props) {
    const dispatch = useDispatch();

    const {visible, setVisible, typeForm, accountId} = props;

    const accountReducer = useSelector((state) => state.accountReducer);

    // loading
    const [loading, setLoading] = useState(false);
    const [loadingSubmit, setLoadingSubmit] = useState(false);

    const form = props.form;
    const { getFieldDecorator } = form;

    const handleSubmit = (e) => {
        e.preventDefault();
        form.validateFields ((err, values) => {
            if (!err) {
                let params = {
                    'username': values.username,
                    'email': values.email,
                    'password': values.password,
                    'role': 0,
                }
                if (typeForm === 'add') {
                    dispatch(accountAction.addAccount(params));
                    setLoadingSubmit(true);
                }
                if (typeForm === 'edit') {
                    let paramsUpdate = {
                        ...params,
                        id: accountId,
                    }
                    dispatch(accountAction.updateAccount(paramsUpdate));
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
            accountId &&
            visible &&
            typeForm === 'edit'
        ) {
            let params = {
                accountId: accountId,
            }
            dispatch(accountAction.detailAccount(params));
        }
        if (visible) {
            form.resetFields();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [accountId, visible]);

    useEffect(() => {
        // get detail account
        if (accountReducer.type === accountActionType.DETAIL_ACCOUNT) {
            setLoading(true);
        }
        if (accountReducer.type === accountActionType.DETAIL_ACCOUNT_SUCCESS) {
            setLoading(false);
            form.setFieldsValue(accountReducer.data || {});
        }

        // add account
        if (accountReducer.type === accountActionType.ADD_ACCOUNT_SUCCESS) {
            notiMessage(200, contentMessage.MESSAGE_ADD_SUCCESS);
            setLoadingSubmit(false);
            handleCancel();
        }
        if (accountReducer.type === accountActionType.ADD_ACCOUNT_FAILED) {
            notiMessage(400, contentMessage.MESSAGE_ADD_FAILED);
            setLoadingSubmit(false);
        }

        // update account
        if (accountReducer.type === accountActionType.UPDATE_ACCOUNT_SUCCESS) {
            notiMessage(200, contentMessage.MESSAGE_UPDATE_SUCCESS);
            setLoadingSubmit(false);
            handleCancel();
        }
        if (accountReducer.type === accountActionType.UPDATE_ACCOUNT_FAILED) {
            notiMessage(400, contentMessage.MESSAGE_UPDATE_FAILED);
            setLoadingSubmit(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [accountReducer]);

    return (
        <div>
            <Modal
                visible={visible}
                title={typeForm === 'add' ? 'Create user' : 'Update user'}
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
                {(loading && typeForm === 'edit') && <LoadingData />}
                <Form layout="vertical" hideRequiredMark>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                label={
                                    <LabelInput
                                        text="Full name"
                                        required={true}
                                    />
                                }
                            >
                                {getFieldDecorator('username', {
                                    rules: [
                                        {
                                            required: true,
                                            message: 'Please enter full name'
                                        }
                                    ],
                                })(<Input placeholder="Full name" />)}
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label={
                                    <LabelInput
                                        text="Username (email format)"
                                        required={true}
                                    />
                                }
                            >
                                {getFieldDecorator('email', {
                                    rules: [
                                        {
                                            required: true,
                                            message: 'Please enter username'
                                        },
                                        {
                                            type: 'email',
                                            message: 'Email invalidate',
                                        },
                                    ],
                                })(
                                    <Input
                                        placeholder="example@email.com"
                                        disabled={typeForm === 'edit'}
                                    />,
                                )}
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={16}>
                        <Col md={12}>
                            <Form.Item
                                label={
                                    <LabelInput
                                        text="Password"
                                        required={typeForm === 'add'}
                                    />
                                }
                            >
                                {getFieldDecorator('password', {
                                    rules: [
                                        {
                                            required: typeForm === 'add',
                                            message: 'Please enter password'
                                        },
                                        {
                                            min: 6,
                                            message: 'Password minimum 6 characters'
                                        }
                                    ],
                                })(
                                    <Input.Password
                                        placeholder="Password"
                                        type="password"
                                    />,
                                )}
                            </Form.Item>
                        </Col>
                        <Col md={12}>
                            <Form.Item
                                label={
                                    <LabelInput
                                        text="Confirm password"
                                        required={typeForm === 'add'}
                                    />
                                }
                            >
                                {getFieldDecorator('passwordConfirm', {
                                    rules: [
                                        {
                                            required: typeForm === 'add',
                                            message: 'Please re-enter password'
                                        },
                                        {
                                            min: 6,
                                            message: 'Password minimum 6 characters'
                                        },
                                        {
                                            validator: validateConfirmPass,
                                        }
                                    ],
                                })(
                                    <Input.Password
                                        placeholder="Confirm password"
                                        type="password"
                                    />,
                                )}
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </Modal>
        </div>
    );
};

const WrappedModalAccountAdmin = Form.create()(ModalAccountAdmin);

export default WrappedModalAccountAdmin;
